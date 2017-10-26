import React, { Component } from 'react';
import Property from './Property';
import PropTypes from 'prop-types';

class PropertyColumn extends Component {
    render() {
        return (
            <section className={"results-container-column " + this.props.extraClass}>
                <h2 className="results-container-heading">{this.props.heading}</h2>
                <p>{this.props.title}</p>

                {this.props.properties.map((property) =>
                    <Property property={property} isAddMode={this.props.isAddMode} key={property.id} clickEvent={this.props.clickEvent} />
                )}
            </section>
        )
    }
}

PropertyColumn.propTypes = {
    extraClass: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    properties: PropTypes.array.isRequired,
    isAddMode: PropTypes.bool.isRequired,
    clickEvent: PropTypes.func.isRequired
}

export default PropertyColumn;