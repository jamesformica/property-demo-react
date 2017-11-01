import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PropertyColumn from './PropertyColumn';
import '../css/Results.css';

class PropertyManager extends Component {
    render() {
        return (
            <div className="results-container">
                <PropertyColumn
                    extraClass="results-container-column-grow"
                    heading="Results"
                    title={"Select \"add property\" to move the property to your saved collection"}
                    properties={this.props.results}
                    isAddMode={true}
                    clickEvent={this.props.addToSaved} />

                <PropertyColumn
                    extraClass="results-container-column-saved"
                    heading="Saved Properties"
                    title="Your collection of saved properties"
                    properties={this.props.saved}
                    isAddMode={false}
                    clickEvent={this.props.removeFromSaved} />
            </div>
        );
    }
}

PropertyManager.propTypes = {
    results: PropTypes.array.isRequired,
    saved: PropTypes.array.isRequired,
    addToSaved: PropTypes.func.isRequired,
    removeFromSaved: PropTypes.func.isRequired
}

export default PropertyManager;