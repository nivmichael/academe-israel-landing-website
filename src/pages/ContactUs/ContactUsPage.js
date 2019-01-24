import React, { Component } from 'react';
import LaddaButton, { XS, EXPAND_LEFT } from 'react-ladda'
import PageMainTitle from '../../components/PageMainTitle/PageMainTitle';
// styles
import './ContactUsPage.css';


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
     * @param {Event} e - event
     */
    handleContactMessageFields = (e) => {
        e.preventDefault();
        let prop            = null;
        let value           = null;
        let contactMessage  = { ...this.state.contactMessage };

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
                    <div className="pure-u-1">
                        <div className="title-container">
                            <div className="title">
                                מלאו בבקשה
                                <br />
                                את טפס הפנייה
                                <br />
                                ונחזור אלכים בהקדם
                            </div>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="pure-u-1">
                        <form className="pure-form pure-form-stacked contact-form">
                            <fieldset>
                                <input id="subject" placeholder="נושא הפנייה*" onChange={ this.handleContactMessageFields } />

                                <input id="fromEmail" type="email" placeholder="אימייל חזרה*" onChange={ this.handleContactMessageFields } />

                                <textarea id="message" placeholder="גוף הפנייה*" onChange={ this.handleContactMessageFields }></textarea>

                                <button type="submit" className="pure-button pure-button-primary">שלח/י פנייה</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// <span className="pure-form-message">שדה חובה</span>
