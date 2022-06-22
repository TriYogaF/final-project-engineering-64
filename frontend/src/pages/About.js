import React from "react";
import { Helmet } from "react-helmet";
import Book from "../assets/logoputih.png";
import Text from "../assets/textdiary.png";
import "../pages/About.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const sizeImg = {
  width: "15%",
  height: "15%",
};

const sizeImg1 = {
  width: "80%",
  height: "80%",
};

export default function About() {
  return (
    <div>
      <Helmet>
        <style>{"body { background-color:#304D63 ; }"}</style>
      </Helmet>
      <Container>
        <img src={Book} style={sizeImg} className="img"></img>
        <img src={Text} style={sizeImg1} className="textD"></img>
      </Container>
    </div>
  );
}
