import React, { Component } from 'react';
import '../css/Results.css';
import Data from '../Data';
import PropertyColumn from './PropertyColumn';

class PropertyManager extends Component {
    componentWillMount() {
        var data = new Data().data;

        this.setState({
            results: data.results,
            saved: data.saved
        });
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
        if (this.canBeSaved(propertyToAdd)) {
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

    canBeSaved(propertyToAdd) {
        var existing = this.state.saved.find((property) => {
            return property.id === propertyToAdd.id
        });

        return existing === null || existing === undefined;
    }
}

export default PropertyManager;