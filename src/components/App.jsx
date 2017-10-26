import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import PropertyManager from './PropertyManager';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <PropertyManager />
                <Footer />
            </div>
        )
    }
}

export default App;