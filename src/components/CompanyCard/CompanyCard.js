import React, { Component } from 'react';

import './CompanyCard.css';
import './CompanyCardResponsive.css';

export default class CompanyCard extends Component {

    onCompanyCardClicked = (e, sponsorshipId, companyId) => {
        e.preventDefault();
        e.stopPropagation();

        this.props.handleCompanyCardClicked(sponsorshipId, companyId);
    }

    componentDidMount () {
        // window.scrollTo(0, 0);
    }


    render() {
        return (
            <div id="company-card-main-container">
                <div className="company-card" onClick={ (e) => this.onCompanyCardClicked(e, this.props.sponsorshipId, this.props.companyId) }>
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
                            <button className="pure-button xsmall academe-button-full continue-button" onClick={ (e) => this.onCompanyCardClicked(e, this.props.sponsorshipId, this.props.companyId) }>לפרטים נוספים</button>
                        </div>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>
        )
    }
}
