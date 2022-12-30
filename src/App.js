import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Page2, Page3 } from "./components";
import ApiTest from "./components/ApiTest";
import Specs from "./pages/Specs";

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
          <Route path="/apitest" element={<ApiTest />} />
          <Route path="/specs" element={<Specs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;