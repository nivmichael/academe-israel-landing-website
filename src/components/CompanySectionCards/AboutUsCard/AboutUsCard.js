import React, { Component } from 'react';
import {CONST_UNIVERSITY_BASE_URL} from "../../../constants";
import CompanySectionCardBase from "../CompanySectionCardBase/CompanySectionCardBase";
import './AboutUsCard.css';
import './AboutUsCardResponsive.css';
import {isRtl} from "../../../utils";

export default class AboutUsCard extends Component {

    cardTitle = 'אודות/מי אנחנו';

    applyTextDirection (text) {
        return !isRtl(text) ? ' dir-ltr ' : '';
    }

    render() {
        return (
            <CompanySectionCardBase title={this.cardTitle}>
                <div className="about-us-card-container">
                    <div className={ 'description' + this.applyTextDirection(this.props.description) }>
                        { this.props.description }
                    </div>
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