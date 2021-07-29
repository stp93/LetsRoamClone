import React from 'react';
import Logo from "../images/Logo.png";
import "../styles/Nav.css";
const Nav = () => {
    return (
        <div className="nav-bar">
            {/* hamburger menu */}
        <img src={Logo} alt="Lets Roam" />
        </div>
    )
}
export default Nav;