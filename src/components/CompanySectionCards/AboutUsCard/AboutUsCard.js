import React, { Component } from 'react';
import {CONST_UNIVERSITY_BASE_URL} from "../../../constants";
import './AboutUsCard.css';
import './AboutUsCardResponsive.css';

export default class AboutUsCard extends Component {

    render() {
        return (
            <div id="about-us-card-container">
                <div>{ this.props.description }</div>
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
        )
    }
}