package handler

import (
	"diary/helper"
	"diary/user"
	"net/http"

	"github.com/gin-gonic/gin"
)

type userHandler struct {
	userService user.Service
}

func NewUserHandler(userService user.Service) *userHandler {
	return &userHandler{userService}
}

func (h *userHandler) RegisterUser(c *gin.Context){
	// aambil input dari user
	// ,ap inputan ke struct Register
	// passing struc sebagai parameter

	var input user.RegisterUserInput
	
	err := c.ShouldBindJSON(&input)
	if err != nil {
		errors := helper.FormatValidationError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Register account failed", http.StatusUnprocessableEntity, "error", errorMessage)
		 c.JSON(http.StatusUnprocessableEntity, response)
		 return
	}

	newUser, err := h.userService.RegisterUser(input)
	if err != nil {
		response := helper.APIResponse("Register account failed", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		 return
	}

	formatter := user.FormatUser(newUser, "tokentokentokentokentoken")
	
	response := helper.APIResponse("Account has been registered", http.StatusOK, "success", formatter)

	c.JSON(http.StatusOK, response)
}	


func (h *userHandler) Login(c *gin.Context) {
	// user menginput data
	// inputan user diambil handler
	// mapping input user ke input struct
	// input struct kirim ke service
	// service mencari data user dengan bantuan repository
	// match password


	var input user.LoginInput

	err := c.ShouldBindJSON(&input)
	if err != nil {
		errors := helper.FormatValidationError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Login Failed", http.StatusUnprocessableEntity, "error", errorMessage)
		 c.JSON(http.StatusUnprocessableEntity, response)
		 return
	}

	loggedinUser, err := h.userService.Login(input)

	if err != nil {
		errorMessage := gin.H{"errors": err.Error()}

		response := helper.APIResponse("Login Failed", http.StatusUnprocessableEntity, "error", errorMessage)
		 c.JSON(http.StatusUnprocessableEntity, response)
		 return
	}

	formatter := user.FormatUser(loggedinUser, "token123456789")

	response := helper.APIResponse("Login Successfully", http.StatusOK, "success", formatter)

	c.JSON(http.StatusOK, response)
}

func (h *userHandler) CheckEmailRegister(c *gin.Context) {
	// masuk inputan email dari user
	// inputan di mapping ke struct input
	// struct input dikirim ke service
	// service akan check email sudah tersedia aatau belum lewat repository

	var input user.CheckEmailInput

	err := c.ShouldBindJSON(&input)
	if err != nil {
		errors := helper.FormatValidationError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Check email failed", http.StatusUnprocessableEntity, "error", errorMessage)
		 c.JSON(http.StatusUnprocessableEntity, response)
		 return
	}

	IsEmailAvailable, err := h.userService.IsEmailAvailable(input)
	if err != nil {
		errorMessage := gin.H{"errors": "Server Error"}

		response := helper.APIResponse("Check email failed", http.StatusUnprocessableEntity, "error", errorMessage)
		 c.JSON(http.StatusUnprocessableEntity, response)
		 return
	}	

	data := gin.H{
		"is_email_available" : IsEmailAvailable,
	}

	metaMessage := "Email has been registered"

	if IsEmailAvailable{
		metaMessage = "Email is available"
	}

	response := helper.APIResponse(metaMessage, http.StatusOK, "success", data)
	c.JSON(http.StatusOK, response)

}