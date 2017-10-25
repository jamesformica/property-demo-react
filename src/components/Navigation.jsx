import React, { Component } from 'react';
import NavigationLink from './NavigationLink';
import '../css/Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation">
                <span className="navigation-hamburger" onClick={(e) => alert('Who named this a hamburger? Now I\'m hungry :(')}>|||</span>
                <NavigationLink text={"Buy"} alert={"I dont actually work"} extraClass={"navigation-link-stay"} />
                <NavigationLink text={"Rent"} alert={"Neither do I!"} extraClass={"navigation-link-stay"} />
                <NavigationLink text={"Invest"} alert={"I thought you would have gotten the picture by now..."} extraClass={"navigation-link-stay"} />
                <NavigationLink text={"Sold"} alert={"Geez, persistent aren't ya"} extraClass={"navigation-link-stay"} />
                <NavigationLink text={"Share"} alert={"Come on mate. Give it up"} />
                <NavigationLink text={"New Homes"} alert={"Knock, knock!"} />
                <NavigationLink text={"Find Agents"} alert={"Who's there?"} />
                <NavigationLink text={"Lifestyle"} alert={"Cows go"} />
                <NavigationLink text={"News"} alert={"Cows go who?"} />
                <NavigationLink text={"Commercial"} alert={"No, silly. Cows go moo!"} />
            </nav>
        );
    }

    click(message) {
        alert(message);
    }
}

export default Navigation;