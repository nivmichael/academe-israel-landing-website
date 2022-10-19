import React, { Component } from 'react';
import './BenefitsCard.css';
import './BenefitsCardResponsive.css';
import CompanySectionCardBase from "../CompanySectionCardBase/CompanySectionCardBase";

export default class BenefitsCard extends Component {

    cardTitle = 'הטבות';

    render() {
        return (
            <CompanySectionCardBase title={this.cardTitle}>
                <div className="benefits-card-container">
                    {
                        Object.keys(this.props.benefits).map( (i) => {
                            return Object.keys(this.props.benefits[i]).map( (key) => {
                                return <div className="single-benefit" key={key}>{this.props.benefits[i][key]}</div>
                            })
                        })
                    }
                </div>
            </CompanySectionCardBase>
        )
    }
}