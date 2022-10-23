import React, { Component } from 'react';
import CompanySectionCardBase from "../CompanySectionCardBase/CompanySectionCardBase";
import CardCarousel from "../CardCarousel/CardCarousel";
import Slide from '../CardCarousel/Slide/Slide';
import { CONST_UNIVERSITY_BASE_URL } from "../../../constants";
import './GalleryCard.css';
import './GalleryCardResponsive.css';

export default class GalleryCard extends Component {

    cardTitle = 'גלריית תמונות';

    constructor(props) {
        super(props);

        this.state = {
            gallery: props.gallery ? props.gallery : []
        }
    }

    render() {
        return (
            <CompanySectionCardBase title={this.cardTitle}>
                <div className="gallery-card-container">
                    <CardCarousel totalSlides={ this.state.gallery.length }>
                        {
                            this.state.gallery.map( (srcUrl, i) => {
                                return <Slide key={i}>
                                    <img className="pure-img gallery-img" src={ CONST_UNIVERSITY_BASE_URL + srcUrl } alt={ 'gallery-img-' + i } />
                                </Slide>
                            })
                        }
                    </CardCarousel>
                </div>
            </CompanySectionCardBase>
        )
    }
}