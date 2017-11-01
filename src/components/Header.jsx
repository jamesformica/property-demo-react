import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.png';
import bg from '../images/house-bg.jpg';
import '../css/Header.css';

class Header extends Component {
    search() {
        var text = this.searchInput.value.trim();

        if (text.length === 0) {
            this.clear();
        } else {
            this.props.filterResults(text);
        }
    }

    clear() {
        this.searchInput.value = "";
        this.props.clearResults();
    }

    onFocus() {
        this.headerBg.classList.add("header-bg-blur");
    }

    onBlur() {
        this.headerBg.classList.remove("header-bg-blur");
    }

    render() {
        return (
            <header className="header">
                <div className="header-bg" style={{ backgroundImage: `url(${bg})` }} ref={(bg) => this.headerBg = bg}></div>
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
                <div className="header-search" tabIndex="0">
                    <input
                        className="header-search-input"
                        type="text"
                        placeholder="Search for Properties..."
                        ref={(input) => this.searchInput = input }
                        onChange={this.search.bind(this)}
                        onFocus={this.onFocus.bind(this)}
                        onBlur={this.onBlur.bind(this)}
                    />
                    <button className="header-search-button" type="button" onClick={this.clear.bind(this)}>Clear</button>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    filterResults: PropTypes.func.isRequired,
    clearResults: PropTypes.func.isRequired
}

export default Header;