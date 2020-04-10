import React from "react";
import instagram from "../Media/instagram.svg";
import weight from '../Media/weight.svg'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Nav">
      <NavLink to="/" exact className="nav-link">
          <div>
        <h1 className="nav-title text7">Joe Grant Fitness</h1>
        <img className="weight" src={weight} alt="oh no!"/>
        </div>
      </NavLink>
      <div className="nav-link-position">
        <a href="https://www.instagram.com/joestraining/">
          <img className="instagram nav-link" alt="oh no!" src={instagram} />
        </a>
        <NavLink to="/About" exact className="nav-link">
          About
        </NavLink>
        <NavLink to="/services" exact className="nav-link">
          Services
        </NavLink>
        <NavLink to="/testimonials" exact className="nav-link">
          Testimonials
        </NavLink>
        <NavLink to="/contact" exact className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/login" exact className="nav-link">
          Login To Book
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
