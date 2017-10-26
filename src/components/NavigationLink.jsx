import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavigationLink extends Component {
    render() {
        return (
            <a href="#dummy" className={"navigation-link " + this.props.extraClass} onClick={(e) => alert(this.props.alert)}>
                {this.props.text}
            </a>
        )
    }
}

NavigationLink.propTypes = {
    text: PropTypes.string.isRequired,
    alert: PropTypes.string.isRequired,
    extraClass: PropTypes.string
}

export default NavigationLink;