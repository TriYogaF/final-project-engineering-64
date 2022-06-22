package handler

import (
	"diary/book"
	"diary/helper"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type bookHandler struct {
	service book.Service
}

func NewBookHandler(service book.Service) *bookHandler {
	return &bookHandler{service}
}

func (h *bookHandler) GetBooks(c *gin.Context) {
	userID, _ := strconv.Atoi(c.Query("user_id"))

	books, err := h.service.GetBooks(userID)
	if err != nil {
		response := helper.APIResponse("Error to get books data", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	response := helper.APIResponse("List of Books", http.StatusOK, "success", book.FormatBooks(books))
	c.JSON(http.StatusOK, response)
}

func (h *bookHandler) GetBook(c *gin.Context){
	var input book.GetBookDetailInput

	err := c.ShouldBindUri(&input)
	if err != nil {
		response := helper.APIResponse("Failed to get books data", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	bookDetail, err := h.service.GetBookByID(input)
	if err != nil {
		response := helper.APIResponse("Failed to get books data", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	response := helper.APIResponse("Detail of Book", http.StatusOK, "success", book.FormatBookDetail(bookDetail))
	c.JSON(http.StatusOK, response)
}