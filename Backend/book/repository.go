package book

import (
	"database/sql"
	"diary/user"
	"fmt"
	"log"
	"strconv"
	"strings"
	"time"
)

type Repository interface {
	FindAll() ([]Book, error)
	FindByUserID(userID int) ([]Book, error)
	FindByID(ID int) (Book, error)
	Save(book Book) (Book, error)
	SaveBookCategory(categories []string, ID int) ([]string, error)
	Update(book Book) (Book, error)
	FindByTitle(title string) ([]Book, error)
	FindByCategoryID(ID int) ([]Book, error)
	FindCategories(bookID int) ([]string, error)
	FindBookCategoryByID(bookID int, categoryID int) (BookCategory, error)
	SaveHistory(readHistory History) (History, error)
	GetLastReader(history History) ([]user.User, error)
	GetReview(bookID int, UserID int) (Review, error)
	SaveReview(review Review) (Review, error)
	UpdateReview(review Review) (Review, error)
	GetBookReview(bookID int) (int, error)
}

type repository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) *repository {
	return &repository{db: db}
}

func (r *repository) FindAll() ([]Book, error) {

	rows, err := r.db.Query("SELECT * FROM books WHERE status = 'Active'")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var books []Book
	for rows.Next() {
		var book Book
		err := rows.Scan(&book.ID, &book.UserID, &book.Title, &book.Writer, &book.Pages, &book.Synopsis, &book.CoverImage, &book.File, &book.Status, &book.Slug, &book.CreatedAt, &book.UpdatedAt)
		if err != nil {
			return nil, err
		}

		score, err := r.GetBookReview(book.ID)
		log.Println(err)
		if err != nil {
			return nil, err
		}
		book.Score = score
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
		err := rows.Scan(&book.ID, &book.UserID, &book.Title, &book.Writer, &book.Pages, &book.Synopsis, &book.CoverImage, &book.File, &book.Status, &book.Slug, &book.CreatedAt, &book.UpdatedAt)
		if err != nil {
			return nil, err
		}

		score, err := r.GetBookReview(book.ID)
		log.Println(err)
		if err != nil {
			return nil, err
		}
		book.Score = score
		books = append(books, book)
	}
	return books, nil
}

// Load relation data Category
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

func (r *repository) FindByID(ID int) (Book, error) {
	var book Book

	row := r.db.QueryRow("SELECT * FROM books WHERE id = ? ", ID)

	err := row.Scan(&book.ID, &book.UserID, &book.Title, &book.Writer, &book.Pages, &book.Synopsis, &book.CoverImage, &book.File, &book.Status, &book.Slug, &book.CreatedAt, &book.UpdatedAt)
	if err != nil {
		return book, err
	}

	listCategory, err := r.FindCategories(book.ID)
	if err != nil {
		return book, err
	}
	book.Category = listCategory

	return book, nil
}

func (r *repository) Save(book Book) (Book, error) {
	send, err := r.db.Exec("INSERT INTO books (user_id, title, writer, pages, synopsis, cover_image, file, status, slug, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?)", book.UserID, book.Title, book.Writer, book.Pages, book.Synopsis, book.CoverImage, book.File, book.Status, book.Slug, time.Now(), time.Now())

	if err != nil {
		return book, err
	}

	id, err := send.LastInsertId()
	if err != nil {
		return book, err
	}

	book.ID = int(id)

	return book, nil
}

func (r *repository) SaveBookCategory(categories []string, ID int) ([]string, error) {
	valueStrings := make([]string, 0, len(categories))
	valueArgs := make([]interface{}, 0, len(categories)*2)
	i := 0
	for _, post := range categories {
		valueStrings = append(valueStrings, "(?, ?)")
		valueArgs = append(valueArgs, ID)
		category, _ := strconv.Atoi(post)
		valueArgs = append(valueArgs, category)
		i++
	}

	stmt := fmt.Sprintf("INSERT INTO book_categories (book_id, category_id) VALUES %s",
		strings.Join(valueStrings, ","))
	_, err := r.db.Exec(stmt, valueArgs...)

	return categories, err
}

func (r *repository) Update(book Book) (Book, error) {
	// err := r.db.Save(&user).Error
	_, err := r.db.Exec("update books set title = ?, writer = ?, pages = ?, synopsis = ?, cover_image = ?, file = ?, status= ?, slug = ?, updated_at = ? where id = ?", book.Title, book.Writer, book.Pages, book.Synopsis, book.CoverImage, book.File, book.Status, book.Slug, time.Now(), book.ID)

	if err != nil {
		return book, err
	}

	return book, nil
}

