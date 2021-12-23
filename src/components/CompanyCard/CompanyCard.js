import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './CompanyCard.css';
import './CompanyCardResponsive.css';

export default class CompanyCard extends Component {
    constructor() {
        super();
    }


    onCompanyCardClicked = (e) => {
        e.preventDefault();

    }

    componentDidMount () {
        // window.scrollTo(0, 0);
    }


    render() {
        return (
            <div id="company-card-main-container">
                <div className="company-card">
                    <div className="card-cover">
                        <img src={this.props.cover} alt="company-cover" />
                    </div>
                    <div className="card-logo">
                        <img src={this.props.logo} alt="company-logo" />
                    </div>
                    <div className="card-desc">
                        <div id="company-name">
                            { this.props.name }
                        </div>
                        <div id="company-details">
                            {/*<button className="pure-button xsmall academe-button-full continue-button" onClick={ this.onCompanyCardClicked }>לפרטים נוספים</button>*/}
                            <NavLink to="/explore-companies" activeClassName="active-link">לפרטים נוספים</NavLink>
                        </div>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>
        )
    }
}
