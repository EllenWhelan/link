import React from "react";
import "./TopNav.css";

const TopNav = () => {
    return (
        <nav className='nav'>
            <i className='fas fa-city'></i>
            <ul className='nav-links'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default TopNav;
