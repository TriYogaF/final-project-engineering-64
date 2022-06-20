package main

import (
	"database/sql"
	"diary/auth"
	"diary/handler"
	"diary/helper"
	"diary/user"
	"log"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
	cors "github.com/rs/cors/wrapper/gin"
)

func main() {
	db, err := sql.Open("sqlite3", "diary.db")
	// db, err := gorm.Open(sqlite.Open("diary.db"), &gorm.Config{})

	if err != nil {
		log.Fatal(err.Error())
	}

	userRepository := user.NewRepository(db)
	userService := user.NewService(userRepository)
	authService := auth.NewService()

	userHandler := handler.NewUserHandler(userService, authService)

	router := gin.Default()

	router.Use(cors.Default())
	api := router.Group("api/v1")
	api.POST("/users", userHandler.RegisterUser)
	api.POST("/sessions", userHandler.Login)
	api.POST("/check-email", userHandler.CheckEmailRegister)
	api.POST("/upload-avatar", authMiddleware(authService, userService) ,userHandler.UploadAvatar)
	router.Run()


}

func authMiddleware(authService auth.Service, userService user.Service) gin.HandlerFunc {
	return func(c *gin.Context){
			tokenHeader := c.GetHeader("Authorization")
			
			if !strings.Contains(tokenHeader, "Bearer") {
				response := helper.APIResponse("Unauthorized", http.StatusUnauthorized, "error", nil)
				c.AbortWithStatusJSON(http.StatusUnauthorized, response)
				return
			}

			tokenJWT := ""
			tokenArray := strings.Split(tokenHeader, " ")
			if len(tokenArray) == 2 {
				tokenJWT = tokenArray[1]
			}

			token, err := authService.ValidateToken(tokenJWT)
			if err != nil {
				response := helper.APIResponse("Unauthorized", http.StatusUnauthorized, "error", nil)
				c.AbortWithStatusJSON(http.StatusUnauthorized, response)
				return
			}

			claim, ok := token.Claims.(jwt.MapClaims)
			if !ok || !token.Valid {
				response := helper.APIResponse("Unauthorized", http.StatusUnauthorized, "error", nil)
				c.AbortWithStatusJSON(http.StatusUnauthorized, response)
				return
			}

			userID := int(claim["user_id"].(float64))

			user, err := userService.GetUserByID(userID)
			if err != nil {
				response := helper.APIResponse("Unauthorized", http.StatusUnauthorized, "error", nil)
				c.AbortWithStatusJSON(http.StatusUnauthorized, response)
				return
			}

			c.Set("CurrentUser", user)
	}
}



// Layering :
// handler
// service
// repository
// db


// input dari user
// handler -> mapping inputan dari user menjadi struct input
// service : mapping dari struct input  diubah ke struct User(db)
// repositoryy
// db