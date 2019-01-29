import React, { Component } from 'react';
import PageMainTitle from '../../components/PageMainTitle/PageMainTitle';
import Footer from './../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CONST_UNIVERSITY_BASE_URL } from './../../constants';

/* =========== component style ========== */
import './StudentsPage.css';
import './StudentsPageResponsive.css';

/* ========= universities logos ========= */
import tauLogo from './../../images/logos/universities/tel-aviv-uni-200x75.png';
import bguLogo from './../../images/logos/universities/ben-gurion-uni-200x75.png';
import technionLogo from './../../images/logos/universities/technion-uni-200x75.png';
import openuLogo from './../../images/logos/universities/open-uni-200x75.png';
import haifaLogo from './../../images/logos/universities/haifa-uni-200x75.png';
import telHaiLogo from './../../images/logos/universities/tel-hai-uni-200x75.png';
import sceLogo from './../../images/logos/universities/sce-uni-200x75.png';
import sapirLogo from './../../images/logos/universities/sapir-uni-200x75.png';
import ashLogo from './../../images/logos/universities/ashkelon-uni-200x75.png';
import mlaLogo from './../../images/logos/universities/mla-uni-200x75.png';
import wgalilLogo from './../../images/logos/universities/west-galil-uni-200x75.png';
import yvcLogo from './../../images/logos/universities/emek-izrael-uni-200x75.png';

const universitiesList = {
    'tau'       : tauLogo,
    'bgu'       : bguLogo,
    'technion'  : technionLogo,
    'openu'     : openuLogo,
    'haifa'     : haifaLogo,
    'telHai'    : telHaiLogo,
    'sce'       : sceLogo,
    'sapir'     : sapirLogo,
    'ash'       : ashLogo,
    'mla'       : mlaLogo,
    'wgalil'    : wgalilLogo,
    'yvc'       : yvcLogo
};

export default class StudentsPage extends Component {

    /**
     * Redirects the user to the desired university login page
     * @param {Event} e
     */
    onUniversityClicked = (e) => {
        e.preventDefault();
        let university = e.target.alt;
    }

    /**
     * Renders the list of universities images wrapped in div element
     * @param {Object} universities_list - list of names and logos
     * @returns {Array} list - list of elements
     */
    renserUniversitiesList = (universities_list) => {
        let list = [];

        list = Object.keys(universities_list).map((uni_key) => {
            return (
                <div key={uni_key} onClick={ this.onUniversityClicked }>
                    <img className="pure-img uni-icon" src={universities_list[uni_key]} alt={uni_key}></img>
                </div>
            )
        });

        return list;
    }

    render() {
        return (
            <div id="students-page-component">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <PageMainTitle titleType="students"></PageMainTitle>
                    </div>
                    <div className="pure-u-1 students-container">
                        <div className="pure-u-1">
                            <div className="sub-title">
                                <div>עוד לא נרשמתם?</div>
                                <div>מאיזו אוניברסיטה או מכללה אתם?</div>
                                <div id="chevron"><FontAwesomeIcon icon="chevron-down"></FontAwesomeIcon></div>
                            </div>
                        </div>
                        <div className="pure-u-1">
                            <div className="universities-container">
                                { this.renserUniversitiesList(universitiesList) }
                            </div>
                        </div>
                        <div className="pure-u-1 other-button-container">
                            <button className="pure-button academe-button-outline">אחר</button>
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
