import React, { Component } from 'react';
import logo from '../images/logo.png';
import bg from '../images/house-bg.jpg';
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header" style={{backgroundImage: `url(${bg})`}}>
                <div className="header-logo">
                    <img className="header-logoimg" src={logo} alt="logo" />
                    <h1 className="header-heading">4RealEstate
                        <span className="header-heading-alt">.</span>
                        com
                        <span className="header-heading-alt">.</span>
                        au
                    </h1>
                </div>
                <span className="header-tagline">"yes, we are 4real"</span>
            </header>
        );
    }
}

export default Header;