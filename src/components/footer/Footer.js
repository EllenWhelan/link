import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <p className='copyright m-auto'>
                &copy;{new Date().getFullYear()} Hotel - All Rights Reserved
            </p>
        </div>
    );
};

export default Footer;
