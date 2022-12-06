import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Page2 } from "./components";
import { MotoData } from "./mockdata/MotoData";

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/page2" element={<Page2 MotoData={MotoData}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;