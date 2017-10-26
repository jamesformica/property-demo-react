import React from 'react';
import '../css/Footer.css';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} height="30" alt="logo" />
            <p>This was made by James Formica in 2017.</p>
            <p>4realestate is a completely made up company. My sincerest apologies.</p>
        </footer>
    );
}

export default Footer;