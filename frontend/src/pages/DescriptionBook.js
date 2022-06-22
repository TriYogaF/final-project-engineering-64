import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Book from "../assets/book.png";

export default function DescriptionBook() {
  return (
    <Container className="my-5 py-3">
      <Row className="justify-content-center">
        <Col lg="11">
          <Card className="border-2 border-dark pt-2 pb-5">
            <Row>
              <Col>
                <Card.Img variant="top" src={Book} />
              </Col>
              <Col>
                <Card.Body>
                  <Row className="border-bottom py-2">
                    <Col>
                      <Card.Text>Judul :</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="text-end">Autobiografi Mahatma Gandhi</Card.Text>
                    </Col>
                  </Row>
                  <Row className="border-bottom py-2">
                    <Col>
                      <Card.Text>Pengarang :</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="text-end">M.K. Gandhi</Card.Text>
                    </Col>
                  </Row>
                  <Row className="border-bottom py-2">
                    <Col>
                      <Card.Text>Tema :</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="text-end">Dokumenter</Card.Text>
                    </Col>
                  </Row>
                  <Row className="border-bottom py-2">
                    <Col>
                      <Card.Text>Jenis Bacaan : </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="text-end">Documentary</Card.Text>
                    </Col>
                  </Row>
                  <Row className="border-bottom py-2">
                    <Col>
                      <Card.Text>Tahun Rilis :</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="text-end">1927</Card.Text>
                    </Col>
                  </Row>
                  <Row className="py-2">
                    <Col>
                      The Story of My Experiments with Truth adalah otobiografi Mahatma Gandhi, yang meliputi kehidupannya dari masa kanak-kanak hingga tahun 1921. Itu ditulis dalam angsuran mingguan dan diterbitkan dalam jurnalnya Navjivan
                      dari tahun 1925 hingga 1929.
                    </Col>
                  </Row>
                  <Button style={{ backgroundColor: "#69BB9E" }} variant="light" className="text-light my-3 btn-lg">
                    Baca
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
