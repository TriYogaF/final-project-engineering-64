package book

import (
	"fmt"

	"github.com/gosimple/slug"
)

type Service interface {
	GetBooks(userID int) ([]Book, error)
	GetBookByID(input GetBookDetailInput) (Book, error)
	CreateBook(input CreateBookInput) (Book, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) GetBooks(userID int) ([]Book, error) {
	if userID != 0 {
		books, err := s.repository.FindByUserID(userID)
		if err != nil {
			return books, err
		}

		return books, nil
	}

	books, err := s.repository.FindAll()
	if err != nil {
		return books, err
	}

	return books, nil
}

func (s *service) GetBookByID(input GetBookDetailInput) (Book, error) {
	book, err := s.repository.FindByID(input.ID)

	if err != nil {
		return book, err
	}

	return book, nil
}

func (s *service) CreateBook(input CreateBookInput) (Book, error) {
	book := Book{}
	book.Title = input.Title
	book.Writer = input.Writer
	book.Pages = input.Pages
	book.Synopsis = input.Synopsis
	book.Status = "Pending"
	book.CoverImage = input.CoverImage
	book.File = input.File
	book.UserID = input.User.ID
	
	slugString := fmt.Sprintf("%s %d", input.Title, input.User.ID)
	book.Slug = slug.Make(slugString)


	newBook, err := s.repository.Save(book)
	if err != nil {
		return newBook, err
	}

	return newBook, nil
}