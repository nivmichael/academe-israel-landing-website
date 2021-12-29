import React, { Component } from 'react';
import axios from 'axios';
import LaddaButton, { XS, EXPAND_LEFT } from 'react-ladda';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageMainTitle from '../../components/PageMainTitle/PageMainTitle';
import Footer from '../../components/Footer/Footer';
// styles
import './ReferPage.css';
import './ReferPageResponsive.css';

import {
    CONST_UNIVERSITY_BASE_URL,
    CONST_API_BASE_URL,
    CONST_API_BASE_PARAM,
    CONST_API_ACTION_PARAM,
    CONST_RESPONSE_SUCCESS,
    CONST_RESPONSE_FAIL
} from '../../constants';

import { formatSiteUrlUtil } from './../../utils';

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
import yvcLogo from './../../images/logos/colleges/emek-izrael-uni-200x75.png';

/* ========= icons ========= */
import chevronDownIcon from '../../images/icons/chevron-down-icon-white.png';

const universitiesList = {
    'tau'       : tauLogo,
    'bgu'       : bguLogo,
    'biu'       : biuLogo,
    'haifa'     : haifaLogo,
    'openu'     : openuLogo,
    'materials.technion': technionLogo
},    collegesList = {
    'telhai'    : telHaiLogo,
    'sapir'     : sapirLogo,
    'ash'       : ashLogo,
    'sce'       : sceLogo,
    'wgalil'    : wgalilLogo,
    'yvc'       : yvcLogo,
    'mla'       : mlaLogo
};


export default class ReferPagePage extends Component {
    constructor () {
        super();

        this.state = {
            selectedUserType: '',
            jobSeekerType: null,
            userEmail: '',
            checkedUser: false,
            userExists: false
        }
    }

    /**
     * Redirects the user to the desired university login page
     * Opens in new tab
     * @param {Event} e
     */
    onUniversityClicked = (e) => {
        e.preventDefault();
        let university = e.target.id || e.target.parentNode.id;
        let url        = false;

        url = formatSiteUrlUtil(university);

        // redirect the job-seeker to register with the inserted email
        if (this.state.jobSeekerType) url += 'register?type=job-seeker&sub_type=' + this.state.jobSeekerType;
        if (this.state.userEmail) url += '&email=' + this.state.userEmail;

        // redirect to composed url
        if (url !== false) { window.open(url, "_blank"); }
    }

    /**
     * Renders the list of universities images wrapped in div element
     * @param {Object} universities_list - list of names and logos
     * @returns {Array} list - list of elements
     */
    renderUniversitiesList = (listToRender) => {
        let list = [];

        list = Object.keys(listToRender).map((uni_key) => {
            return (
                <div id={uni_key} className="icon-container" key={uni_key} onClick={ this.onUniversityClicked }>
                    <img className={'pure-img uni-icon' + (uni_key == 'into' ? ' into-sys-icon' : '')} src={listToRender[uni_key]} alt={uni_key}></img>
                </div>
            )
        });

        return list;
    }

