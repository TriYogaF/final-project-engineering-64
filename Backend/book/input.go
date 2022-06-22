package book

import "diary/user"

type GetBookDetailInput struct {
	ID int `uri:"id" binding:"required"`
}

type CreateBookInput struct {
	Title      string `json:"title"`
	Writer     string `json:"writer"`
	Pages      int    `json:"pages"`
	Synopsis   string `json:"synopsis"`
	CoverImage string `json:"cover_image"`
	File       string `json:"file"`
	User       user.User
}