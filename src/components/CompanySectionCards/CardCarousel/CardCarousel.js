import React, { Component } from 'react';
import Navdot from "./Navdot/Navdot";
import './CardCarousel.css';
import './CardCarouselResponsive.css';

export default class CardCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slides: Array.isArray(props.slides) ? props.slides : false,
            totalSlides: props.slides ? props.slides.length : 0,
            currentSlide: 0
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.navigateByNavdot = this.navigateByNavdot.bind(this);
        this.renderNavdots = this.renderNavdots.bind(this);
    }

    nextSlide (e) {
        e.preventDefault();

        let currentSlide = this.state.currentSlide;
        if ((currentSlide + 1) > this.state.totalSlides) {
            return false;
        }

        currentSlide = currentSlide+1;
        this.setState({ ...this.state, currentSlide });
    }

    previousSlide (e) {
        e.preventDefault();

        let currentSlide = this.state.currentSlide;
        if ((currentSlide - 1) < 0) {
            return false;
        }

        currentSlide = currentSlide-1;
        this.setState({ ...this.state, currentSlide });
    }

    navigateByNavdot (e, slideIndex) {
        e.preventDefault();

        if (slideIndex === false || typeof slideIndex === 'undefined') {
            return false
        }

        let currentSlide = slideIndex;
        this.setState({ ...this.state, currentSlide });
    }

    renderNavdots (slides) {
        if (!slides) {
            return false;
        }

        return slides.map( (slide, i) => {
            return (
                <Navdot isActive={i === this.state.currentSlide}
                        onClickNavigate={this.navigateByNavdot}
                        slideIndex={i}
                        key={i} />
            )
        })
    }

    render() {
        return (
            <div className="carousel-container">
                <div className="carousel">
                    {
                        this.state.slides.map( (slide, i) => {
                            return <div key={i} className="slide">{ slide }</div>
                        })
                    }
                </div>
                <div className="carousel-control">
                    <div className="navarrow-container right">
                        <button className={ this.state.currentSlide === 0 ? 'navarrow disabled' : 'navarrow' }
                                onClick={ (e) => this.previousSlide(e) }>&lt;</button>
                    </div>
                    <div className="navdots-container">
                        {
                            this.renderNavdots(this.state.slides)
                        }
                    </div>
                    <div className="navarrow-container left">
                        <button className={ this.state.currentSlide === this.state.totalSlides-1 ? 'navarrow disabled' : 'navarrow' }
                                onClick={ (e) => this.nextSlide(e) }>&gt;</button>
                    </div>
                </div>
            </div>
        )
    }
};
