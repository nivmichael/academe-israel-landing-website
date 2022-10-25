import React from "react";
import "./SocialMediaBar.css";
import "./SocialMediaBarResponsive.css";
import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";

export default function SocialMediaBar (props) {
    /**
     * Validate links Object
     *  Get data if the Object has a `1` property
     *  Get data if the Object doesn't have `1` property
     *  Default to empty object
     */
    const links = !props.links ? {}
                : props.links[1] ? props.links[1]
                : props.links ? props.links
                : {};

    return (
        <div className="company-social-links-container">
            <SocialMediaButton name="facebook" link={ links.social_facebook } />
            <SocialMediaButton name="linkedin" link={ links.social_linkedin } />
            <SocialMediaButton name="instagram" link={ links.social_instagram } />
            <SocialMediaButton name="youtube" link={ links.social_youtube } />
            <SocialMediaButton name="twitter" link={ links.social_twitter } />
        </div>
    )
}