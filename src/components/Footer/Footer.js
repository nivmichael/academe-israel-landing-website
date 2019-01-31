import React, { Component } from 'react';
import './Footer.css';
import './FooterResponsive.css';

/* ======== icons ======== */
import mainAcademeLogo from  '../../images/logos/academe/academe-logo-only-30x30.png';
import facebookIcon from './../../images/icons/facebook-icon-70x70.png';
import instagramIcon from './../../images/icons/instagram-icon-70x70.png';

const footerStyle = {
  backgroundColor: "#4C4C4C",
  fontSize: "20px",
  color: "white",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

const footerText = 'רשת גיוס הסטודנטים והבוגרים המתקדמת והגדולה בישראל';

export default class Footer extends Component {

    /**
     * Redirects the user to the academe social page
     *
     * @param {String} icon - which social network icon the user has clicked
     */
    onSocialClicked = (icon) => {
        // console.log(`clicked on ${icon} icon`);
    }

    render() {
        return (
            <div id="footer-component">
                <div className="pure-g">
                    <div className="pure-u-1 container">
                        <div className="pure-u-1 pure-u-lg-1-6 social">
                            <div>
                                <img id="instagram" className="pure-img icon" src={ instagramIcon } onClick={ () => this.onSocialClicked('instagram') } />
                            </div>
                            <div>
                                <img id="facebook" className="pure-img icon" src={ facebookIcon } onClick={ () => this.onSocialClicked('facebook') } />
                            </div>
                        </div>
                        <div className="pure-u-1 footer-text">
                            <span className="text">{ footerText }</span>
                            <span className="logo-container">
                                <div className="title">AcadeME</div>
                                <img className="pure-img academe-logo" src={ mainAcademeLogo } alt="academe-logo"></img>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


// <div>
//     <FontAwesomeIcon icon={ ['fab', 'instagram'] } id="instagram" className="icon" onClick={ () => this.onSocialClicked('instagram') } />
// </div>
// <div>
//     <FontAwesomeIcon icon={ ['fab', 'facebook'] } id="facebook" className="icon" onClick={ () => this.onSocialClicked('facebook') } />
// </div>
