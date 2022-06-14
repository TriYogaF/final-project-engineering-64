import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function UploadBook() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col className="col-6 border border-3 p-4 rounded">
          <Form>
            <Form.Group className="mb-3" controlId="inputJudul">
              <Form.Label>Judul Buku</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputDeskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputKategori">
              <Form.Label>Kategori</Form.Label>
              <Form.Select>
                <option>Pilih Kategori</option>
                <option value="1">Novel</option>
                <option value="2">Karya Ilmiah</option>
                <option value="3">Dokumenter</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputJenisBacaan">
              <Form.Label>Jenis Bacaan</Form.Label>
              <Form.Select>
                <option>Pilih Jenis Bacaan</option>
                <option value="1">Novel</option>
                <option value="2">Karya Ilmiah</option>
                <option value="3">Dokumenter</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputSampulBuku">
              <Form.Label>Sampul Buku</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputFileBuku">
              <Form.Label>File Buku</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UploadBook;
