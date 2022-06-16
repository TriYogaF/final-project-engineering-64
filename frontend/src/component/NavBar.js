import React from 'react'
import { Navbar, Form, FormControl,  Nav } from 'react-bootstrap'
import Diary from '../assets/Diary.png'

export default function NavBar(){
   return (
      <>
         <Navbar style={{ backgroundColor: "#8FB9AA" }} >
               <Navbar.Brand href="App.js">
                  <img src={Diary} alt="logo" width="80px" className="img-fluid sm-3" />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Form className="d-inline mx-2 ms-auto">
                     <FormControl type="text" placeholder="Search" />
                  </Form>
                  <div className="vr" />
               </Navbar.Collapse>
         </Navbar>
         <Navbar style={{ backgroundColor: "#8FB9AA" }} className="text-center justify-content-center">
            <Nav className="me-auto">
               <Nav.Link href="#diary">What is Diary?</Nav.Link>
               <Nav.Link href="App.js">Beranda</Nav.Link>
               <Nav.Link href="#karya">Upload Karya</Nav.Link>
               <Nav.Link href="#akun">Account</Nav.Link>
            </Nav>
         </Navbar>
      </>
   )
}