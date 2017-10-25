import React, { Component } from 'react';

class NavigationLink extends Component {
    render() {
        return (
            <a href="#dummy" className={"navigation-link " + this.props.extraClass} onClick={(e) => alert(this.props.alert)}>
                {this.props.text}
            </a>
        )
    }
}

export default NavigationLink;