import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../component/Header";

export default function Content() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Card.Title>Paling Populer</Card.Title>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Card.Title>Unduhan Terbanyak</Card.Title>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Card.Title>Karya Ilmiah Populer</Card.Title>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Card.Title>Kategori Populer</Card.Title>
          <Col md={2}>
            <Card style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>Science</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>Fiction</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>Documentary</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}