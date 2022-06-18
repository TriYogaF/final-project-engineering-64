import Navbar from "./component/NavBar";
import Header from "./component/Header";
import Content from "./pages/Content";

import UploadBook from "./pages/UploadBook";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main aria-label="App" className="App">
      <div className="routes" aria-label="routes">
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/uploadbook" element={<UploadBook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
