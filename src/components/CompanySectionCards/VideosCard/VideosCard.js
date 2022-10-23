import React, { Component } from 'react';
import CompanySectionCardBase from "../CompanySectionCardBase/CompanySectionCardBase";
import CardCarousel from "../CardCarousel/CardCarousel";
import Slide from '../CardCarousel/Slide/Slide';
import './VideosCard.css';
import './VideosCardResponsive.css';

export default class VideosCard extends Component {

    cardTitle = 'סרטונים';

    constructor(props) {
        super(props);

        this.state = {
            videos: this.onInitPrepareSlidesData(props.videos)
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
            <CompanySectionCardBase isFullRow={true} title={this.cardTitle}>
                <div className="videos-card-container">
                    <CardCarousel totalSlides={ this.state.videos.length }>
                        {
                            this.state.videos.map( (srcUrl, i) => {
                                return <Slide key={i}>
                                    <iframe src={ srcUrl }
                                            title="video-frame"
                                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen={true}></iframe>
                                </Slide>
                            })
                        }
                    </CardCarousel>
                </div>
            </CompanySectionCardBase>
        )
    }
}