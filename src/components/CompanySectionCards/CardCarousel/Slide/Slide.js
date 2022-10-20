import React from "react";
import './Slide.css';

export default function Slide(props) {
    const updatePosition = () => {
        return { 'transform': `translateX(${ 100 * props.positionModifier }%)` }
    }

    const isActive = () => {
        return props.isActive ? 'active' : '';
    }

    return (
        <div className={ 'slide ' + isActive() } style={ updatePosition() }>
            { props.children }
        </div>
    );
};