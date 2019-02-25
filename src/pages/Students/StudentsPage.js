import React, { Component } from 'react';
import Slider from "react-slick";
import PageMainTitle from '../../components/PageMainTitle/PageMainTitle';
import Footer from './../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CONST_UNIVERSITY_BASE_URL, CONST_UNIVERSITY_FULL_URL } from './../../constants';

/* =========== component style ========== */
import './StudentsPage.css';
import './StudentsPageResponsive.css';
/* ========= slick-slider style ========= */
import './../../../node_modules/slick-carousel/slick/slick.css';
import './../../../node_modules/slick-carousel/slick/slick-theme.css';

/* ========= universities logos ========= */
import tauLogo from './../../images/logos/universities/tel-aviv-uni-200x75.png';
import bguLogo from './../../images/logos/universities/ben-gurion-uni-200x75.png';
import haifaLogo from './../../images/logos/universities/haifa-uni-200x75.png';
import technionLogo from './../../images/logos/universities/technion-uni-200x75.png';
import openuLogo from './../../images/logos/colleges/open-uni-200x75.png';

/* ========= colleges logos ========= */
import telHaiLogo from './../../images/logos/colleges/tel-hai-uni-200x75.png';
import sceLogo from './../../images/logos/colleges/sce-uni-200x75.png';
import sapirLogo from './../../images/logos/colleges/sapir-uni-200x75.png';
import ashLogo from './../../images/logos/colleges/ashkelon-uni-200x75.png';
import mlaLogo from './../../images/logos/colleges/mla-uni-200x75.png';
import wgalilLogo from './../../images/logos/colleges/west-galil-uni-200x75.png';
import yvcLogo from './../../images/logos/colleges/emek-izrael-uni-200x75.png';

/* ========= icons ========= */
import chevronDownIcon from '../../images/icons/chevron-down-icon-130x68.png';
import chevronRightIcon from '../../images/icons/chevron-right-icon-blue-75x136.png';
import chevronLeftIcon from '../../images/icons/chevron-left-icon-blue-75x136.png'

const universitiesList = {
    'tau'       : tauLogo,
    'bgu'       : bguLogo,
    'materials.technion': technionLogo,
    'haifa'     : haifaLogo,
    'openu'     : openuLogo,
    // testing
    'telhai'    : telHaiLogo,
    'yvc'       : yvcLogo,
    'sapir'     : sapirLogo,
    'ash'       : ashLogo,
    'mla'       : mlaLogo,
    'sce'       : sceLogo,
    'wgalil'    : wgalilLogo
};

// const collegesList = {
//     'telhai'    : telHaiLogo,
//     'yvc'       : yvcLogo,
//     'sapir'     : sapirLogo,
//     'ash'       : ashLogo,
//     'mla'       : mlaLogo,
//     'sce'       : sceLogo,
//     'wgalil'    : wgalilLogo
// };

const slickSliderOptions = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 9,
    rtl: true,
    nextArrow: <AcademeCustomNextArrow imageSrc={ chevronRightIcon } />,
    prevArrow: <AcademeCustomPrevArrow imageSrc={ chevronLeftIcon } />,
    responsive: [
        {
            breakpoint: 320,
            settings: {
                dots: false,
                infinite: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                touchMove: true,
                rtl: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 3,
                touchMove: true,
                rtl: true
            }
        },
        {
            breakpoint: 1025,
            settings: {
                dots: true,
                arrows: true,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 5,
                initialSlide: 3,
                touchMove: true,
                rtl: true
            }
        }
    ]

}

export default class StudentsPage extends Component {

    /**
     * Redirects the user to the desired university login page
     * Opens in new tab
     * @param {Event} e
     */
    onUniversityClicked = (e) => {
        e.preventDefault();
        let university = e.target.id;
        let url        = false;

        if (university && university != '') {
            if (university == 'haifa') {
                url = CONST_UNIVERSITY_BASE_URL + 'haifa.acade-me.co.il';
            }
            else if (university == 'into') {
                url = CONST_UNIVERSITY_BASE_URL + 'into.acade-me.co.il';
            }
            else {
                url = CONST_UNIVERSITY_FULL_URL;
                url = url.replace('${site_name}', university);
            }
        }

        // redirect to composed url
        if (url !== false) { window.open(url, "_blank"); }
    }

    /**
     * Renders the list of universities images wrapped in div element
     * @param {Object} universities_list - list of names and logos
     * @returns {Array} list - list of elements
     */
    renderUniversitiesList = (universities_list) => {
        let list = [];

        list = Object.keys(universities_list).map((uni_key) => {
            return (
                <div className="icon-container" key={uni_key} onClick={ this.onUniversityClicked }>
                    <img id={uni_key} className="pure-img uni-icon" src={universities_list[uni_key]} alt={uni_key}></img>
                </div>
            )
        });

        return list;
    }

    /**
     * Renders the list of universities images wrapped in div element
     * @param {Object} universities_list - list of names and logos
     * @returns {Array} list - list of elements
     */
    renderCollegesList = (colleges_list) => {
        let list = [];

        list = Object.keys(colleges_list).map((clg_key) => {
            return (
                <div className="icon-container" key={clg_key} onClick={ this.onUniversityClicked }>
                    <img className="pure-img uni-icon" src={colleges_list[clg_key]} alt={clg_key}></img>
                </div>
            )
        });

        // added 'alt' attribute to the button for consistant logic both for images and this button
        // list.push(<button id="into" className="pure-button academe-button-outline shadowless" key="into" onClick={ this.onUniversityClicked }>אחר</button>);

        return list;
    }
    componentDidMount() {
        window.scrollTo(0, 0);
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
                                <div>עוד לא נרשמתם ל- AcadeME?</div>
                                <div>מאיזו אוניברסיטה או מכללה אתם?</div>
                                <div id="chevron">
                                    <img className="pure-img" src={ chevronDownIcon } alt="chevron-down-icon"></img>
                                </div>
                            </div>
                        </div>
                        <div className="pure-u-1 pure-u-md-1 pure-u-lg-1">
                            <div className="universities-container">
                                <Slider {...slickSliderOptions} ref="universitiesSliderRef">
                                    { this.renderUniversitiesList(universitiesList) }
                                </Slider>
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

function AcademeCustomNextArrow(props) {
    const { className, style, imageSrc, onClick } = props;
    return (
        <img src={imageSrc}
            className={className + ' academe-custom-slider-arrow right'}
            style={{ ...style, display: "block" }}
            onClick={onClick}>
        </img>
    );
}

function AcademeCustomPrevArrow(props) {
    const { className, style, imageSrc, onClick } = props;
    return (
        <img src={imageSrc}
            className={className + ' academe-custom-slider-arrow left'}
            style={{ ...style, display: "block" }}
            onClick={onClick}>
        </img>
    );
}

// <div>עוד לא נרשמתם לAcadeME?</div>
//
// <div className="universities-container">
//     { this.renderUniversitiesList(universitiesList) }
// </div>
// <div className="colleges-container">
//     { this.renderCollegesList(collegesList) }
// </div>
