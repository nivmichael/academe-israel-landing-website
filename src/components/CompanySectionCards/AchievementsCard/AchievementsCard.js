import React, { Component } from 'react';
import CompanySectionCardBase from "../CompanySectionCardBase/CompanySectionCardBase";
import CardCarousel from "../CardCarousel/CardCarousel";
import './AchievementsCard.css';
import './AchievementsCardResponsive.css';

export default class AchievementsCard extends Component {

    cardTitle = 'השגים';

    constructor(props) {
        super(props);

        this.state = {
            achievements: this.onInitPrepareSlidesData(props.achievements)
        }
    }

    onInitPrepareSlidesData (slides) {
        if (!slides) {
            return [];
        }

        return Object.keys(slides).map( (i) => {
            return Object.keys(slides[i]).map( (key) => {
                return slides[i][key]
            })[0]
        })
    }

    render() {
        return (
            <CompanySectionCardBase title={this.cardTitle}>
                <div className="achievements-card-container">
                    <CardCarousel slides={this.state.achievements} />
                </div>
            </CompanySectionCardBase>
        )
    }
}