import React from "react";
import Book from "../assets/book.png";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const sizeImg = {
  width: "50%",
  height: "50%",
};

const primaryColor = {
  backgroundColor: "#304D63",
};

const secondaryColor = {
  backgroundColor: "#69BB9E",
};

export default function Register() {
  return (
    <section style={primaryColor}>
      <Container className="pb-5">
        <Row className="align-items-center">
          <Col className="col-7">
            <h1 className="p-5 text-light">
              <strong>Membaca</strong> memperkaya ilmuku dan memperluas imajinasiku
            </h1>
            <img src={Book} style={sizeImg} className="float-end"></img>
          </Col>
          <Col className="bg-light m-5 rounded-2">
            <Container className="p-4 mt-2 mb-5">
              <div className="rounded-2 py-2 mb-5" style={secondaryColor}>
                <h2 className="text-center text-light">Diary</h2>
              </div>
              <Form className="d-grid">
                <Form.Group className="mb-3" controlId="inputEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="InputPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="light" className="text-light" style={secondaryColor} type="submit">
                  Login
                </Button>
              </Form>
              <div className="text-center pt-4">
                <p>
                  If you don't have an account
                  <br />
                  You can{" "}
                  <a href="/register" className="link-dark">
                    Register here !
                  </a>
                </p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
