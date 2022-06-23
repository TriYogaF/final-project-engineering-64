import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Profil() {

  return (
    <div>
        <section className='gh-section gh-text-white'>
          <img src="../assets/img/gambarorang.png" width='250' className="gh-img"/>
          <div className="gh-profile">
            <div className="gh-profile-username"><i className="fa fa-user"></i>Ronaldi</div>
            <div className="gh-karya">
            <div className="gh-karya-count">|<i className="fa fa-book"></i>3</div>
              <div className="gh-karya-text">Karya</div>
            </div>
          </div>
        </section>

        <section>
        
          <div className="gh-section-title"><h1>Karya</h1></div>
          <Container fluid>
          <Row className="align-items-center mt-5 justify-content-center">
            <Col md={{ span: 2}} xs="auto" className="gh-col-karya">
               <Card>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                     <Card.Title>Card Title</Card.Title>
                     <Button variant="primary">Read</Button>
                  </Card.Body>
               </Card>
            </Col>
            <Col md={{ span: 2}} xs="auto" className="gh-col-karya">
               <Card >
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                     <Card.Title>Card Title</Card.Title>
                     <Button variant="primary">Read</Button>
                  </Card.Body>
               </Card>
            </Col>
            <Col md={{ span: 2}} xs="auto" className="gh-col-karya">
               <Card >
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                     <Card.Title>Card Title</Card.Title>
                     <Button variant="primary">Read</Button>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
        </section>
    </div>
    
  );
}
