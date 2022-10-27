import React from 'react';
import './CompanySectionCardBase.css';
import './CompanySectionCardBaseResponsive.css';

export default function CompanySectionCardBase (props) {
    let card = ['company-section-card', 'section-card'];
    let defaultWidth = ['pure-u-lg-11-24', 'pure-u-md-11-24', 'pure-u-sm-24-24'];
    let fullWidth = ['full-width', 'pure-u-lg-24-24', 'pure-u-md-24-24', 'pure-u-sm-24-24'];

    function applyClassList () {
        return  props.isFullRow ? card.concat(fullWidth).join(' ') : card.concat(defaultWidth).join(' ');
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