func (r *repository) FindByTitle(title string) ([]Book, error) {
	rows, err := r.db.Query("SELECT * FROM books WHERE title LIKE ? and status = 'Active'", "%"+title+"%")
	fmt.Println(rows)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var books []Book
	for rows.Next() {
		var book Book
		err := rows.Scan(&book.ID, &book.UserID, &book.Title, &book.Writer, &book.Pages, &book.Synopsis, &book.CoverImage, &book.File, &book.Status, &book.Slug, &book.CreatedAt, &book.UpdatedAt)
		if err != nil {
			return nil, err
		}

		score, err := r.GetBookReview(book.ID)
		log.Println(err)
		if err != nil {
			return nil, err
		}
		book.Score = score

		books = append(books, book)
	}
	return books, nil
}

func (r *repository) FindByCategoryID(ID int) ([]Book, error) {
	rows, err := r.db.Query("SELECT b.* FROM book_categories as a LEFT JOIN books as b ON a.book_id = b.id LEFT JOIN categories as c ON a.category_id = c.id WHERE a.category_id = ? and b.status = 'Active'", ID)
	fmt.Println(rows)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var books []Book
	for rows.Next() {
		var book Book
		err := rows.Scan(&book.ID, &book.UserID, &book.Title, &book.Writer, &book.Pages, &book.Synopsis, &book.CoverImage, &book.File, &book.Status, &book.Slug, &book.CreatedAt, &book.UpdatedAt)
		if err != nil {
			return nil, err
		}

		score, err := r.GetBookReview(book.ID)
		log.Println(err)
		if err != nil {
			return nil, err
		}
		book.Score = score

		books = append(books, book)
	}
	return books, nil
}

func (r *repository) FindBookCategoryByID(bookID int, categoryID int) (BookCategory, error) {
	var book BookCategory

	row := r.db.QueryRow("SELECT * FROM book_categories WHERE book_id = ? and category_id = ?", bookID, categoryID)

	err := row.Scan(&book.ID, &book.BookID, &book.CategoryID)
	if err != nil {
		return book, err
	}

	return book, nil
}

func (r *repository) SaveHistory(readHistory History) (History, error) {
	save, err := r.db.Exec("INSERT INTO history (book_id, user_id,  created_at) VALUES (?,?,?)", readHistory.BookID, readHistory.UserID, time.Now())

	if err != nil {
		return readHistory, err
	}

	id, err := save.LastInsertId()
	if err != nil {
		return readHistory, err
	}

	readHistory.ID = int(id)

	return readHistory, nil
}

func (r *repository) GetLastReader(history History) ([]user.User, error) {
	rows, err := r.db.Query("SELECT DISTINCT b.id, b.name, b.gender, b.file_avatar FROM history as a LEFT JOIN users as b ON a.user_id = b.id WHERE a.book_id = ?", history.BookID)
	fmt.Println(rows)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var users []user.User
	for rows.Next() {
		var user user.User
		err := rows.Scan(&user.ID, &user.Name, &user.Gender, &user.FileAvatar)
		if err != nil {
			return nil, err
		}

		users = append(users, user)
	}
	return users, nil

}

func (r *repository) GetReview(bookID int, UserID int) (Review, error) {
	var bookReview Review

	row := r.db.QueryRow("SELECT * FROM book_reviews WHERE book_id = ? and user_id = ?", bookID, UserID)

	err := row.Scan(&bookReview.ID, &bookReview.UserID, &bookReview.BookID, &bookReview.Score, &bookReview.CreatedAt, &bookReview.UpdatedAt)
	if err != nil {
		return bookReview, nil
	}

	return bookReview, nil
}

func (r *repository) SaveReview(review Review) (Review, error) {
	save, err := r.db.Exec("INSERT INTO book_reviews (user_id, book_id, score, created_at, updated_at) VALUES (?,?,?,?,?)", review.UserID, review.BookID, review.Score, time.Now(), time.Now())

	if err != nil {
		return review, err
	}

	id, err := save.LastInsertId()
	if err != nil {
		return review, err
	}

	review.ID = int(id)

	return review, nil
}

func (r *repository) UpdateReview(review Review) (Review, error) {
	_, err := r.db.Exec("UPDATE book_reviews SET score = ?, updated_at = ? WHERE id = ?", review.Score, time.Now(), review.ID)

	if err != nil {
		return review, err
	}

	return review, nil
}

func (r *repository) GetBookReview(bookID int) (int, error) {
	var score int
	row := r.db.QueryRow("SELECT AVG(score) FROM book_reviews WHERE book_id = ?", bookID)

	err := row.Scan(&score)
	if err != nil {
		return 0, nil
	}

	return score, nil
}
