import React, { Component } from 'react';
import "../styles/Cities.css";
 class City extends Component {
    render() {
        return (
            
                <div className="card">
                    <img key={this.props.text} src={this.props.photo} alt={this.props.text} />
                    <p>{this.props.text}</p>
                </div>
            
        )
    }
}
export default City;