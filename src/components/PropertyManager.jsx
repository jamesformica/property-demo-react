import React, { Component } from 'react';
import { getData } from '../data';
import PropertyColumn from './PropertyColumn';
import { canBeSaved } from '../helpers';
import '../css/Results.css';

class PropertyManager extends Component {
    constructor() {
        super();

        var data = getData();
        this.state = {
            results: data.results,
            saved: data.saved
        };
    }

    render() {
        return (
            <div className="results-container">
                <PropertyColumn
                    extraClass={"results-container-column-grow"}
                    heading={"Results"}
                    title={"Select \"add property\" to move the property to your saved collection"}
                    properties={this.state.results}
                    isAddMode={true}
                    clickEvent={this.addToSaved.bind(this)} />

                <PropertyColumn
                    extraClass={"results-container-column-saved"}
                    heading={"Saved Properties"}
                    title={"Your collection of saved properties"}
                    properties={this.state.saved}
                    isAddMode={false}
                    clickEvent={this.removeFromSaved.bind(this)} />
            </div>
        );
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

export default PropertyManager;