import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <div>
            <h1>Joe Grant Fitness</h1>
            <h2>Mobile Personal Training and Massage Therapy</h2>
            <NavLink to='/' exact className="nav-link">Home</NavLink>
            <NavLink to='/About' exact className="nav-link">About Me</NavLink>
            <NavLink to='/services' exact className="nav-link">Services</NavLink>
            <NavLink to='/testimonials' exact className="nav-link">Testimonials</NavLink>
            <NavLink to='/contact' exact className="nav-link">Contact</NavLink>
            <NavLink to='/login' exact className="nav-link">Sign In To Book</NavLink>

            
        </div>
    )
}

export default NavBar;