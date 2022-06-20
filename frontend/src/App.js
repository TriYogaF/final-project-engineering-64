import Navbar from './component/NavBar';
import Header from './component/Header';
import Content from './pages/Content';

import UploadBook from "./pages/UploadBook";
import Register from "./pages/Register";
// import Login from "./pages/Login";
import Admin from "./pages/Admin/Admin";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Admin/Dashboard";
import Approved from "./pages/Admin/Approved";
import Checked from "./pages/Admin/Checked";
import Delete from "./pages/Admin/Delete";


function App() {
  return (
    <main aria-label="App" className="App">
      <div className="routes" aria-label="routes">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/" element={<Content />} />
          <Route path="/uploadbook" element={<UploadBook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="approved" element={<Approved />} />
            <Route path="checked" element={<Checked />} />
            <Route path="delete" element={<Delete />} />
          </Route>
        </Routes>
      </div>
    </main>
  )
}
      
export default App;
