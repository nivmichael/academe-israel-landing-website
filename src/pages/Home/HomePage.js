import React, { Component } from 'react';
import axios from 'axios';

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
import tauLogo from './../../images/logos/universities/tel-aviv-uni-250x125.png';
import bguLogo from './../../images/logos/universities/ben-gurion-uni-250x87.png';
import haifaLogo from './../../images/logos/universities/haifa-uni-250x122.png';
import technionLogo from './../../images/logos/universities/technion-uni-250x87.png';
/* ========= colleges logos ========= */
import openuLogo from './../../images/logos/colleges/open-uni-200x75.png';
import telHaiLogo from './../../images/logos/colleges/tel-hai-uni-200x75.png';
import sceLogo from './../../images/logos/colleges/sce-uni-200x75.png';
import sapirLogo from './../../images/logos/colleges/sapir-uni-200x75.png';
import ashLogo from './../../images/logos/colleges/ashkelon-uni-200x75.png';
import mlaLogo from './../../images/logos/colleges/mla-uni-200x75.png';
import wgalilLogo from './../../images/logos/colleges/west-galil-uni-200x75.png';
import yvcLogo from './../../images/logos/colleges/emek-izrael-uni-200x75.png';

const universitiesList = {
    'tau'       : tauLogo,
    'bgu'       : bguLogo,
    'technion'  : technionLogo,
    'openu'     : openuLogo,
    'haifa'     : haifaLogo,

}

const collggesList = {
    'telHai'    : telHaiLogo,
    'sce'       : sceLogo,
    'sapir'     : sapirLogo,
    'ash'       : ashLogo,
    'mla'       : mlaLogo,
    'wgalil'    : wgalilLogo,
    'yvc'       : yvcLogo
}

const advantagesList = ['central_arena', 'grounded', 'market_and_share', 'expenses_and_time', 'everybody_there'];

export default class HomePage extends Component {
    constructor () {
        super();

        this.state = {
            isAdvantagesHidden: true,
            systemStats: {
                jobseekers: 0,
                companies: 0,
                jobs: 0
            }
        }
    }

    componentDidMount () {
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
                <div className="pure-g">
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
                        { this.renderUniversitiesList(collggesList) }
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
                    <div className="pure-u-1">
                        <div style={{ textAlign: 'center' }}>
                            <button className="pure-button academe-button-outline read-more-btn" onClick={ this.onToggleAdvantages }>
                                { this.state.isAdvantagesHidden ? 'קראו עוד' : 'סגור' }
                            </button>
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
