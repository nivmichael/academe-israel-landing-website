import React, {cloneElement, Component} from 'react';
import Navdot from "./Navdot/Navdot";
import './CardCarousel.css';
import './CardCarouselResponsive.css';
import Controls from "./Controls/Controls";

export default class CardCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalSlides: props.totalSlides ? props.totalSlides : 0,
            currentSlide: 0
        }

        this.navigateByNavdot = this.navigateByNavdot.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
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

    propertifySlides (slides) {
        return slides.map( (slideElement, i) => {
            return cloneElement(slideElement, {
                isActive: this.state.currentSlide === i,
                positionModifier: this.state.currentSlide
            })
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
                <Controls currentSlide={ this.state.currentSlide }
                          totalSlides={ this.state.totalSlides }
                          navigateByNavdot={ this.navigateByNavdot }
                          previousSlide={ this.previousSlide }
                          nextSlide={ this.nextSlide } />
            </div>
        )
    }
};
