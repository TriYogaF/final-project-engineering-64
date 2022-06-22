import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Row className="mt-5" style={{ backgroundColor: "#8FB9AA" }}>
        <Col className="text-center py-2">Copyright &copy; Diary</Col>
      </Row>
    </footer>
  );
}
