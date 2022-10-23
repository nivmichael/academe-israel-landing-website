import React, { Component } from 'react';
import CompanySectionCardBase from "../CompanySectionCardBase/CompanySectionCardBase";
import CardCarousel from "../CardCarousel/CardCarousel";
import Slide from '../CardCarousel/Slide/Slide';
import './TestimonialsCard.css';
import './TestimonialsCardResponsive.css';
import {CONST_UNIVERSITY_BASE_URL} from "../../../constants";

export default class TestimonialsCard extends Component {

    cardTitle = 'עובדים מספרים';

    constructor(props) {
        super(props);

        this.state = {
            testimonials: this.onInitPrepareSlidesData(props.testimonials)
        }

        console.log(this.state.testimonials)
    }

    onInitPrepareSlidesData (slides) {
        if (!slides) {
            return [];
        }

        return Object.keys(slides).map( (i) => {
            let slide = {};
            Object.keys(slides[i]).map( (key) => {
                if (key === 'file') {
                    slide.file = slides[i][key]
                } else if (key.includes('testimonials_emp_name')) {
                    slide.name = slides[i][key]
                } else if (key.includes('testimonials_text')) {
                    slide.text = slides[i][key]
                } else if (key.includes('testimonials_job_title')) {
                    slide.job_title = slides[i][key]
                }
                return slide;
            })
            return slide;
        });
    }

    onEmptyValueUpdateClassList (value) {
        return (!value || value === '') ? ' empty' : '';
    }

    render() {
        return (
            <CompanySectionCardBase title={this.cardTitle}>
                <div className="testimonials-card-container">
                    <CardCarousel totalSlides={ this.state.testimonials.length }>
                        {
                            this.state.testimonials.map( (testimonial, i) => {
                                return <Slide key={i}>
                                    <div className="testimonial-row file">
                                        <img className="pure-img" src={ CONST_UNIVERSITY_BASE_URL + testimonial.file } alt={ 'testimonial-file-' + i } />
                                    </div>
                                    <div className="testimonial-row text">{ testimonial.text }</div>
                                    <div className="testimonial-row name">{ testimonial.name }</div>
                                    <div className={ 'testimonial-row job-title' + this.onEmptyValueUpdateClassList(testimonial.job_title) }>
                                        {testimonial.job_title}
                                    </div>
                                </Slide>
                            })
                        }
                    </CardCarousel>
                </div>
            </CompanySectionCardBase>
        )
    }
}