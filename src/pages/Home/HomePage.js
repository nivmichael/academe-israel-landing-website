import React, { Component } from 'react';
import './HomePage.css';

/* ============= components ============= */
import MainIntro from './../../components/MainIntro/MainIntro';
import StatsBar from './../../components/StatsBar/StatsBar';
import SingleAdvantageBox from './../../components/SingleAdvantageBox/SingleAdvantageBox';

/* ========= universities logos ========= */
import tauLogo from './../../images/logos/universities/tel-aviv-uni-200x75.png';
import bguLogo from './../../images/logos/universities/ben-gurion-uni-220x83.png';
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
}

const advantagesList = ['central_arena', 'grounded', 'market_and_share', 'expenses_and_time', 'everybody_there'];


export default class HomePage extends Component {

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
                    <img className="pure-img" src={uni_list[uni_key]} alt={uni_key}></img>
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
                        <StatsBar></StatsBar>
                    </div>
                    <div className="pure-u-1">
                        <div className="universities-container">
                            { this.renderUniversitiesList(universitiesList) }
                        </div>
                    </div>
                    <div className="pure-u-1">
                        <div className="welcome-msg-container">
                            <div className="welcome-msg">
                                <span>ברוכים הבאים ל- <span>AcadeME</span></span>
                            </div>
                            <div>
                                <button className="pure-button read-more-btn">קראו עוד</button>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1">
                        <div className="advantages-list-container">
                            { this.renderAdvantagesList(advantagesList) }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
