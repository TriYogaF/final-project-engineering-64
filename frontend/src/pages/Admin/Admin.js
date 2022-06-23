import Sidebar from "./Sidebar.js";
import { Row, Col } from "react-bootstrap";
import Dashboard from "./Dashboard.js";
// import Diary from "../../assets/Diary.png";
import { Route, Routes, Router, Link, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div>
        <Row>
          <Col xs={2} id="sidebar-wrapper">      
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Outlet />
          </Col>
        </Row>
    </div>
  )
}