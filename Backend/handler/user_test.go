package handler

import (
	"bytes"
	authServiceMock "diary/auth/mocks"
	"diary/user"
	userServiceMock "diary/user/mocks"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/suite"
)

type userHandlerSuite struct {
	suite.Suite
	userService   *userServiceMock.Service
	authService   *authServiceMock.Service
	handler       userHandler
	testingServer *httptest.Server
}

func (suite *userHandlerSuite) SetupSuite() {
	userService := new(userServiceMock.Service)
	authService := new(authServiceMock.Service)
	handler := NewUserHandler(userService, authService)

	router := gin.Default()
	router.POST("/users", handler.RegisterUser)
	router.POST("/sessions", handler.Login)
	router.POST("/check-email", handler.CheckEmailRegister)
	testingServer := httptest.NewServer(router)

	suite.testingServer = testingServer
	suite.userService = userService
	suite.authService = authService
	suite.handler = *handler
}

func (suite *userHandlerSuite) TearDownSuite() {
	defer suite.testingServer.Close()
}

func (suite *userHandlerSuite) TestRegistartion() {
	newUser := user.RegisterUserInput{
		Name:     "Test",
		Gender:   "Laki",
		Email:    "test@gmail.com",
		Password: "test",
	}

	var respUser user.User
	suite.userService.On("RegisterUser", newUser).Return(respUser, nil)

	requestBody, err := json.Marshal(&newUser)
	suite.NoError(err, "can not marshal struct to json")

	response, err := http.Post(fmt.Sprintf("%s/users", suite.testingServer.URL), "application/json", bytes.NewBuffer(requestBody))
	suite.NoError(err, "no error when calling the endpoint")
	defer response.Body.Close()

	suite.Equal(http.StatusOK, response.StatusCode)
	suite.userService.AssertExpectations(suite.T())
}

func (suite *userHandlerSuite) TestLogin() {
	loginUser := user.LoginInput{
		Email:    "test@gmail.com",
		Password: "testxx",
	}

	var respUser user.User
	token := "initokentest"
	suite.userService.On("Login", loginUser).Return(respUser, nil)
	suite.authService.On("GenerateToken", 1).Return(token, nil)

	requestBody, err := json.Marshal(&respUser)
	suite.NoError(err, "can not marshal struct to json")

	response, err := http.Post(fmt.Sprintf("%s/sessions", suite.testingServer.URL), "application/json", bytes.NewBuffer(requestBody))
	suite.NoError(err, "no error when calling the endpoint")
	defer response.Body.Close()

	suite.Equal(http.StatusOK, response.StatusCode)
	suite.userService.AssertExpectations(suite.T())
}

func (suite *userHandlerSuite) TestCheckEmail() {
	input := user.CheckEmailInput{
		Email: "test@gmail.com",
	}

	suite.userService.On("IsEmailAvailable", input).Return(true, nil)

	requestBody, err := json.Marshal(&input)
	suite.NoError(err, "can not marshal struct to json")

	response, err := http.Post(fmt.Sprintf("%s/check-email", suite.testingServer.URL), "application/json", bytes.NewBuffer(requestBody))
	suite.NoError(err, "no error when calling the endpoint")
	defer response.Body.Close()

	suite.Equal(http.StatusOK, response.StatusCode)
	suite.userService.AssertExpectations(suite.T())
}

func TestUserHandler(t *testing.T) {
	suite.Run(t, new(userHandlerSuite))
}
