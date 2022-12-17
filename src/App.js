import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Page2, Page3 } from "./components";
import { MotoData } from "./mockdata/MotoData";

function App() {

  // const [MotoData, setMotoData] = useState([]);
  // useEffect(()=>{
  //   fetchApi();
  // },[])

  // const fetchApi = async () => {
  //   try{
  //     const MotoDataRaw = await axios.get("http://localhost:5000/motorcycles",{
  //       params: {
  //         _limit: 5
  //       }
  //     });
  //     if(MotoDataRaw.status === 200){
  //       setMotoData(MotoDataRaw.data)
  //     }
  //   }catch(e){
  //     console.log("error", e)
  //   }
  // }

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