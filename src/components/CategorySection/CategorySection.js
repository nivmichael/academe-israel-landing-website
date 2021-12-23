import React from 'react';

import './CategorySection.css';
import './CategorySectionResponsive.css';

export default function CategorySection (props) {

    return (
        <div id="category-section" className="category-container">
            <div className="category-title">
                <div className="title">{ props.title }</div>
				<div className="separator"></div>
            </div>
            <div className="category-companies">
                { props.children }
            </div>
        </div>
    );
}
