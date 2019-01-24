import React, { Component } from 'react';
import './Footer.css';
import academeLogoSmall from './../../images/logos/academe/academe-logo-only-30x30.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export default class Footer extends Component {
    render() {
        return (
            <div id="footer-component" className="container">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <div className="pure-u-1 social">
                            <div>
                                <FontAwesomeIcon icon="instagram" />
                            </div>
                            <div>
                                <FontAwesomeIcon icon="facebook" />
                            </div>
                        </div>
                        <div className="pure-u-1 footer-text"></div>
                    </div>
                </div>
            </div>
        );
    }
}
