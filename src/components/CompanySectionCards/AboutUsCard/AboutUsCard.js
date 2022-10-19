import React, { Component } from 'react';
import {CONST_UNIVERSITY_BASE_URL} from "../../../constants";
import CompanySectionCardBase from "../CompanySectionCardBase/CompanySectionCardBase";
import './AboutUsCard.css';
import './AboutUsCardResponsive.css';

export default class AboutUsCard extends Component {

    cardTitle = 'אודות/מי אנחנו';

    render() {
        return (
            <CompanySectionCardBase title={this.cardTitle}>
                <div className="about-us-card-container">
                    <div className="description">{ this.props.description }</div>
                    {
                        this.props.presentation &&
                        <div className="presentation-button-container">
                            <a className="presentation-button"
                               target="_blank"
                               rel="noopener noreferrer"
                               href={ CONST_UNIVERSITY_BASE_URL + this.props.presentation }>מצגת חברה</a>
                        </div>
                    }
                </div>
            </CompanySectionCardBase>
        )
    }
}