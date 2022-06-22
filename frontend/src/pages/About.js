import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";

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
        <img src="../assets/img/logoputih.png" style={sizeImg} className="gh-img"></img>
        <img src="../assets/img/textdiary.png" style={sizeImg1} className="gh-textD"></img>
      </Container>
    </div>
  );
}
