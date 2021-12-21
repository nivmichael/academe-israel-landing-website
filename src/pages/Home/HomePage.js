import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import {
    CONST_API_BASE_URL,
    CONST_DEV_API_BASE_URL,
    CONST_API_BASE_PARAM,
    CONST_API_ACTION_PARAM
} from './../../constants';

import Footer from './../../components/Footer/Footer';
import './HomePage.css';
import './HomePageResponsive.css';

/* ============= components ============= */
import MainIntro from './../../components/MainIntro/MainIntro';
import StatsBar from './../../components/StatsBar/StatsBar';
import SingleAdvantageBox from './../../components/SingleAdvantageBox/SingleAdvantageBox';

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
import ruppinLogo from './../../images/logos/colleges/ruppin-uni-200x75.png';

/* ========= sliding rects ========= */
import slidingEmployers from './../../images/icons/sliding-employers.png';
import slidingStudents from './../../images/icons/sliding-students.png';

const universitiesList = {
    'tau'       : tauLogo,
    'bgu'       : bguLogo,
    'technion'  : technionLogo,
    'openu'     : openuLogo,
    'haifa'     : haifaLogo,
    'biu'       : biuLogo
}

const collegesList = {
    'telHai'    : telHaiLogo,
    'sce'       : sceLogo,
    'sapir'     : sapirLogo,
    'ash'       : ashLogo,
    'mla'       : mlaLogo,
    'wgalil'    : wgalilLogo,
    'ruppin'    : ruppinLogo
}

const advantagesList = ['central_arena', 'grounded', 'market_and_share', 'expenses_and_time', 'everybody_there', 'beyond_cv'];

export default class HomePage extends Component {
    constructor () {
        super();

        this.state = {
            isAdvantagesHidden: true,
            systemStats: {
                jobseekers: 200000,
                companies: 14982,
                jobs: 1825
            }
        }
    }

    componentDidMount () {
        document.addEventListener('scroll', this.onTrackScrolling);

        this.CancelToken = axios.CancelToken;
        this.source = this.CancelToken.source();

        let url     = CONST_API_BASE_URL + '?' + CONST_API_BASE_PARAM + '&' + CONST_API_ACTION_PARAM + 'getSystemStats';

        axios.get(url, { cancelToken: this.source.token })
            .then((response) => {
                if (axios.isCancel(response)) {
                    console.log('Request canceled', response);
                }
                else if (response.data) {
                    let systemStats = { ...response.data };
                    this.setState({ ...this.state, systemStats });
                }
            })
            .catch((error) => {
                console.log('error -> ', error);
            });
    }

    componentWillUnmount () {
        document.removeEventListener('scroll', this.onTrackScrolling);

        this.source.cancel('Unmounted');
    }

    /**
     * Toggles the 'advantages' container
     */
    onToggleAdvantages = () => {
        // get isAdvantagesHidden object from state first
        let isAdvantagesHidden  = this.state.isAdvantagesHidden;
        // flip flag
        isAdvantagesHidden = !isAdvantagesHidden;
        this.setState({ ...this.state, isAdvantagesHidden }, () => console.log(this.state));
    }

    /**
     * Checks if the scrolling action reached a certain point in the DOM
     *
     * @param {Element|null} el - wrappedElement
     * @return {Boolean} - did the scroll reached bottom of the element
     */
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    /**
     * Tracks the scrolling action and reacting accordingly
     */
    onTrackScrolling = () => {
        // const wrappedElement = document.getElementById('read-more-btn-container');
        const wrappedElement = document.querySelector('#slide-in-container .title');

        if (this.isBottom(wrappedElement)) {
            this.onScrollingEnableSlideIn();
            document.removeEventListener('scroll', this.onTrackScrolling);
        }
    };

