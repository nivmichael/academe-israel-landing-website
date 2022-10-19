import React, { useState } from "react";

export default function Navdot(props) {
    return (
        <div className={ props.isActive ? 'navdot active': 'navdot' }
             onClick={ (e) => props.onClickNavigate(e, props.slideIndex) }>
        </div>
    );
};