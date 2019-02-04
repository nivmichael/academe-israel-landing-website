import React, { Component } from 'react';
import axios from 'axios';
import LaddaButton, { XS, EXPAND_LEFT } from 'react-ladda';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageMainTitle from '../../components/PageMainTitle/PageMainTitle';
import Footer from './../../components/Footer/Footer';
// styles
import './ContactUsPage.css';
import './ContactUsPageResponsive.css';

import {
    CONST_API_BASE_URL,
    CONST_API_BASE_PARAM,
    CONST_API_ACTION_PARAM,
    CONST_RESPONSE_SUCCESS,
    CONST_RESPONSE_FAIL
} from './../../constants';


export default class ContactUsPage extends Component {
    constructor () {
        super();

        this.state = {
            contactMessage: {
                fromEmail: '',
                subject: '',
                message: ''
            }
        }
    }

    /**
     * Displays Notification bubble
     * @param {String} type - SUCCESS/FAIL
     */
    notify = (type) => {
        console.log(`display ${type} notification!`);
        if (type == CONST_RESPONSE_SUCCESS) {
            toast.success("טופס פנייה נשלח בהצלחה", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (type == CONST_RESPONSE_FAIL) {
            toast.error("שליחת טופס פנייה נכשל", { position: toast.POSITION.BOTTOM_CENTER });
        }
    }

    /**
     * Stores the employer's email input value
     *
     * @param {Event} e - event
     */
    handleContactMessageFields = (e) => {
        e.preventDefault();
        let prop            = null;
        let value           = null;
        let contactMessage  = { ...this.state.contactMessage };     // get contactMessage object from state first

        if(e.target.id.indexOf([ 'subject', 'fromEmail', 'message' ])) { prop = e.target.id; }

        value = e.target.value;

        if(prop != null && value != null) {
            contactMessage[prop] = value;
            this.setState({ ...this.state, contactMessage }, () => { console.log(this.state); });
        }
    }

    /**
     * Service Method
     * Submits the given contact form to the server
     * @param {Event}  e - event
     */
    onSubmitForm = (e) => {
        e.preventDefault();

        if (this.state.contactMessage.subject != '' &&
            this.state.contactMessage.fromEmail != '' && this.state.contactMessage.message != '') {
                this.refs.contactFormButtonContainerRef.classList.add('show-spinner');

                let url     = CONST_API_BASE_URL + '?' + CONST_API_BASE_PARAM + '&' + CONST_API_ACTION_PARAM + 'employerContactForm';
                let params  = new URLSearchParams();

                params.append('Content-Type', 'application/x-www-form-urlencoded');
                params.append('contactSubject', this.state.contactMessage.subject);
                params.append('contactEmail', this.state.contactMessage.fromEmail);
                params.append('contactMessage', this.state.contactMessage.message);

                axios.post(url, params).then((response) => {
                    this.refs.contactFormButtonContainerRef.classList.remove('show-spinner');
                    if (response.data.status == CONST_RESPONSE_SUCCESS) {
                        this.notify(CONST_RESPONSE_SUCCESS);
                        console.log('onSubmitForm:response:response (success) -> ', response.data);
                    }
                }).catch((error) => {
                    this.refs.contactFormButtonContainerRef.classList.remove('show-spinner');
                    this.notify(CONST_RESPONSE_FAIL);
                    console.log('error -> ', error);
                });
        }
    }

    render() {
        return (
            <div id="contact-us-page-component">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <PageMainTitle titleType="contact_us"></PageMainTitle>
                    </div>
                    <div className="pure-u-1 pure-md-1-2 form-container">
                        <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-6">
                            <div className="title-container">
                                <div className="title">
                                    מלאו בבקשה
                                    <br />
                                    את טופס הפנייה
                                    <br />
                                    ונחזור אלכים בהקדם
                                </div>
                                <div className="divider"></div>
                            </div>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-6">
                            <form className="pure-form pure-form-stacked contact-form">
                                <fieldset>
                                    <input id="subject" type="text" placeholder="נושא הפנייה*" className="academe-input" onChange={ this.handleContactMessageFields } />

                                    <input id="fromEmail" type="email" placeholder="אימייל חזרה*" className="academe-input" onChange={ this.handleContactMessageFields } />

                                    <textarea id="message" placeholder="גוף הפנייה*" className="academe-input" rows="10" onChange={ this.handleContactMessageFields }></textarea>

                                    <div className="button-container" ref="contactFormButtonContainerRef">
                                        <button className="pure-button academe-button-full margin-md" onClick={ this.onSubmitForm }>שלח/י פנייה</button>
                                        <span id="contact-form-loading-spinner"><Loader type="Oval" color="#2194d3" height="30" width="30" /></span>
                                    </div>
                                    <ToastContainer autoClose={2500} rtl />
                                </fieldset>
                            </form>
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

// <span className="pure-form-message">שדה חובה</span>
