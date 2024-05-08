import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({
  menuHome = "Home",
  menuAbout = "About",
  menuServices = "Services",
  menuContact = "Contact",
}) {
  //  when the li clicken should be active how to do it

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">{menuHome}</NavLink>
        </li>
        <li>
          <NavLink to="/about">{menuAbout}</NavLink>
        </li>
        <li>
          <NavLink to="/service">{menuServices}</NavLink>
        </li>
        <li>
          <NavLink to="/contact">{menuContact}</NavLink>
        </li>
        <li>
          <img src="images/logo.png" alt="logo" width={25}/>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
