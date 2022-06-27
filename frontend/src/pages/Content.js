import Header from "../component/Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import gambar from "../assets/book.png";
import axios from "../api/axios";

export default function Content() {
  const [books, setBooks] = useState();
  const BOOKS_URL = "/api/v1/books";

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get(BOOKS_URL);
        const tes = response.data.data;
        console.log(response.data.data[0]);
        setBooks(tes);
        console.log(tes);
      } catch (error) {
        console.error(error);
      }
    };

    getBook();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Card.Title>Science</Card.Title>
          <Col md={3}>
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>tes</Card.Title>
                <Link to="/description">
                  <Button variant="primary">Read</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          {books.map((book) => (
            <Col md={3}>
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Img variant="top" src={gambar} />
                  <Card.Title>{book.title}</Card.Title>
                  <Link to="/description">
                    <Button variant="primary">Read</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
