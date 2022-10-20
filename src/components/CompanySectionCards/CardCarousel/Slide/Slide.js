import React from "react";
import './Slide.css';

export default function Slide(props) {
    return (
        <div className={ props.isActive ? 'slide active': 'slide' }>
            { props.children }
        </div>
    );
};