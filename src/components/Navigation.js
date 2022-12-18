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

          <li className="nav-item-page2 ">
            <NavLink className="nav-link" to="/Page2">
              <i className="Page2" style={{ fontSize: "18px" }}>
                Motorcycle Type
              </i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
