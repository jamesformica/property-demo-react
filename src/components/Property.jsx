import React, { Component } from 'react';
import '../css/Property.css';

class Property extends Component {
    componentWillMount() {
        this.buttonClass = this.props.isAddMode ? "" : "card-info-button-remove";
        this.buttonText = this.props.isAddMode ? "Add Property" : "Remove Property";
        this.buttonActiveText = this.props.isAddMode ? "Property Added!" : "Property Removed!";

        this.setState({
            buttonText: this.buttonText
        });
    }

    render() {
        return (
            <article className="card" tabIndex="0">
                <header className="card-header" style={{ backgroundColor: this.props.property.agency.brandingColors.primary }}>
                    <img className="card-header-img" src={this.props.property.agency.logo} alt="Agency Logo" />
                </header>
                <img className="card-img" src={this.props.property.mainImage} alt="Property Logo" />
                <div className="card-info">
                    <span className="card-info-price">
                        {this.props.property.price}
                    </span>
                    <button type="button" className={"card-info-button " + this.buttonClass} onClick={this.click.bind(this)} onBlur={this.blur.bind(this)}>
                        {this.state.buttonText}
                    </button>
                </div>
            </article>
        );
    }

    click() {
        if (typeof this.props.clickEvent === 'function') {
            if (this.props.clickEvent(this.props.property)) {
                this.setState({
                    buttonText: this.buttonActiveText
                });
            }
        }
    }

    blur() {
        if (this.state.buttonText !== this.buttonText) {
            this.setState({
                buttonText: this.buttonText
            });
        }
    }
}

export default Property;