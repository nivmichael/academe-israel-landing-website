import React, { Component } from 'react';
import './Footer.css';
import academeLogoSmall from './../../images/logos/academe/academe-logo-only-30x30.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mainAcademeLogo from  '../../images/logos/academe/academe-logo-only-30x30.png';


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

const footerText = 'רשת גיוס הסטודנטים והבוגרים הגדולה בישראל';

export default class Footer extends Component {

    onSocialClicked = (icon) => {
        console.log(`clicked on ${icon} icon`);
    }

    render() {
        return (
            <div id="footer-component" className="container">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <div className="pure-u-1 social">
                            <div>
                                <FontAwesomeIcon icon={ ['fab', 'instagram'] } id="instagram" className="icon" onClick={ () => this.onSocialClicked('instagram') } />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={ ['fab', 'facebook'] } id="facebook" className="icon" onClick={ () => this.onSocialClicked('facebook') } />
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
