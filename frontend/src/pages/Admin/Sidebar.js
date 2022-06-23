import { Navbar, Nav } from 'react-bootstrap'
import { Route, Routes, Router, Link } from "react-router-dom";

import Diary from '../../assets/diary-admin.png'
import Dashboard from '../../assets/icon/dashboard.png'
import Approved from '../../assets/icon/checkmark.png'
import Checked from '../../assets/icon/check-playlist.png'
import Delete from '../../assets/icon/delete.png'
import Logout from '../../assets/icon/logout.png'

export default function Sidebar() {
   return (
      <Nav className="sidebar" style={{ backgroundColor: "#304D63", width: "220px" }} >
         <div className="sidebar-sticky"></div>
         <Navbar.Brand href="../App.js" className="mx-auto mt-3" style= {{ marginBottom: "20px" }}>
            <img src={Diary} alt="logo" width="80px" className="img-fluid sm-3" />
         </Navbar.Brand>
         <Nav.Item>
            <Nav.Link style={{ color: "#FFFFFF" }} href="/admin/dashboard">
               <img src={Dashboard} alt="dashboard"  />
               Dashboard
            </Nav.Link>
         </Nav.Item>
         <Nav.Item>
            <Nav.Link style={{ color: "#FFFFFF" }} href="/admin/approved">
               <img src={Approved} alt="approved"  />
               Approved Files
            </Nav.Link>
         </Nav.Item>
         <Nav.Item>
            <Nav.Link style={{ color: "#FFFFFF" }} href="/admin/checked">
               <img src={Checked} alt="checked"  />
               Checked Files
            </Nav.Link>
         </Nav.Item>
         <Nav.Item style={{ marginBottom: "263px" }} >
            <Nav.Link style={{ color: "#FFFFFF" }} href="/admin/delete">
               <img src={Delete} alt="delete"  />
               Delete Files
            </Nav.Link>
         </Nav.Item>

         {/* Logout */}
         <Nav.Item>
            <Nav.Link href="/">
               <a href="/" className="btn mt-1 py-1 px-5 text-center mx-0" style={{ backgroundColor: "#D05C43", color: "#FFFFFF" }}>
                  <img width="20px" src={Logout} alt="delete" />
                  Log Out
               </a>
            </Nav.Link>
         </Nav.Item>
      </Nav>
   )
}