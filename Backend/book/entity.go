package book

import "time"

type Book struct {
	ID         int
	UserID     int
	Title      string
	Writer     string
	Pages      int
	Synopsis   string
	CoverImage string
	File       string
	Status     string
	Slug       string
	CreatedAt  time.Time
	UpdatedAt  time.Time
	Category   []string
	Score      int
}

type BookCategory struct {
	ID         int
	BookID     int
	CategoryID int
}

type History struct {
	ID        int
	UserID    int
	BookID    int
	CreatedAt time.Time
}

type Review struct {
	ID        int
	UserID    int
	BookID    int
	Score     int
	CreatedAt time.Time
	UpdatedAt time.Time
}
