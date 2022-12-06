import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <h1 className="NavName font-weight-light">starter template</h1>
      <div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item-home text-center">
            <NavLink className="nav-link" to="/Home">
              <i className="fas fa-home" style={{ fontSize: "18px" }}>
                Home
              </i>
            </NavLink>
          </li>

          <li className="nav-item-page2 text-center">
            <NavLink className="nav-link" to="/Page2">
              <i className="fas fa-hiking" style={{ fontSize: "18px" }}>
                Page2
              </i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;