import React, { Component } from 'react';
import './BenefitsCard.css';
import './BenefitsCardResponsive.css';
import CompanySectionCardBase from "../CompanySectionCardBase/CompanySectionCardBase";
import {isRtl} from "../../../utils";

export default class BenefitsCard extends Component {

    cardTitle = 'הטבות';

    applyTextDirection (text) {
        return !isRtl(text) ? ' dir-ltr ' : '';
    }

    render() {
        return (
            <CompanySectionCardBase title={this.cardTitle}>
                <div className="benefits-card-container">
                    {
                        Object.keys(this.props.benefits).map( (i) => {
                            return Object.keys(this.props.benefits[i]).map( (key) => {
                                return <div className={ 'single-benefit' + this.applyTextDirection(this.props.benefits[i][key]) } key={key}>
                                    {this.props.benefits[i][key]}
                                </div>
                            })
                        })
                    }
                </div>
            </CompanySectionCardBase>
        )
    }
}