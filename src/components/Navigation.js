import React from "react";
import { NavLink } from "react-router-dom";



function Navigation() {
  return (
    <div className="navigation">
      <h1 className="NavName font-weight-light">Moto News</h1>
      <div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item-home text-center">
            <NavLink className="nav-link" to="/Home">
              <i className="home" style={{ fontSize: "18px" }}>
                Home
              </i>
            </NavLink>
          </li>         

          <li className="nav-item-page2 text-center">
            <NavLink className="nav-link" to="/Page2">
              <i className="Page2" style={{ fontSize: "18px" }}>
                Page2
              </i>
            </NavLink>
          </li>

          <div className="dropdown">
  <select className="dropbtn">
  <option> dropdown</option>
    <option >Link 1</option>
    <option >Link 2</option>
    <option >Link 3</option>
    </select>

  </div>


        </ul>
      </div>
    </div>
    
  );
}

export default Navigation;