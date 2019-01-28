import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* ========== import components ========= */
import PageMainTitle from './../../components/PageMainTitle/PageMainTitle';
import SingleAdvantageBox from './../../components/SingleAdvantageBox/SingleAdvantageBox';

/* =========== component style ========== */
import './EmployersPage.css';
import './EmployersPageResponsive.css';

/* =========== companies logos =========== */
import googleLogo from './../../images/logos/companies/google-100x34.png';
import sapLogo from './../../images/logos/companies/sap-100x51.png';
import nielsenLogo from './../../images/logos/companies/nielsen-100x35.png';
import yahooLogo from './../../images/logos/companies/yahoo-100x23.png';
import pgLogo from './../../images/logos/companies/p-g-100x75.png';
import deloitteLogo from './../../images/logos/companies/deloitte-100x22.png';
import hpLogo from './../../images/logos/companies/hp-50x50.png';
import ebayLogo from './../../images/logos/companies/ebay-100x40.png';
import attLogo from './../../images/logos/companies/att-50x76.png';
import facebookLogo from './../../images/logos/companies/facebook-100x38.png';
import intelLogo from './../../images/logos/companies/intel-100x76.png';
import paypalLogo from './../../images/logos/companies/paypal-100x27.png';
/* ==== companies logos (initialiy collapsed) ==== */
import microsoftLogo from './../../images/logos/companies/microsoft-120x26.png';
import nessLogo from './../../images/logos/companies/ness-75x75.png';
import amdocsLogo from './../../images/logos/companies/amdocs-100x67.png';
import amazonLogo from './../../images/logos/companies/amazon-120x44.png';
import appleLogo from './../../images/logos/companies/apple-70x87.png';
import audiocodesLogo from './../../images/logos/companies/audiocodes-120x21.png';
import comverseLogo from './../../images/logos/companies/comverse-100x35.png';
import dellLogo from './../../images/logos/companies/dell-100x30.png';
import fiverrLogo from './../../images/logos/companies/fiverr-100x30.png';
import iaiLogo from './../../images/logos/companies/iai-100x62.png';

const companiesList = {
    'google'    : googleLogo,
    'sap'       : sapLogo,
    'nielsen'   : nielsenLogo,
    'yahoo'     : yahooLogo,
    'pg'        : pgLogo,
    'deloitte'  : deloitteLogo,
    'hp'        : hpLogo,
    'ebay'      : ebayLogo,
    'att'       : attLogo,
    'facebook'  : facebookLogo,
    'intel'     : intelLogo,
    'paypal'    : paypalLogo
};

const companiesCollapsedList = {
    'microsoft'     : microsoftLogo,
    'ness'          : nessLogo,
    'amdocs'        : amdocsLogo,
    'amazon'        : amazonLogo,
    'apple'         : appleLogo,
    'audiocodes'    : audiocodesLogo,
    'comverse'      : comverseLogo,
    'dell'          : dellLogo,
    'fiverr'        : fiverrLogo,
    'iai'           : iaiLogo
};

const advantagesList = ['big_data_stock', 'efficient_process', 'accurate_matches', 'market_variety'];

export default class EmployersPage extends Component {
    constructor() {
        super();

        this.state = {
            isCompaniesListExpanded: false,
            employerEmail: '',
            employerPhone: ''
        }

        this.inputLabelValues = { email: 'הכנס את האימייל שלך', phone: 'הכנס את מספר הטלפון שלך' };
    }

    /**
     * Stores the employer's email input value
     *
     * @param {Event} e - event
     */
    handleEmployerEmail = (e) => {
        let employerEmail = e.target.value;
        // let regex = new RegExp('^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$');
        // if (regex.test(employerEmail))

        this.setState({ ...this.state, employerEmail }, () => { console.log(this.state); });
    }

    /**
     * Stores the employer's phone input value
     *
     * @param {Event} e - event
     */
    handleEmployerPhone = (e) => {
        let employerPhone = e.target.value;
        this.setState({ ...this.state, employerPhone }, () => { console.log(this.state); });
    }

    onSubmitForm = () => {
        // submit form through service
    }

