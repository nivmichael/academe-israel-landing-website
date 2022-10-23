import React from "react";
import { CONST_UNIVERSITY_BASE_URL } from "../../constants";
import "./SocialMediaButton.css";

export default function SocialMediaButton (props) {
    if (!props.name || props.name === '') {
        return false;
    }

    const hasSocialMediaLink = () => {
        return props.link ? props.name + '_outline.png' : props.name + '_outline_light.png';
    }

    return (
        <a className="social-media-button" href={ props.link } target="_blank" rel="noopener noreferrer">
            <img className="pure-img"
                 name={ props.name }
                 src={ CONST_UNIVERSITY_BASE_URL + 'academe.wanted.co.il/images/icons/social-media/' + hasSocialMediaLink() }
                 alt={ props.name } />
        </a>
    )
}