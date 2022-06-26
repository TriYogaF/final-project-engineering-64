package book

import (
	"diary/user"
	"fmt"
	"log"
	"strconv"

	"github.com/gosimple/slug"
)

type Service interface {
	GetBooks() ([]Book, error)
	GetUserBooks(input GetBookDetailInput) ([]Book, error)
	GetBookByID(input GetBookDetailInput) (Book, error)
	CreateBook(input CreateBookInput) (Book, error)
	CreateBookCategory(input CreateBookInput, bookID int) ([]string, error)
	SaveImageCover(ID int, fileLocation string) (Book, error)
	SaveBookfile(ID int, fileLocation string) (Book, error)
	UpdateStatus(status GetBookStatusInput) (Book, error)
	GetBookByTitle(input GetSearchBookInput) ([]Book, error)
	GetBookByCategoryID(input GetBookDetailInput) ([]Book, error)
	UpdateBook(input CreateBookInput, bookID int) (Book, error)
	UpdateBookCategory(input CreateBookInput, bookID int) ([]string, error)
	SaveReadHistory(bookID int, UserID int) (History, error)
	GetLastReader(bookID int, UserID int) ([]user.User, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) GetBooks() ([]Book, error) {
	books, err := s.repository.FindAll()
	if err != nil {
		return books, err
	}

	return books, nil
}

func (s *service) GetUserBooks(input GetBookDetailInput) ([]Book, error) {

	books, err := s.repository.FindByUserID(input.ID)
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
	book.UserID = input.User.ID

	slugString := fmt.Sprintf("%s %d", input.Title, input.User.ID)
	book.Slug = slug.Make(slugString)

	newBook, err := s.repository.Save(book)
	if err != nil {
		return newBook, err
	}
	return newBook, nil
}

func (s *service) CreateBookCategory(input CreateBookInput, bookID int) ([]string, error) {

	_, err := s.repository.SaveBookCategory(input.Category, bookID)
	if err != nil {
		return nil, err
	}

	return input.Category, err
}

func (s *service) SaveImageCover(ID int, fileLocation string) (Book, error) {
	// find book by id
	book, err := s.repository.FindByID(ID)
	if err != nil {
		return book, err
	}

	// update atribute ImageCover
	book.CoverImage = fileLocation

	// save field ImageCover
	updateBook, err := s.repository.Update(book)
	if err != nil {
		return updateBook, err
	}

	return updateBook, nil
}

func (s *service) SaveBookfile(ID int, fileLocation string) (Book, error) {
	// find book by id
	book, err := s.repository.FindByID(ID)
	if err != nil {
		fmt.Println("error search data book")
		return book, err
	}

	// update atribute ImageCover
	book.File = fileLocation

	// save field ImageCover
	updateBook, err := s.repository.Update(book)
	if err != nil {
		fmt.Println("error save data book")
		return updateBook, err
	}

	return updateBook, nil
}

func (s *service) UpdateStatus(status GetBookStatusInput) (Book, error) {
	// find book by id
	book, err := s.repository.FindByID(status.ID)
	if err != nil {
		fmt.Println("error search data book")
		return book, err
	}

	// update atribute Status
	book.Status = status.Status

	// save field ImageCover
	updateBook, err := s.repository.Update(book)
	if err != nil {
		fmt.Println("error save data book")
		return updateBook, err
	}

	return updateBook, nil
}

func (s *service) GetBookByTitle(input GetSearchBookInput) ([]Book, error) {
	book, err := s.repository.FindByTitle(input.Title)

	if err != nil {
		return book, err
	}

	return book, nil
}

func (s *service) GetBookByCategoryID(input GetBookDetailInput) ([]Book, error) {
	book, err := s.repository.FindByCategoryID(input.ID)

	if err != nil {
		return book, err
	}

	return book, nil
}

func (s *service) UpdateBook(input CreateBookInput, bookID int) (Book, error) {
	// find book by id
	book, err := s.repository.FindByID(bookID)
	if err != nil {
		return book, err
	}

	book.Title = input.Title
	book.Writer = input.Writer
	book.Pages = input.Pages
	book.Synopsis = input.Synopsis

	slugString := fmt.Sprintf("%s %d", input.Title, input.User.ID)
	book.Slug = slug.Make(slugString)

	// save field
	updateBook, err := s.repository.Update(book)
	if err != nil {
		return updateBook, err
	}

	return updateBook, nil
}

func (s *service) UpdateBookCategory(input CreateBookInput, bookID int) ([]string, error) {
	var categories []string
	for _, category := range input.Category {
		categoryInt, _ := strconv.Atoi(category)
		find, _ := s.repository.FindBookCategoryByID(bookID, categoryInt)
		log.Println(find)

		if find.ID == 0 {
			categories = append(categories, category)
		}

	}

	if categories != nil {
		_, err := s.repository.SaveBookCategory(categories, bookID)
		log.Println(categories)
		log.Println(err)
		if err != nil {
			return nil, err
		}
	}

	return input.Category, nil
}

func (s *service) SaveReadHistory(bookID int, UserID int) (History, error) {
	readHistory := History{}
	readHistory.BookID = bookID
	readHistory.UserID = UserID

	saveHistory, err := s.repository.SaveHistory(readHistory)
	if err != nil {
		return saveHistory, err
	}

	return saveHistory, nil

}

func (s *service) GetLastReader(bookID int, UserID int) ([]user.User, error) {
	lastReader := History{}
	lastReader.BookID = bookID
	lastReader.UserID = UserID

	dataHistory, err := s.repository.GetLastReader(lastReader)
	if err != nil {
		return dataHistory, err
	}

	return dataHistory, nil

}
