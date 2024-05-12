//  Footer

import React from "react";

import { NavLink } from "react-router-dom";

import "./Footer.css";

function Footer({
  menuHome = "Home",
  menuAbout = "About",
  menuServices = "Services",
  menuContact = "Contact",
}) {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="images/logo.png" alt="logo" />
          <h4>Web Bio</h4>
        </div>
        <div className="footer-privacy">
          <div className="privacy">Privacy Policy</div>
          <div className="conditions">Conditions of Use</div>
          <div className="cookies">Cookies</div>
          <div className="location">Location Map</div>
        </div>
        <div className="footer-nav">
          <div className="footer-ho">
            <NavLink to="/">{menuHome}</NavLink>
          </div>
          <div className="footer-ho">
            <NavLink to="/about">{menuAbout}</NavLink>
          </div>
          <div className="footer-ho">
            <NavLink to="/services">{menuServices}</NavLink>
          </div>
          <div className="footer-ho">
            <NavLink to="/contact">{menuContact}</NavLink>
          </div>
        </div>
        <div className="footer-rights">
          <p>
            &copy; 2024 - Todos los derechos reservados
            <br />
            Desarrollado por ayoub
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
