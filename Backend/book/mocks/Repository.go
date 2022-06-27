// Code generated by mockery 2.9.0. DO NOT EDIT.

package mocks

import (
	book "diary/book"
	user "diary/user"

	mock "github.com/stretchr/testify/mock"
)

// Repository is an autogenerated mock type for the Repository type
type Repository struct {
	mock.Mock
}

// FindAll provides a mock function with given fields:
func (_m *Repository) FindAll() ([]book.Book, error) {
	ret := _m.Called()

	var r0 []book.Book
	if rf, ok := ret.Get(0).(func() []book.Book); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]book.Book)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func() error); ok {
		r1 = rf()
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FindBookCategoryByID provides a mock function with given fields: bookID, categoryID
func (_m *Repository) FindBookCategoryByID(bookID int, categoryID int) (book.BookCategory, error) {
	ret := _m.Called(bookID, categoryID)

	var r0 book.BookCategory
	if rf, ok := ret.Get(0).(func(int, int) book.BookCategory); ok {
		r0 = rf(bookID, categoryID)
	} else {
		r0 = ret.Get(0).(book.BookCategory)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int, int) error); ok {
		r1 = rf(bookID, categoryID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FindByCategoryID provides a mock function with given fields: ID
func (_m *Repository) FindByCategoryID(ID int) ([]book.Book, error) {
	ret := _m.Called(ID)

	var r0 []book.Book
	if rf, ok := ret.Get(0).(func(int) []book.Book); ok {
		r0 = rf(ID)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]book.Book)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(ID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FindByID provides a mock function with given fields: ID
func (_m *Repository) FindByID(ID int) (book.Book, error) {
	ret := _m.Called(ID)

	var r0 book.Book
	if rf, ok := ret.Get(0).(func(int) book.Book); ok {
		r0 = rf(ID)
	} else {
		r0 = ret.Get(0).(book.Book)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(ID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FindByTitle provides a mock function with given fields: title
func (_m *Repository) FindByTitle(title string) ([]book.Book, error) {
	ret := _m.Called(title)

	var r0 []book.Book
	if rf, ok := ret.Get(0).(func(string) []book.Book); ok {
		r0 = rf(title)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]book.Book)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(string) error); ok {
		r1 = rf(title)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FindByUserID provides a mock function with given fields: userID
func (_m *Repository) FindByUserID(userID int) ([]book.Book, error) {
	ret := _m.Called(userID)

	var r0 []book.Book
	if rf, ok := ret.Get(0).(func(int) []book.Book); ok {
		r0 = rf(userID)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]book.Book)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(userID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FindCategories provides a mock function with given fields: bookID
func (_m *Repository) FindCategories(bookID int) ([]string, error) {
	ret := _m.Called(bookID)

	var r0 []string
	if rf, ok := ret.Get(0).(func(int) []string); ok {
		r0 = rf(bookID)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]string)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(bookID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetBookReview provides a mock function with given fields: bookID
func (_m *Repository) GetBookReview(bookID int) (int, error) {
	ret := _m.Called(bookID)

	var r0 int
	if rf, ok := ret.Get(0).(func(int) int); ok {
		r0 = rf(bookID)
	} else {
		r0 = ret.Get(0).(int)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(bookID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetLastReader provides a mock function with given fields: history
func (_m *Repository) GetLastReader(history book.History) ([]user.User, error) {
	ret := _m.Called(history)

	var r0 []user.User
	if rf, ok := ret.Get(0).(func(book.History) []user.User); ok {
		r0 = rf(history)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]user.User)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(book.History) error); ok {
		r1 = rf(history)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetReview provides a mock function with given fields: bookID, UserID
func (_m *Repository) GetReview(bookID int, UserID int) (book.Review, error) {
	ret := _m.Called(bookID, UserID)

	var r0 book.Review
	if rf, ok := ret.Get(0).(func(int, int) book.Review); ok {
		r0 = rf(bookID, UserID)
	} else {
		r0 = ret.Get(0).(book.Review)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int, int) error); ok {
		r1 = rf(bookID, UserID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Save provides a mock function with given fields: _a0
func (_m *Repository) Save(_a0 book.Book) (book.Book, error) {
	ret := _m.Called(_a0)

	var r0 book.Book
	if rf, ok := ret.Get(0).(func(book.Book) book.Book); ok {
		r0 = rf(_a0)
	} else {
		r0 = ret.Get(0).(book.Book)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(book.Book) error); ok {
		r1 = rf(_a0)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// SaveBookCategory provides a mock function with given fields: categories, ID
func (_m *Repository) SaveBookCategory(categories []string, ID int) ([]string, error) {
	ret := _m.Called(categories, ID)

	var r0 []string
	if rf, ok := ret.Get(0).(func([]string, int) []string); ok {
		r0 = rf(categories, ID)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]string)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func([]string, int) error); ok {
		r1 = rf(categories, ID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// SaveHistory provides a mock function with given fields: readHistory
func (_m *Repository) SaveHistory(readHistory book.History) (book.History, error) {
	ret := _m.Called(readHistory)

	var r0 book.History
	if rf, ok := ret.Get(0).(func(book.History) book.History); ok {
		r0 = rf(readHistory)
	} else {
		r0 = ret.Get(0).(book.History)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(book.History) error); ok {
		r1 = rf(readHistory)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// SaveReview provides a mock function with given fields: review
func (_m *Repository) SaveReview(review book.Review) (book.Review, error) {
	ret := _m.Called(review)

	var r0 book.Review
	if rf, ok := ret.Get(0).(func(book.Review) book.Review); ok {
		r0 = rf(review)
	} else {
		r0 = ret.Get(0).(book.Review)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(book.Review) error); ok {
		r1 = rf(review)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Update provides a mock function with given fields: _a0
func (_m *Repository) Update(_a0 book.Book) (book.Book, error) {
	ret := _m.Called(_a0)

	var r0 book.Book
	if rf, ok := ret.Get(0).(func(book.Book) book.Book); ok {
		r0 = rf(_a0)
	} else {
		r0 = ret.Get(0).(book.Book)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(book.Book) error); ok {
		r1 = rf(_a0)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// UpdateReview provides a mock function with given fields: review
func (_m *Repository) UpdateReview(review book.Review) (book.Review, error) {
	ret := _m.Called(review)

	var r0 book.Review
	if rf, ok := ret.Get(0).(func(book.Review) book.Review); ok {
		r0 = rf(review)
	} else {
		r0 = ret.Get(0).(book.Review)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(book.Review) error); ok {
		r1 = rf(review)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}