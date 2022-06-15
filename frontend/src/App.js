import Navbar from './component/NaviBar';
import Content from './component/Content';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div aria-label="App" className="App">
      {/* <div className="routes" aria-label="routes">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />} />
          </Routes>
        </BrowserRouter>
      </div> */}

      <div aria-label="routes">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
