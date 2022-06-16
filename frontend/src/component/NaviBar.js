import React from "react";
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";
import Diary from "../assets/Diary.png";

export default function NaviBar() {
  return (
    <Navbar style={{ backgroundColor: "#8FB9AA" }} expand="sm">
      <Navbar.Brand href="/">
        <img src={Diary} alt="logo" width="80px" className="img-fluid sm-3" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#terbaru">Bacaan Terbaru</Nav.Link>
          <Nav.Link href="#terpopuler">Bacaan Terpopuler</Nav.Link>
          <Nav.Link href="#bacaan">Daftar Bacaan</Nav.Link>
          <Nav.Link href="#kategori">Kategori</Nav.Link>
        </Nav>
        <Form className="d-inline mx-2 ms-auto">
          <FormControl type="text" placeholder="Search" />
        </Form>
        <div className="vr" />
        <Form>
          <Button variant="outline-success" href="/login" className="d-inline mx-2">
            Sign In
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