    /**
     * Displays Notification bubble
     * @param {String} type - SUCCESS/FAIL
     */
    notify = (type) => {
        if (type == CONST_RESPONSE_SUCCESS) {
            toast.success("טופס פנייה נשלח בהצלחה", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (type == CONST_RESPONSE_FAIL) {
            toast.error("שליחת טופס פנייה נכשל", { position: toast.POSITION.BOTTOM_CENTER });
        }
    }

    /**
     * Stores the user's email input value
     *
     * @param {Event} e - event
     */
    handleUserEmail = (e) => {
        let userEmail = e.target.value;
        // let regex = new RegExp('^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$');
        // if (regex.test(employerEmail))

        this.setState({ ...this.state, userEmail });
    }

    /**
     * Service Method
     * Submits the given email to the server to check if the employer is present in the system
     * @param {Event}  e - event
     */
    onSubmitForm = (e) => {
        e.preventDefault();
        let url     = CONST_API_BASE_URL + '?' + CONST_API_BASE_PARAM + '&' + CONST_API_ACTION_PARAM;
        let params  = new URLSearchParams();

        if (this.state.selectedUserType == 'employer') {
            url += 'checkEmployerByEmail';
        } else {
            url += 'checkJobseekerByEmail';
        }

        params.append('Content-Type', 'application/x-www-form-urlencoded');
        params.append('email', this.state.userEmail);

        if (this.state.userEmail != '') {
            this.refs.checkEmailButtonContainerRef.classList.add('show-spinner');

            axios.post(url, params).then((response) => {
                this.refs.checkEmailButtonContainerRef.classList.remove('show-spinner');

                if (response.data.status == CONST_RESPONSE_SUCCESS) {
                    let url                      = false;
                    let university               = response.data.siteName;

                    if (university) {
                        url = formatSiteUrlUtil(university);
                    }

                    // redirect the job-seeker to register with the inserted email
                    if (this.state.jobSeekerType || this.state.selectedUserType == 'employer') url += 'login/?route=' + (this.state.jobSeekerType || this.state.selectedUserType);
                    if (this.state.userEmail) url += '&email=' + this.state.userEmail;

                    // redirect to composed url
                    if (url !== false) { window.open(url, "_blank"); }
                } else if (response.data.status == CONST_RESPONSE_FAIL) {
                    this.setState({checkedUser: true});

                    if (this.state.selectedUserType == 'employer') {
                        let url = CONST_UNIVERSITY_BASE_URL + 'into.acade-me.co.il/register?type=employer&email=' + this.state.userEmail;
                        window.open(url, "_blank");
                    }
                }
            }).catch((error) => {
                this.refs.checkEmailButtonContainerRef.classList.remove('show-spinner');
                console.log('error -> ', error);
            });
        }
    }

    render() {
        return (
            <div id="refer-page-component">
                <div className="pure-g center">
                    <div className="pure-u-1">
                        <PageMainTitle titleType="refer"></PageMainTitle>
                    </div>
                    <div className="pure-u-1">
                        {this.state.selectedUserType != 'job-seeker' &&
                            <div>
                                <a className={'user-type-select-button' + (this.state.selectedUserType == 'job-seeker' ? ' is-active' : '')} onClick={() => {this.setState({selectedUserType: 'job-seeker', checkedUser: false})}}>מחפש/ת עבודה</a>
                                <span className="separator general">או</span>
                                <a className={'user-type-select-button type-select-button-employer' + (this.state.selectedUserType == 'employer' ? ' is-active' : '')} onClick={() => {this.setState({selectedUserType: 'employer', checkedUser: false})}}>מעסיק</a>
                            </div>
                        }

                        {this.state.selectedUserType == 'job-seeker' && !this.state.checkedUser &&
                            <div>
                                <a className={'user-type-select-button' + (this.state.jobSeekerType == 'student' ? ' is-active' : '')} onClick={() => {this.setState({jobSeekerType: 'student', checkedUser: false})}}>סטודנט/ית</a>
                                <span className="separator">או</span>
                                <a className={'user-type-select-button' + (this.state.jobSeekerType == 'graduate' ? ' is-active' : '')} onClick={() => {this.setState({jobSeekerType: 'graduate', checkedUser: false})}}>בוגר/ת</a>
                            </div>
                        }

                        {(this.state.selectedUserType == 'employer' || this.state.jobSeekerType && !this.state.checkedUser) &&
                            <div id="user-email-check" className="pure-form">
                                <input id="user-email-check-input-email" type="email" onChange={ this.handleUserEmail } className="academe-input" placeholder="הכנס/י את האימייל שלך"></input>
                                <div className="button-container" ref="checkEmailButtonContainerRef">
                                    <button className="pure-button academe-button-full continue-button" onClick={ this.onSubmitForm }>המשך</button>
                                    <span id="check-email-loading-spinner"><Loader type="Oval" color="#2194d3" height="30" width="30" /></span>
                                </div>
                            </div>
                        }

                        {this.state.selectedUserType == 'job-seeker' && this.state.checkedUser &&
                            <div>
                                <h1>מאיזו אוניברסיטה או מכללה אתם?</h1>
                                <span className="arrow-separator"><img src={chevronDownIcon} /></span>
                                <div>{ this.renderUniversitiesList(universitiesList) }</div>
                                <div className="is-colleges">{ this.renderUniversitiesList(collegesList) }</div>
                                <a id="into" className="into-button" onClick={this.onUniversityClicked}>אחר</a>
                            </div>
                        }
                    </div>
                    <div className="pure-u-1 footer-container">
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        );
    }
}

// <span className="pure-form-message">שדה חובה</span>