    /**
     * Keeps your state in sync with the expanding/collapsing companies list
     *
     * @param {Boolean} is_expanded
     */
    handleStateChange = (is_expanded) => {
        // this.setState({ isCompaniesListExpanded: is_expanded });
        let isCompaniesListExpanded = is_expanded;
        this.setState({ ...this.state, isCompaniesListExpanded }, () => { console.log(this.state); });
    }

    /**
     * Toggles between the collapsed mode and the expanded mode of the companies list
     * Updates state when toggling
     *
     * @param {Boolean} is_expanded
     */
    onCompaniesListToggleExpand = (is_expanded) => {
        is_expanded ? this.onCompaniesListCollapse() : this.onCompaniesListExpand();
        is_expanded = !is_expanded;
        this.handleStateChange(is_expanded);
    }

    /**
     * Expands the companies list by adding the class 'expanded' to the list container
     */
    onCompaniesListExpand = () => {
        this.refs.hiringCompaniesListRef.classList.add('expanded');
    }

    /**
     * Collapses the companies list by removing the class 'expanded' to the list container
     */
    onCompaniesListCollapse = () => {
        this.refs.hiringCompaniesListRef.classList.remove('expanded');
    }

    /**
     * Creates array of SingleAdvantageBox'es for rendering
     *
     * @param {Array} advantages_list - array of advantages to render
     * @return {Array} list - list of html elements, contains the SingleAdvantageBox for each element
     */
    renderAdvantagesList = (advantages_list) => {
        let list = [];

        advantages_list.map((advantage, key) => {
            list.push(<SingleAdvantageBox advantage={advantage} employerOnly={true} key={key}></SingleAdvantageBox>);
        });

        return list;
    }

    /**
     * Creates array of Companies Logos for rendering
     *
     * @param {Array} companies_list - array of companies logos to render
     * @param {Boolean} is_collapsed - [optional] state of collapsed container flag
     * @returns {Array} list - list of html elements, contains the <img> wrapped in <div>
     */
    renderCompaniesList = (companies_list, is_collapsed = false) => {
        let list = [];

        Object.keys(companies_list).map((company_key) => {
            list.push(
                <div className={ 'company-img-container' + (is_collapsed ? ' collapsed' : '') } key={company_key}>
                    <img className="pure-img" src={companies_list[company_key]} alt={company_key}></img>
                </div>
            );
        });

        return list;
    }

    /**
     * Renders the (expand/collapse)Icon based on the given flag
     *
     * @param {Boolean} is_expanded
     * @returns {Element} FontAwesomeIcon
     */
    renderExpandButton = (is_expanded) => {
        return <FontAwesomeIcon icon={ is_expanded ? 'minus' : 'plus' } size="2x"></FontAwesomeIcon>;
    }

    render() {
        return (
            <div id="employers-page-component">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <PageMainTitle titleType="employers"></PageMainTitle>
                    </div>
                    <div className="pure-u-1">
                        <div className="advantages-container">
                            { this.renderAdvantagesList(advantagesList) }
                        </div>
                    </div>
                    <div className="pure-u-1">
                        <div className="publish-job-form-container">
                            <form className="pure-form pure-form-stacked">
                                <fieldset>
                                    <div className="form-title">לפרסום משרה</div>
                                    <input id="publish-job-input-email" type="email" onChange={ this.handleEmployerEmail } className="floating-label" placeholder="הכנס את האימייל שלך"></input>
                                    <input id="publish-job-input-phone" type="text" onChange={ this.handleEmployerPhone } className="floating-label" placeholder="הכנס את מספר הטלפון שלך"></input>
                                    <button type="submit" className="pure-button academe-button-full continue-button">המשך</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className="pure-u-1">
                        <div className="hiring-companies-list-container">
                            <div className="hiring-companies-list" ref="hiringCompaniesListRef">
                                <div className="title">חברות המגייסות באמצעות מערכת AcadeME</div>
                                <div className="hiring-companies">
                                    { this.renderCompaniesList(companiesList) }
                                    { this.renderCompaniesList(companiesCollapsedList, 'collapsed') }
                                </div>
                            </div>
                            <button className="pure-button expand-button" onClick={ () => this.onCompaniesListToggleExpand(this.state.isCompaniesListExpanded) }>
                                { this.renderExpandButton(this.state.isCompaniesListExpanded) }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
