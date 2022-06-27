import Header from "../component/Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React from "react";
import Footer from "../component/Footer";
import gambar from "../assets/book.png";
import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Content() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/books");
        setData(response.data.data);
        setLoading(false);
        console.log(response.data.data);
        console.log(response.data.data[1]);
      } catch (err) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  const handleClick = (id) => {
    const newData = data.map((book) => {
      if (book.id === id) {
        return {
          ...book,
        };
      }
      return book;
    });
    setData(newData);
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Card.Title>Science</Card.Title>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Img src={gambar} />
                {data.map((book) => {
                    return (
                      <Card.Text key={book.id}>
                        <Card.Title>{book.title}</Card.Title>
                        <Button variant="primary" onClick={() => handleClick(book.id)}>
                          Read
                        </Button>
                      </Card.Text>
                    );
                }
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={gambar} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={gambar} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={gambar} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Card.Title>Fiction</Card.Title>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={gambar} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={gambar} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={gambar} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={gambar} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>Paling Populer</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>Karya Ilmiah</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>Unduhan Terbanyak</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
