import "./index.css";
// eslint-disable-next-line
import { useEffect, useState } from "react";
// eslint-disable-next-line
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Page2, Page3 } from "./components";
// eslint-disable-next-line
import { MotoData } from "./mockdata/MotoData";

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/page2" element={<Page2/>}  />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;