import React from "react";
import instagram from "../Media/instagram.svg";
import weight from "../Media/weight.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Nav">
      <NavLink to="/" exact className="nav-link">
        <div>
          <h1 className="nav-title text7">Joe Grant Fitness</h1>
          <img className="weight" src={weight} alt="oh no!" />
        </div>
      </NavLink>
      <div className="nav-link-position">
        <strong><NavLink to="/About" exact className="nav-link">
          About
        </NavLink></strong>
        <strong><NavLink to="/services" exact className="nav-link">
          Services
        </NavLink></strong>
        <strong><NavLink to="/testimonials" exact className="nav-link">
          Testimonials
        </NavLink></strong>
        <strong><NavLink to="/contact" exact className="nav-link">
          Contact
        </NavLink></strong>
        <strong><NavLink to="/login" exact className="nav-link">
          Login To Book
        </NavLink></strong>
        <a href="https://www.instagram.com/joestraining/">
          <img className="instagram nav-link" alt="oh no!" src={instagram} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
