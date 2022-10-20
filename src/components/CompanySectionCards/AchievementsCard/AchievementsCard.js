import React, { Component } from 'react';
import CompanySectionCardBase from "../CompanySectionCardBase/CompanySectionCardBase";
import CardCarousel from "../CardCarousel/CardCarousel";
import Slide from '../CardCarousel/Slide/Slide';
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
                    <CardCarousel totalSlides={ this.state.achievements.length }>
                        {
                            this.state.achievements.map( (achievement, i) => {
                                return <Slide key={i}>{ achievement }</Slide>
                            })
                        }
                    </CardCarousel>
                </div>
            </CompanySectionCardBase>
        )
    }
}