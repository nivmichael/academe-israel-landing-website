import React from 'react';
import './CompanySectionCard.css';
import './CompanySectionCardResponsive.css';

export default function CompanySectionCard (props) {

    function applyClassList () {
        const classList = ['section-card'];
        if (props.isFullRow) {
            classList.push('full-row');
        } else if (props.isFullWidth) {
            classList.push('full-width');
        }

        return classList.join(' ');
    }

    return (
        <div id="company-section-card" className={ applyClassList() }>
            <div className="header">
                <div className="title">{ props.title }</div>
            </div>

            <div className="body">
                { props.children }
            </div>
        </div>
    )
};
