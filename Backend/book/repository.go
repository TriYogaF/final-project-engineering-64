package book

import "database/sql"

type Repository interface {
	FindAll() ([]Book, error)
	FindByUserID(userID int) ([]Book, error)
}

type repository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) *repository {
	return &repository{db: db}
}

func (r *repository) FindAll() ([]Book, error) {

	rows, err := r.db.Query("SELECT * FROM books")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var books []Book
	for rows.Next() {
		var book Book
		err := rows.Scan(&book.ID, &book.UserID, &book.Title, &book.Writer, &book.Pages, &book.Sypnosis, &book.CoverImage, &book.File, &book.Status, &book.Slug, &book.CreatedAt, &book.UpdatedAt)
		if err != nil {
			return nil, err
		}
		books = append(books, book)
	}
	return books, nil
}

func (r *repository) FindByUserID(userID int) ([]Book, error) {
	rows, err := r.db.Query("SELECT * FROM books WHERE id = ?", userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var books []Book
	for rows.Next() {
		var book Book
		err := rows.Scan(&book.ID, &book.UserID, &book.Title, &book.Writer, &book.Pages, &book.Sypnosis, &book.CoverImage, &book.File, &book.Status, &book.Slug, &book.CreatedAt, &book.UpdatedAt)
		if err != nil {
			return nil, err
		}
		books = append(books, book)
	}
	return books, nil
}
