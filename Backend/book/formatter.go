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
