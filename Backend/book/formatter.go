package book

import "time"

type BookFormatter struct {
	ID         int       `json:"id"`
	Title      string    `json:"title"`
	Writer     string    `json:"writer"`
	CoverImage *string   `json:"cover_image"`
	Slug       string    `json:"slug"`
	CreatedAt  time.Time `json:"created_at"`
}

func FormatBook(book Book) BookFormatter {
	BookFormatter := BookFormatter{}
	BookFormatter.ID = book.ID
	BookFormatter.Title = book.Title
	BookFormatter.Writer = book.Writer
	BookFormatter.CoverImage = book.CoverImage
	BookFormatter.Slug = book.Slug
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

type BookDetailFormatter struct{
	ID 			int 	`json:"id"`
	Title		string 	`json:"title"`
	Writer 		string 	`json:"writer"`
	Pages 		int 	`json:"pages"`
	Sypnosis 	string 	`json:"sypnosis"`
	CoverImage 	*string	`json:"cover_image"`
	File 		*string `json:"file"`
	Status 		string `json:"status"`
	Slug 		string `json:"slug"`
	CreatedAt 	time.Time `json:"created_at"`
	Category 	[]string `json:"category"`
}

func FormatBookDetail(book Book) BookDetailFormatter {
	bookDetailFormatter := BookDetailFormatter{}
	bookDetailFormatter.ID = book.ID
	bookDetailFormatter.Title = book.Title
	bookDetailFormatter.Writer = book.Writer
	bookDetailFormatter.Pages = book.Pages
	bookDetailFormatter.Sypnosis = book.Sypnosis
	bookDetailFormatter.CoverImage = book.CoverImage
	bookDetailFormatter.File = book.File
	bookDetailFormatter.Status = book.Status
	bookDetailFormatter.Slug = book.Slug
	bookDetailFormatter.CreatedAt = book.CreatedAt
	bookDetailFormatter.Category = book.Category

	return bookDetailFormatter
}