package main

import (
	"diary/handler"
	"diary/user"
	"log"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(sqlite.Open("diary.db"), &gorm.Config{})

	if err != nil {
		log.Fatal(err.Error())
	}

	userRepository := user.NewRepository(db)
	userService := user.NewService(userRepository)
	userHandler := handler.NewUserHandler(userService)

	router := gin.Default()
	api := router.Group("api/v1")
	
	api.POST("/users", userHandler.RegisterUser)
	router.Run()


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