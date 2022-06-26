package book

import (
	"diary/user"
	"time"
)

type BookFormatter struct {
	ID         int       `json:"id"`
	Title      string    `json:"title"`
	Writer     string    `json:"writer"`
	CoverImage string    `json:"cover_image"`
	Slug       string    `json:"slug"`
	Status     string    `json:"status"`
	CreatedAt  time.Time `json:"created_at"`
	// Category 	string `json:"category"`
}

func FormatBook(book Book) BookFormatter {
	BookFormatter := BookFormatter{}
	BookFormatter.ID = book.ID
	BookFormatter.Title = book.Title
	BookFormatter.Writer = book.Writer
	BookFormatter.CoverImage = book.CoverImage
	BookFormatter.Slug = book.Slug
	BookFormatter.Status = book.Status
	BookFormatter.CreatedAt = book.CreatedAt

	return BookFormatter
}

func FormatBooks(books []Book) []BookFormatter {
	booksFormatter := []BookFormatter{}

	for _, book := range books {
		bookFormatter := FormatBook(book)
		booksFormatter = append(booksFormatter, bookFormatter)
	}

	return booksFormatter
}

type BookDetailFormatter struct {
	ID         int       `json:"id"`
	Title      string    `json:"title"`
	Writer     string    `json:"writer"`
	Pages      int       `json:"pages"`
	Synopsis   string    `json:"synopsis"`
	CoverImage string    `json:"cover_image"`
	File       string    `json:"file"`
	Status     string    `json:"status"`
	Slug       string    `json:"slug"`
	CreatedAt  time.Time `json:"created_at"`
	Category   []string  `json:"category"`
}

func FormatBookDetail(book Book) BookDetailFormatter {
	bookDetailFormatter := BookDetailFormatter{}
	bookDetailFormatter.ID = book.ID
	bookDetailFormatter.Title = book.Title
	bookDetailFormatter.Writer = book.Writer
	bookDetailFormatter.Pages = book.Pages
	bookDetailFormatter.Synopsis = book.Synopsis
	bookDetailFormatter.CoverImage = book.CoverImage
	bookDetailFormatter.File = book.File
	bookDetailFormatter.Status = book.Status
	bookDetailFormatter.Slug = book.Slug
	bookDetailFormatter.CreatedAt = book.CreatedAt
	bookDetailFormatter.Category = book.Category

	return bookDetailFormatter
}

type ReadBookFormatter struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Pages int    `json:"pages"`
	File  string `json:"file"`
}

func FormatReadBook(book Book) ReadBookFormatter {
	readBookFormatter := ReadBookFormatter{}
	readBookFormatter.ID = book.ID
	readBookFormatter.Title = book.Title
	readBookFormatter.Pages = book.Pages
	readBookFormatter.File = book.File

	return readBookFormatter
}

type LastReaderFormatter struct {
	ID         int    `json:"id"`
	Name       string `json:"name"`
	Gender     string `json:"gender"`
	FileAvatar string `json:"file_avatar"`
	// Time       time.Time `json:"time"`
}

func FormatLastReader(users []user.User) []LastReaderFormatter {
	lastReaders := []LastReaderFormatter{}

	for _, user := range users {
		lastReader := LastReaderFormatter{}
		lastReader.ID = user.ID
		lastReader.Name = user.Name
		lastReader.Gender = user.Gender
		lastReader.FileAvatar = user.FileAvatar
		// lastReader.Time = user.CreatedAt

		lastReaders = append(lastReaders, lastReader)
	}

	return lastReaders
}
