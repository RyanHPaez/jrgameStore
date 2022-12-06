import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    
    <div className="navigation " to='/Home'>
      <NavLink className="nav-link" to="/Home">
              <h1 className="home" style={{ fontSize: "45px" }}>
              Moto Info
              </h1>
            </NavLink>
      
      
        <ul className="navbar-nav mx-auto justify-content-center">
          <li className="nav-item-home ">
            <NavLink className="nav-link" to="/Home">
              <i className="home" style={{ fontSize: "18px" }}>
                Home
              </i>
            </NavLink>
          </li>

          

          <div className="dropdown">
            <select className="dropbtn">
              <option>Beginner</option>
              <option>Moderate</option>
              <option>Advanced</option>
            </select>
          </div>

          <li className="nav-item-page2 ">
            <NavLink className="nav-link" to="/Page2">
              <i className="Page2" style={{ fontSize: "18px" }}>
                Type
              </i>
            </NavLink>
          </li>

          <div className="dropdown">
            <select className="dropbtn">
              <option>Sportbike</option>
              <option>Sport </option>
              <option>Dirt</option>
              <option>Electric</option>
              <option>Cruiser</option>
              <option>Touring</option>
              <option>Naked</option>
              <option>Dual Sport</option>              
            </select>
          </div>

        </ul>
      </div>
    
  );
}

export default Navigation;
