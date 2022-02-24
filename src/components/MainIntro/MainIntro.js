import React, { Component } from 'react';
import './MainIntro.css';
import './MainIntroResponsive.css';

import mainAcademeLogoBig from './../../images/logos/academe/academe-logo-150x192.png';


export default class MainIntro extends Component {
    render () {
        return (
            <div id="main-intro-component">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <div className="message-container">
                            <div className="academe-logo-container">
                                <img className="pure-img" src={mainAcademeLogoBig} alt="academe-logo"></img>
                            </div>
                            <div className="message">
                                רשת גיוס האקדמאים
                                <br />
                                והסטודנטים של ישראל
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
