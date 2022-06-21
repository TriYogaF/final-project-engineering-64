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
		listCategory, err := r.FindCategories(book.ID)
		if err != nil {
			return nil, err
		}
		book.Category = listCategory
		books = append(books, book)
	}
	return books, nil
}

func (r *repository) FindByUserID(userID int) ([]Book, error) {
	rows, err := r.db.Query("SELECT * FROM books WHERE user_id = ?", userID)
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
		listCategory, err := r.FindCategories(book.ID)
		if err != nil {
			return nil, err
		}
		book.Category = listCategory
		books = append(books, book)
	}
	return books, nil
}

func (r *repository) FindCategories(bookID int) ([]string, error) {
	rows, err := r.db.Query("SELECT c.name as category FROM book_categories as a LEFT JOIN categories as c ON a.category_id = c.id WHERE a.book_id = ?", bookID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var categories []string
	for rows.Next() {
		var category string
		err := rows.Scan(&category)
		if err != nil {
			return nil, err
		}
		categories = append(categories, category)
	}
	return categories, nil

}
