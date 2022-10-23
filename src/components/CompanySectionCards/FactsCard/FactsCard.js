import React, { Component } from 'react';
import CompanySectionCardBase from "../CompanySectionCardBase/CompanySectionCardBase";
import CardCarousel from "../CardCarousel/CardCarousel";
import Slide from '../CardCarousel/Slide/Slide';
import './FactsCard.css';
import './FactsCardResponsive.css';

export default class FactsCard extends Component {

    cardTitle = 'עובדות מעניינות';

    constructor(props) {
        super(props);

        this.state = {
            facts: this.onInitPrepareSlidesData(props.facts)
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
                <div className="facts-card-container">
                    <CardCarousel totalSlides={ this.state.facts.length }>
                        {
                            this.state.facts.map( (fact, i) => {
                                return <Slide key={i}>{ fact }</Slide>
                            })
                        }
                    </CardCarousel>
                </div>
            </CompanySectionCardBase>
        )
    }
}