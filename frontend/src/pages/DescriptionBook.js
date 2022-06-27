import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import gambar from "../assets/book.png";
// import axios from "../api/axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export default function DescriptionBook() {
  const [book, setBook] = useState();
  const DETAIL_BOOK_URL = "/api/v1/books/";
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    // let isMounted = true;
    const controller = new AbortController();
    const getBook = async () => {
      try {
        const response = await axiosPrivate.get(DETAIL_BOOK_URL + 1, {
          signal: controller.signal,
        });
        const tes = response?.data;
        console.log(tes);
        setBook(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getBook();

    // return () => {
    //   // isMounted = false;
    //   controller.abort();
    // };
  }, []);

  return (
    <Container className="my-5 py-3">
      <Row className="justify-content-center">
        <Col lg="11">
          <Card className="border-2 border-dark py-4">
            <Row>
              <Col className="text-center">
                <Card.Img variant="top" src={gambar} style={{ width: "25rem" }} />
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
                  <Link to="/read">
                    <Button style={{ backgroundColor: "#69BB9E" }} variant="light" className="text-light my-3 btn-lg">
                      Baca
                    </Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
