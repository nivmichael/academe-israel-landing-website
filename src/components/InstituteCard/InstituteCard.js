import React from 'react';

import './InstituteCard.css';
import './InstituteCardResponsive.css';

export default function InstituteCard (props) {
    return (
        <div id="institute-card" className={ props.withLogos ? 'site-container with-logo' : 'site-container' }
            onClick={ (e) => props.withLogos && props.handleCardClick(e, props.name) }>
            {
                props.withLogos ?

                <div className="pure-button site-link">{ props.label }</div>

                :

                <a className="pure-button site-link" href={props.url} target="_blank" without rel="noopener noreferrer">
                    { props.label }
                </a>
            }
            {
                props.withLogos &&

                <img src={props.logo} alt={ props.name.concat('-logo') } />
            }
        </div>
    );
}
