import React from 'react';

import './InstituteCard.css';
import './InstituteCardResponsive.css';

export default function InstituteCard (props) {
    const card = ['pure-u-lg-1', 'pure-u-md-1', 'pure-u-sm-1', 'site-container'];
    const withLogo = ['with-logo'];

    function applyClassList () {
        return props.withLogos ? card.concat(withLogo).join(' ') : card.join(' ');
    }

    return (
        <div id="institute-card" className={ applyClassList() }
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
