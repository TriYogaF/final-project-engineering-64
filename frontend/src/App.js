import "./App.css";
import UploadBook from "./pages/UploadBook";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Routes>
        <Route path="/uploadbook" element={<UploadBook />} />
      </Routes>
    </div>
  );
}

export default App;
