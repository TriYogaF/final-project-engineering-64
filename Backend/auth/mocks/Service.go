// Code generated by mockery 2.9.0. DO NOT EDIT.

package mocks

import (
	jwt "github.com/dgrijalva/jwt-go"
	mock "github.com/stretchr/testify/mock"
)

// Service is an autogenerated mock type for the Service type
type Service struct {
	mock.Mock
}

// GenerateToken provides a mock function with given fields: userID
func (_m *Service) GenerateToken(userID int) (string, error) {
	ret := _m.Called(userID)

	var r0 string
	if rf, ok := ret.Get(0).(func(int) string); ok {
		r0 = rf(userID)
	} else {
		r0 = ret.Get(0).(string)
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(int) error); ok {
		r1 = rf(userID)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ValidateToken provides a mock function with given fields: token
func (_m *Service) ValidateToken(token string) (*jwt.Token, error) {
	ret := _m.Called(token)

	var r0 *jwt.Token
	if rf, ok := ret.Get(0).(func(string) *jwt.Token); ok {
		r0 = rf(token)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*jwt.Token)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(string) error); ok {
		r1 = rf(token)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}