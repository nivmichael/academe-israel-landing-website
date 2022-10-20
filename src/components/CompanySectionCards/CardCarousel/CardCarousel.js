import React, {cloneElement, Component} from 'react';
import Navdot from "./Navdot/Navdot";
import './CardCarousel.css';
import './CardCarouselResponsive.css';

export default class CardCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalSlides: props.totalSlides ? props.totalSlides : 0,
            currentSlide: 0
        }
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

    renderNavdots () {
        let navdots = [];

        for (let i = 0; i < this.state.totalSlides; i++) {
            navdots.push(
                <Navdot isActive={i === this.state.currentSlide}
                                 onClickNavigate={this.navigateByNavdot}
                                 slideIndex={i}
                                 key={i} />
            );
        }

        return navdots;
    }

    propertifySlides (slideElementsArray) {
        return slideElementsArray.map( (slideElement, i) => {
            return cloneElement(slideElement, { isActive: this.state.currentSlide === i })
        });
    }

    render() {
        return (
            <div className="carousel-container">
                <div className="carousel">
                    {
                        /*  Slides go here */
                        this.propertifySlides(this.props.children)
                    }
                </div>
                <div className="carousel-control">
                    <div className="navarrow-container right">
                        <button className={ this.state.currentSlide === 0 ? 'navarrow disabled' : 'navarrow' }
                                onClick={ (e) => this.previousSlide(e) }>&lt;</button>
                    </div>
                    <div className="navdots-container">
                        { this.renderNavdots() }
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
