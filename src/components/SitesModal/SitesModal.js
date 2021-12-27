import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './SitesModal.css';

/* ========= universities logos ========= */
import tauLogo from './../../images/logos/universities/tel-aviv-uni-200x75.png';
import bguLogo from './../../images/logos/universities/ben-gurion-uni-200x75.png';
import haifaLogo from './../../images/logos/universities/haifa-uni-200x75.png';
import technionLogo from './../../images/logos/universities/technion-uni-200x75.png';
import openuLogo from './../../images/logos/colleges/open-uni-200x75.png';
import biuLogo from './../../images/logos/universities/bar-ilan-uni-200x75.png';

/* ========= colleges logos ========= */
import telHaiLogo from './../../images/logos/colleges/tel-hai-uni-200x75.png';
import sceLogo from './../../images/logos/colleges/sce-uni-200x75.png';
import sapirLogo from './../../images/logos/colleges/sapir-uni-200x75.png';
import ashLogo from './../../images/logos/colleges/ashkelon-uni-200x75.png';
import mlaLogo from './../../images/logos/colleges/mla-uni-200x75.png';
import wgalilLogo from './../../images/logos/colleges/west-galil-uni-200x75.png';
import ruppinLogo from './../../images/logos/colleges/ruppin-uni-200x75.png';

/* ========= into system logo ========= */
import intoLogo from './../../images/logos/universities/into-logo-209x65.png';

/* ========== import constants ========= */
import {
    CONST_SITE_ID_LIST,
    CONST_UNIVERSITY_FULL_URL,
    CONST_UNIVERSITY_FULL_URL_AC,
    CONST_UNIVERSITY_BASE_URL,
    CONST_SPECIAL_URL_UNIVERSITY
} from './../../constants';

const sites = {
    'into'      : intoLogo,
    'tau'       : tauLogo,
    'bgu'       : bguLogo,
    'materials.technion': technionLogo,
    'haifa'     : haifaLogo,
    'openu'     : openuLogo,
    'biu'       : biuLogo,
    // testing
    'telhai'    : telHaiLogo,
    'ruppin'    : ruppinLogo,
    'jobsapir'  : sapirLogo,
    'ash'       : ashLogo,
    'mla'       : mlaLogo,
    'sce'       : sceLogo,
    'wgalil'    : wgalilLogo
};

export default class SitesModal extends Component {
    constructor() {
        super();
    }


    /**
     * Formats Url of the sites links
     *
     * @param {string} siteName
     *
     * @return {string} formatted url
     */
    formatSiteUrl = (siteName) => {
        let url = false;

        if (typeof siteName !== 'string' || siteName === '') {
            return false;
        }

        if(CONST_SPECIAL_URL_UNIVERSITY.indexOf(siteName) != -1) {
            url = CONST_UNIVERSITY_BASE_URL + siteName + '.acade-me.co.il/';
        }
        else {
            url = CONST_UNIVERSITY_FULL_URL;
            url = url.replace('${site_name}', siteName);
        }

        url = url + 'explore-companies/?view-company=' + this.props.companyId + '&sid=' + this.props.sponsorshipId;

        return url;
    }

    /**
     * Close modal
     */
    onCloseClicked = (e) => {
        e.preventDefault();

        this.props.handleClose();
    }

    /**
     * Close modal when ESC key is pressed
     */
    onEscKeyDown = (e) => {
        if (e.key !== 'Escape') {
            return;
        }

        this.props.handleClose();
    }


    /**
     * Renders the links to sites
     *
     * @return {Array} array of html elements
     */
    renderSitesList = () => {
        if (typeof this.props.sites === 'undefined') {
            return;
        }

        return Object.keys(sites).map((siteName, key) => {
            let [labelObj] = this.props.sites.filter( (_site) => { return _site.value === siteName; })
            return (
                <div className="site-container" key={key}>
                    <a className="pure-button site-link" href={this.formatSiteUrl(siteName)} target="_blank">
                        { labelObj.label }
                    </a>
                </div>
            );
        });
    }

    componentDidMount() {
        /** Listen to ESC key pressed */
        window.addEventListener('keydown', this.onEscKeyDown, false);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscKeyDown, false);
    }

    render() {
        return (
            <div id="modal-component" className={ this.props.isOpen ? 'modal show' : ' modal hide' }>
                <div className="modal-main-container">
                    <div className="pure-g">
                        <div className="pure-u-1">
                            <div className="header">
                                <FontAwesomeIcon icon={faTimes} size="lg" className="close-btn" onClick={this.onCloseClicked} />
                                <div className="title">בחרו את מוסד הלימודים</div>
                            </div>
                        </div>
                        <div className="pure-u-1">
                            <div className="body">
                                <div className="inner">
                                    { this.renderSitesList() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
