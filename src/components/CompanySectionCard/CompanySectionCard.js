import React from 'react';
import './CompanySectionCard.css';
import './CompanySectionCardResponsive.css';

export default function CompanySectionCard (props) {

    return (
        <div id="company-section-card" className="section-card">
            <div className="header">
                <div className="title">{ props.title }</div>
            </div>

            <div className="body">
                { props.children }
            </div>
        </div>
    )
};
