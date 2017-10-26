import React, { Component } from 'react';
import Property from './Property';

class PropertyColumn extends Component {
    render() {
        return (
            <section className={"results-container-column " + this.props.extraClass}>
                <h2 className="results-container-heading">
                    {this.props.heading}
                </h2>
                <p>
                    {this.props.title}
                </p>
                {this.props.properties.map((property) =>
                    <Property property={property} isAddMode={this.props.isAddMode} key={property.id} clickEvent={this.props.clickEvent} />
                )}
            </section>
        )
    }
}

export default PropertyColumn;