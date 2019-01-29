import React, { Component } from 'react';
import LaddaButton, { XS, EXPAND_LEFT } from 'react-ladda'
import PageMainTitle from '../../components/PageMainTitle/PageMainTitle';
import Footer from './../../components/Footer/Footer';
// styles
import './ContactUsPage.css';
import './ContactUsPageResponsive.css';


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
                                    <input id="subject" placeholder="נושא הפנייה*" onChange={ this.handleContactMessageFields } />

                                    <input id="fromEmail" type="email" placeholder="אימייל חזרה*" onChange={ this.handleContactMessageFields } />

                                    <textarea id="message" placeholder="גוף הפנייה*" rows="10" onChange={ this.handleContactMessageFields }></textarea>

                                    <button type="submit" className="pure-button academe-button-full margin-md">שלח/י פנייה</button>
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
