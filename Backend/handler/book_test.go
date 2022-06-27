package handler

import (
	"diary/book"
	"diary/book/mocks"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/suite"
)

type bookHandlerSuite struct {
	suite.Suite
	usecase       *mocks.Service
	handler       bookHandler
	testingServer *httptest.Server
}

func (suite *bookHandlerSuite) SetupSuite() {
	usecase := new(mocks.Service)
	handler := NewBookHandler(usecase)

	router := gin.Default()
	router.GET("/books", handler.GetBooks)
	router.GET("/books/user/:id", handler.GetUserBooks)

	testingServer := httptest.NewServer(router)

	suite.testingServer = testingServer
	suite.usecase = usecase
	suite.handler = *handler
}

func (suite *bookHandlerSuite) TearDownSuite() {
	defer suite.testingServer.Close()
}

func (suite *bookHandlerSuite) TestGetBooks() {
	books := []book.Book{
		{
			Title:  "Book1",
			Writer: "",
		},
		{
			Title:  "Book2",
			Writer: "",
		},
	}

	suite.usecase.On("GetBooks").Return(books, nil)

	response, err := http.Get(fmt.Sprintf("%s/books", suite.testingServer.URL))
	suite.NoError(err, "no error when calling the endpoint")
	defer response.Body.Close()

	suite.Equal(http.StatusOK, response.StatusCode)
	suite.usecase.AssertExpectations(suite.T())
}

func (suite *bookHandlerSuite) TestGetUserBook() {
	var input book.GetBookDetailInput
	input.ID = 1

	books := []book.Book{
		{
			Title:  "Book1",
			Writer: "",
			UserID: 1,
		},
		{
			Title:  "Book2",
			Writer: "",
			UserID: 1,
		},
	}

	suite.usecase.On("GetUserBooks", input).Return(books, nil)
	response, err := http.Get(fmt.Sprintf("%s/books/user/%d", suite.testingServer.URL, input.ID))
	suite.NoError(err, "no error when calling the endpoint")
	defer response.Body.Close()

	suite.Equal(http.StatusOK, response.StatusCode)
	suite.usecase.AssertExpectations(suite.T())
}

func (suite *bookHandlerSuite) TestGetBookByID() {
	var input book.GetBookDetailInput
	input.ID = 1

	books := []book.Book{
		{
			Title:  "Book1",
			Writer: "",
			UserID: 1,
		},
		{
			Title:  "Book2",
			Writer: "",
			UserID: 1,
		},
	}

	suite.usecase.On("GetUserBooks", input).Return(books, nil)
	response, err := http.Get(fmt.Sprintf("%s/books/user/%d", suite.testingServer.URL, input.ID))
	suite.NoError(err, "no error when calling the endpoint")
	defer response.Body.Close()

	suite.Equal(http.StatusOK, response.StatusCode)
	suite.usecase.AssertExpectations(suite.T())
}

func TestBookHandler(t *testing.T) {
	suite.Run(t, new(bookHandlerSuite))
}
