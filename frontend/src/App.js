import Content from "./pages/Content";
import UploadBook from "./pages/UploadBook";
import Register from "./pages/Register";
// import Login from "./pages/Login";
import Admin from "./pages/Admin/Admin";
//import Header from './pages/Header';
import { Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar, { NavItem } from "./component/NavBar";
import React from "react";

import Dashboard from "./pages/Admin/Dashboard";
import Approved from "./pages/Admin/Approved";
import Checked from "./pages/Admin/Checked";
import Delete from "./pages/Admin/Delete";

function App() {
  return (
    <main aria-label="App" className="App">
      <Helmet>
        <title>Diary</title>
        <link rel="stylesheet" href="/assets/css/style.css" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
      </Helmet>
      <div className="routes" aria-label="routes">
        <Navbar currPath={useLocation().pathname} />

        <Routes>
          {NavItem().map((item) => (
            <Route key={item.href} path={item.href} element={<item.element />} />
          ))}
          <Route path="/" element={<Content />} />
          <Route path="/uploadbook" element={<UploadBook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/description" element={<DescriptionBook />} />
          <Route path="/readingsite" element={<ReadingSite />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="approved" element={<Approved />} />
            <Route path="checked" element={<Checked />} />
            <Route path="delete" element={<Delete />} />
          </Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
