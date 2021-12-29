import React, { Component } from 'react';
import './Footer.css';
import './FooterResponsive.css';

/* ======== icons ======== */
// import mainAcademeLogo from  '../../images/logos/academe/academe-logo-only-30x30.png';
import mainAcademeLogoWhite from  '../../images/logos/academe/academe-logo-horizontal-white-153x34.png';
import facebookIcon from './../../images/icons/facebook-icon-70x70.png';
import instagramIcon from './../../images/icons/instagram-icon-70x70.png';

const footerText = 'רשת גיוס הסטודנטים והבוגרים המתקדמת והגדולה בישראל';

export default class Footer extends Component {

    /**
     * Redirects the user to the academe social page
     *
     * @param {String} icon - which social network icon the user has clicked
     */
    onSocialClicked = (icon) => {
        let url = false;

        if (icon === 'facebook') { url = 'https://www.facebook.com/joinacademe/'; }
        else if (icon === 'instagram') { url = 'https://www.instagram.com/academe_wanted/'; }

        if (url !== false) { window.open(url, "_blank"); }
    }

    render() {
        return (
            <div id="footer-component">
                <div className="pure-g">
                    <div className="pure-u-1 container">
                        <div className="pure-u-1 pure-u-lg-1-6 social">
                            <div>
                                <img id="instagram" className="pure-img icon" src={ instagramIcon } onClick={ () => this.onSocialClicked('instagram') } alt="social-instagram" />
                            </div>
                            <div>
                                <img id="facebook" className="pure-img icon" src={ facebookIcon } onClick={ () => this.onSocialClicked('facebook') } alt="social-facebook" />
                            </div>
                        </div>
                        <div className="pure-u-1 footer-text">
                            <span className="text">{ footerText }</span>
                            <span className="logo-container">
                                <img className="pure-img academe-logo" src={ mainAcademeLogoWhite } alt="academe-logo"></img>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// <span className="logo-container">
//     <div className="title">AcadeME</div>
//     <img className="pure-img academe-logo" src={ mainAcademeLogo } alt="academe-logo"></img>
// </span>
