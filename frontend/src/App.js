import Navbar from './component/NaviBar';
import Content from './component/Content';
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
        <Content />
      </div>
    </div>
  );
}

export default App;
