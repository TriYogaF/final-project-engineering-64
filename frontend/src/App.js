import Navbar from './component/NavBar';
import Header from './pages/Header';
import Content from './pages/Content';
import Footer from './component/Footer';
import UploadBook from "./pages/UploadBook";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div aria-label="App" className="App">
      <div className="routes" aria-label="routes">
          <Routes>
            <Route path="/uploadbook" element={<UploadBook />} />
          </Routes>
      </div>

      <div aria-label="routes">
        <Navbar />
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
