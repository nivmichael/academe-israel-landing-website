import React from 'react';
import './CompanySectionCardBase.css';
import './CompanySectionCardBaseResponsive.css';

export default function CompanySectionCardBase (props) {
    const card = ['company-section-card', 'section-card'];
    const base = ['pure-u-lg-11-24', 'pure-u-md-11-24', 'pure-u-sm-24-24'];
    const full = ['full-width', 'pure-u-lg-24-24', 'pure-u-md-24-24', 'pure-u-sm-24-24'];

    function applyClassList () {
        // const classList = ['company-section-card', 'section-card'];
        let classList = ['company-section-card', 'section-card', 'pure-u-lg-11-24', 'pure-u-md-11-24', 'pure-u-sm-24-24'];
        if (props.isFullRow) {
            classList = ['company-section-card', 'section-card', 'full-width', 'pure-u-lg-24-24', 'pure-u-md-24-24', 'pure-u-sm-24-24'];
            // classList.push('full-row');
        } else if (props.isFullWidth) {
            classList.push('full-width');
        }

        return classList.join(' ');
    }

    return (
        <div className={ applyClassList() }>
            <div className="header">
                <div className="title">{ props.title }</div>
            </div>

            <div className="body">
                { props.children }
            </div>
        </div>
    )
};
