import React from "react";
import Navdot from "../Navdot/Navdot";
import './Controls.css';

export default function Controls(props) {
    const renderNavdots = () => {
        let navdots = [];

        for (let i = 0; i < props.totalSlides; i++) {
            navdots.push(
                <Navdot isActive={ i === props.currentSlide }
                        onClickNavigate={ props.navigateByNavdot }
                        slideIndex={ i }
                        key={ i } />
            );
        }

        return navdots;
    }

    const isFirst = () => {
        return props.currentSlide === 0 ? ' disabled' : '';
    }

    const isLast = () => {
        return props.currentSlide === props.totalSlides-1 ? ' disabled' : '';
    }

    return (
        <div className="carousel-control">
            <div className="navarrow-container right">
                <button className={ 'navarrow' + isFirst() } onClick={ (e) => props.previousSlide(e) }>&lt;</button>
            </div>
            <div className="navdots-container">
                { renderNavdots() }
            </div>
            <div className="navarrow-container left">
                <button className={ 'navarrow' + isLast() } onClick={ (e) => props.nextSlide(e) }>&gt;</button>
            </div>
        </div>
    );
};