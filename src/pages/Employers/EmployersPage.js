import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loader-spinner';
import axios from 'axios';

/* ========== import constants ========= */
import {
    CONST_API_BASE_URL,
    CONST_DEV_API_BASE_URL,
    CONST_API_BASE_PARAM,
    CONST_API_ACTION_PARAM,
    CONST_RESPONSE_SUCCESS,
    CONST_RESPONSE_FAIL
} from './../../constants';

/* ========== import components ========= */
import PageMainTitle from './../../components/PageMainTitle/PageMainTitle';
import SingleAdvantageBox from './../../components/SingleAdvantageBox/SingleAdvantageBox';
import Footer from './../../components/Footer/Footer';

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

import microsoftLogo from './../../images/logos/companies/microsoft-120x26.png';
import nessLogo from './../../images/logos/companies/ness-75x75.png';
import amdocsLogo from './../../images/logos/companies/amdocs-100x67.png';
import amazonLogo from './../../images/logos/companies/amazon-120x44.png';
import appleLogo from './../../images/logos/companies/apple-70x87.png';
import audiocodesLogo from './../../images/logos/companies/audiocodes-120x21.png';
/* ==== companies logos (initialiy collapsed) ==== */
import comverseLogo from './../../images/logos/companies/comverse-100x35.png';
import dellLogo from './../../images/logos/companies/dell-100x30.png';
import fiverrLogo from './../../images/logos/companies/fiverr-100x30.png';
import iaiLogo from './../../images/logos/companies/iai-100x62.png';
import fedexLogo from './../../images/logos/companies/fedex-100x42.png';
import geLogo from './../../images/logos/companies/ge-75x75.png';
import gmLogo from './../../images/logos/companies/gm-100x72.png';
import hapoalimLogo from './../../images/logos/companies/hapoalim-100x28.png';
import hevratHashmalLogo from './../../images/logos/companies/hevrat_hashmal-100x73.png';
import hotLogo from './../../images/logos/companies/hot-75x83.png';
import altshoolerLogo from './../../images/logos/companies/altshooler-75x63.png';
import bdoLogo from './../../images/logos/companies/bdo-100x39.png';
import checkpointLogo from './../../images/logos/companies/checkpoint-120x20.png';
import cocacolaLogo from './../../images/logos/companies/cocacola-100x33.png';
import deutschebankLogo from './../../images/logos/companies/deutschebank-125x19.png';
import eciLogo from './../../images/logos/companies/eci-75x74.png';
import elalLogo from './../../images/logos/companies/elal-100x29.png';
import electraLogo from './../../images/logos/companies/electra-100x27.png';
import eyLogo from './../../images/logos/companies/ey-75x75.png';
import ibmLogo from './../../images/logos/companies/ibm-100x40.png';
import iclLogo from './../../images/logos/companies/icl-100x66.png';
import ironsourceLogo from './../../images/logos/companies/ironsource-120x30.png';
import jpmorganLogo from './../../images/logos/companies/jpmorgan-125x31.png';
import kodakLogo from './../../images/logos/companies/kodak-100x67.png';
import kpmgLogo from './../../images/logos/companies/kpmg-100x39.png';
import lorealLogo from './../../images/logos/companies/loreal-120x22.png';
import macabiLogo from './../../images/logos/companies/macabi-100x41.png';
import manpowerLogo from './../../images/logos/companies/manpower-100x86.png';
import tevaLogo from './../../images/logos/companies/teva-100x38.png';

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
    'paypal'    : paypalLogo,
    'microsoft' : microsoftLogo,
    'ness'      : nessLogo,
    'amdocs'    : amdocsLogo,
    'amazon'    : amazonLogo
};

const companiesCollapsedList = {
    'comverse'      : comverseLogo,
    'apple'         : appleLogo,
    'audiocodes'    : audiocodesLogo,
    'dell'          : dellLogo,
    'fiverr'        : fiverrLogo,
    'iai'           : iaiLogo,
    'fedex'         : fedexLogo,
    'ge'            : geLogo,
    'gm'            : gmLogo,
    'hapoalim'      : hapoalimLogo,
    'hevratHashmal' : hevratHashmalLogo,
    'hot'           : hotLogo,
    'teva'          : tevaLogo,
    'altshooler'    : altshoolerLogo,
    'bdo'           : bdoLogo,
    'checkpoint'    : checkpointLogo,
    'cocacola'      : cocacolaLogo,
    'deutschebank'  : deutschebankLogo,
    'eci'           : eciLogo,
    'elal'          : elalLogo,
    'electra'       : electraLogo,
    'ey'            : eyLogo,
    'ibm'           : ibmLogo,
    'icl'           : iclLogo,
    'ironsource'    : ironsourceLogo,
    'jpmorgan'      : jpmorganLogo,
    'kodak'         : kodakLogo,
    'kpmg'          : kpmgLogo,
    'loreal'        : lorealLogo,
    'macabi'        : macabiLogo,
    'manpower'      : manpowerLogo
};

const advantagesList = ['big_data_stock', 'efficient_process', 'accurate_matches', 'market_variety'];

export default class EmployersPage extends Component {
    constructor() {
        super();

        this.state = {
            isCompaniesListExpanded: false,
            employerEmail: '',
            employerId: ''
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

        this.setState({ ...this.state, employerEmail });
    }

    /**
     * Service Method
     * Submits the given email to the server to check if the employer is present in the system
     * @param {Event}  e - event
     */
    onSubmitForm = (e) => {
        e.preventDefault();
        let url     = CONST_DEV_API_BASE_URL + '?' + CONST_API_BASE_PARAM + '&' + CONST_API_ACTION_PARAM + 'checkEmployerByEmail';
        let params  = new URLSearchParams();

        params.append('Content-Type', 'application/x-www-form-urlencoded');
        params.append('email', this.state.employerEmail);

        if (this.state.employerEmail != '') {
            this.refs.publishJobButtonContainerRef.classList.add('show-spinner');
            axios.post(url, params).then((response) => {
                this.refs.publishJobButtonContainerRef.classList.remove('show-spinner');
                if (response.data.status == CONST_RESPONSE_SUCCESS) {
                    console.log('onSubmitForm:response:employerId (success) -> ', response.data.employerId);
                    let employerId = response.data.employerId;
                    this.setState({ ...this.state, employerId }, () => { console.log(this.state); });
                }
                else if (response.data.status == CONST_RESPONSE_FAIL) {
                    console.log('onSubmitForm:response (failed) -> ', response.data);
                }
            }).catch((error) => {
                this.refs.publishJobButtonContainerRef.classList.remove('show-spinner');
                console.log('error -> ', error);
            });
        }
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
                                    <div className="button-container" ref="publishJobButtonContainerRef">
                                        <button className="pure-button academe-button-full continue-button" onClick={ this.onSubmitForm }>המשך</button>
                                        <span id="publish-job-loading-spinner"><Loader type="Oval" color="#2194d3" height="30" width="30" /></span>
                                    </div>
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
                    <div className="pure-u-1 footer-container">
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        );
    }
}
