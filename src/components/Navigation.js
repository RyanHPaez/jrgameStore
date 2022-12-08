import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="Head  navbar-expand  ">
      <div className="Head " to="/Home">
        <NavLink className="nav-link" to="/Home">
          <img
            src={require("../images/infomoto.jpg")}
            alt="motoinfo"
            id="header"
          ></img>
        </NavLink>

        <ul className="navbar-nav mx-auto justify-content-center">
          <li className="nav-item-home ">
            <NavLink className="nav-link" to="/Home">
              <i className="home" style={{ fontSize: "18px" }}>
                News
              </i>
            </NavLink>
          </li>

          <div className="dropdown">
            <select className="dropbtn">
              <option>Skill Level</option>
              <option>Beginner</option>
              <option>Moderate</option>
              <option>Advanced</option>
            </select>
          </div>

          <li className="nav-item-page2 ">
            <NavLink className="nav-link" to="/Page2">
              <i className="Page2" style={{ fontSize: "18px" }}>
                Motorcycle Type
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
    </div>
  );
}

export default Navigation;
