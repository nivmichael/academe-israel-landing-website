import React, { Component } from 'react';
import './BenefitsCard.css';
import './BenefitsCardResponsive.css';

export default class BenefitsCard extends Component {

    render() {
        return (
            <div id="benefits-card-container">
                {
                    Object.keys(this.props.benefits).map( (i) => {
                        return Object.keys(this.props.benefits[i]).map( (key) => {
                            return <div className="single-benefit">{this.props.benefits[i][key]}</div>
                        })
                    })
                }
            </div>
        )
    }
}