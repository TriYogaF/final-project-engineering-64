import Header from "../component/Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import Footer from "../component/Footer";
import gambar from "../assets/book.png";

export default function Content() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Card.Title>Science</Card.Title>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={gambar} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Link to="/book/1">
                  <Button variant="primary">Read</Button>
                </Link>
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
