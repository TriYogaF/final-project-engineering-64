import Navbar from "./component/NavBar";
import Content from "./pages/Content";

import UploadBook from "./pages/UploadBook";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import DescriptionBook from "./pages/DescriptionBook";
import ReadingSite from "./pages/ReadingSite";

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
          <Route path="/description" element={<DescriptionBook />} />
          <Route path="/readingsite" element={<ReadingSite />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
