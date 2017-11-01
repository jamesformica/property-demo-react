import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import PropertyManager from './PropertyManager';
import Footer from './Footer';
import { getData } from '../data';
import { canBeSaved } from '../helpers';

class App extends Component {
    constructor() {
        super();

        this.data = getData();
        this.state = {
            results: this.data.results,
            saved: this.data.saved
        };
    }

    render() {
        return (
            <div>
                <Header
                    filterResults={this.filterResults.bind(this)}
                    clearResults={this.clearResults.bind(this)}
                />
                <Navigation />
                <PropertyManager
                    results={this.state.results}
                    saved={this.state.saved}
                    addToSaved={this.addToSaved.bind(this)}
                    removeFromSaved={this.removeFromSaved.bind(this)}
                />
                <Footer />
            </div>
        )
    }

    filterResults(text) {
        var matchedResults = this.data.results.filter((property) => {
            return property.price.indexOf(text) >= 0;
        });

        this.setState({
            results: matchedResults
        });
    }

    clearResults() {
        this.setState({
            results: this.data.results
        });
    }

    addToSaved(propertyToAdd) {
        if (canBeSaved(propertyToAdd, this.state.saved)) {
            var props = this.state.saved.concat(propertyToAdd);

            this.setState({
                saved: props
            });

            return true;
        }
        return false;
    }

    removeFromSaved(propertyToRemove) {
        var saved = this.state.saved.filter((property) => {
            return property.id !== propertyToRemove.id;
        });

        this.setState({
            saved: saved
        });

        return true;
    }
}

export default App;