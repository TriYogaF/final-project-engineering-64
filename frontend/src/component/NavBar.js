import React from "react";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import Diary from "../assets/Diary.png";
import About from '../pages/About';
import Content from '../pages/Content';
import UploadBook from "../pages/UploadBook";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import React from "react";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import Diary from "../assets/Diary.png";

export const NavItem = () => {
   let itemNav=[
      {
         href: "/about",
         text: "What is Diary?",
         element: About
      },
      {
         href: "/",
         text: "Beranda",
         element: Content
      },
      {
         href: "/UploadBook",
         text: "Upload Karya",
         element: UploadBook
      }, 
      {
         href: "/login",
         text: "Login",
         element: Login
      },
      {
         href: "/profile",
         text: "Profile",
         element: Profile
      } 
   ]
   return itemNav
}
export default function NavBar(data){
   return (
      <>
         <Navbar style={{ backgroundColor: "#FFFFFF"}}>
               <Navbar.Brand href="App.js">
                  <img src="../assets/img/diary.png" alt="logo" width="150px" className="img-fluid m-3" />
               </Navbar.Brand> 
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Form>
                     <div className='gh-search-forms'><i class="fa fa-search"></i><input className='gh-input' type="text" placeholder="Search..." /></div>
                     
                  </Form>
               </Navbar.Collapse>
         </Navbar>
         <Navbar style={{ backgroundColor: "#FFFFFF" }} className="text-center justify-content-center">
            <Nav className="me-align-center gh-nav" >
               {
               NavItem().map(
                  item => {
                  if (data.currPath.toLowerCase() == item.href.toLowerCase()){
                      return <Nav.Link key={item.text} className="gh-navlink active" href={item.href}>{item.text}</Nav.Link>
                     } else{
                       return  <Nav.Link key={item.text} className="gh-navlink" href={item.href}>{item.text}</Nav.Link>
                     }
                  })
               }
            </Nav>
         </Navbar>
      </>
   )
}