    onScrollingEnableSlideIn = () => {
        if(this.refs.studentsSliderRef && this.refs.employersSliderRef) {
            this.refs.studentsSliderRef.classList.remove('not-visible');
            this.refs.studentsSliderRef.classList.add('slide-in-right');
            this.refs.employersSliderRef.classList.remove('not-visible');
            this.refs.employersSliderRef.classList.add('slide-in-left');
        }
    }

    /**
     * Creates array of elements to render, which contain images of universities
     *
     * @param {Object} uni_list - list of universities and their logos
     * @return {Array} list - list of html elements, contains the universities logos
     */
    renderUniversitiesList = (uni_list) => {
        let list = [];

        Object.keys(uni_list).map((uni_key) => {
            list.push(
                <div className="single-university-container" key={uni_key}>
                    <img className="uni-img" src={uni_list[uni_key]} alt={uni_key}></img>
                </div>
            );
        });

        return list;
    }

    /**
     * Creates array of SingleAdvantageBox'es
     *
     * @param {Array} advantages_list - array of advantages to render
     * @return {Array} list - list of html elements, contains the SingleAdvantageBox for each element
     */
    renderAdvantagesList = (advantages_list) => {
        let list = [];

        advantages_list.map((advantage, key) => {
            list.push(<SingleAdvantageBox advantage={advantage} key={key}></SingleAdvantageBox>);
        });

        return list;
    }

    render() {
        return (
            <div id="homepage-component">
                <div id="main-section-home" className="pure-g">
                    <div className="pure-u-1">
                        <MainIntro></MainIntro>
                        <StatsBar systemStats={ this.state.systemStats }></StatsBar>
                    </div>
                    <div className="pure-u-1">
                        <div className="universities-container">
                            { this.renderUniversitiesList(universitiesList) }
                        </div>
                    </div>
                    <div className="pure-u-1">
                        <div className="collages-container">
                        { this.renderUniversitiesList(collegesList) }
                        </div>
                    </div>
                    <div className="pure-u-1">
                        <div className="welcome-msg-container">
                            <div className="welcome-msg">
                                <span>ברוכים הבאים ל- <span>AcadeME</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1">
                        <div className={ 'advantages-list-container' + (this.state.isAdvantagesHidden ? ' hidden' : '') }>
                            { this.renderAdvantagesList(advantagesList) }
                        </div>
                    </div>
                    <div id="read-more-btn-container" className="pure-u-1">
                        <div style={{ textAlign: 'center' }}>
                            <button className="pure-button academe-button-outline read-more-btn" onClick={ this.onToggleAdvantages }>
                                { this.state.isAdvantagesHidden ? 'קראו עוד' : 'סגור' }
                            </button>
                        </div>
                    </div>
                    <div id="slide-in-container" className="pure-u-1">
                        <div className="title">AcadeME - זירת שיתוף וקידום המשרות בין המוסדות האקדמיים המובילים בישראל</div>
                        <div className="sliding-rect-container">
                            <div id="students" className="not-visible sliding-rect-container-inner" ref="studentsSliderRef">
                                <div className="sliding-rect-container-inner-icon-students">
                                    <NavLink to="/students" className="no-text">
                                        <img className="sliding-rect-container-inner-icon" src={ slidingStudents } />
                                        <div>סטודנטים / בוגרים</div>
                                    </NavLink>
                                </div>
                            </div>
                            <div id="employers" className="not-visible sliding-rect-container-inner" ref="employersSliderRef">
                                <div className="sliding-rect-container-inner-icon-employers">
                                    <NavLink to="/employers" className="no-text">
                                        <img className="sliding-rect-container-inner-icon" src={ slidingEmployers } />
                                        <div>מעסיקים</div>
                                    </NavLink>
                                </div>
                            </div>
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


// <div id="students" className="pure-u-1 pure-u-md-1-2 not-visible" ref="studentsSliderRef"></div>
// <div id="employers" className="pure-u-1 pure-u-md-1-2 not-visible" ref="employersSliderRef"></div>
