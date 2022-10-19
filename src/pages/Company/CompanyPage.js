import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {
    CONST_DEV_API_COMPANY_PAGE_URL,
    CONST_API_COMPANY_PAGE_PARAM,
    CONST_API_ACTION_PARAM,
    CONST_UNIVERSITY_BASE_URL,
    CONST_RESPONSE_SUCCESS,
    CONST_RESPONSE_FAIL
} from "../../constants";
import Footer from "../../components/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import './CompanyPage.css';
import './CompanyPageResponsive.css';
import CompanySectionCardBase from "../../components/CompanySectionCards/CompanySectionCardBase/CompanySectionCardBase";
import JobCard from "../../components/JobCard/JobCard";
import AboutUsCard from "../../components/CompanySectionCards/AboutUsCard/AboutUsCard";
import BenefitsCard from "../../components/CompanySectionCards/BenefitsCard/BenefitsCard";
import AchievementsCard from "../../components/CompanySectionCards/AchievementsCard/AchievementsCard";

export default class CompanyPage extends Component {
    cancelToken;
    source;

    cardLabels = {
        'about': 'אודות/מי אנחנו',
        'achievements': 'השגים',
        'youtube': 'סרטונים',
        'testimonials': 'עובדים מספרים',
        'benefits': 'הטבות',
        'facts': 'עובדות מעניינות',
        'gallery': 'גלריית תמונות'
    }

    constructor() {
        super();

        this.state = {
            isLoading: true,
            company: {}
        }
    }

    /**
     * Displays Notification bubble
     * @param {String} type - SUCCESS/FAIL
     * @param {String} msg - notification message
     */
    notify = (type, msg) => {
        console.log(type, msg);
        if (type == CONST_RESPONSE_SUCCESS) {
            toast.success(msg, { position: toast.POSITION.BOTTOM_CENTER });
        }
        else if (type == CONST_RESPONSE_FAIL) {
            toast.error(msg, { position: toast.POSITION.BOTTOM_CENTER });
        }
    }

    componentDidMount () {
        window.scrollTo(0, 0);

        this.cancelToken = axios.CancelToken;
        this.source = this.cancelToken.source();
        let id = this.props.match.params.id;

        if (!id) {
            this.onLoadingStop();
            console.log('Error: No ID was given.', id);
            return false;
        }

        let url = CONST_DEV_API_COMPANY_PAGE_URL + '?' + CONST_API_COMPANY_PAGE_PARAM + '&' + CONST_API_ACTION_PARAM + 'testapi&sid=' + id;

        axios.get(url, { cancelToken: this.source.token })
            .then((response) => {
                if (axios.isCancel(response)) {
                    this.notify(CONST_RESPONSE_FAIL, 'שאילתה בוטלה.');
                }
                else if (response.data.status == CONST_RESPONSE_SUCCESS) {
                    let company = { ...response.data.company };
                    this.setState({ ...this.state, company });    
                    console.log('State.company: \n\r', this.state.company);
                } else if (response.data.status == CONST_RESPONSE_FAIL) {
                    this.notify(response.data.status, response.data.message_he);
                }
                
                this.onLoadingStop();
            })
            .catch((error) => {
                console.log('error -> ', error);
                this.onLoadingStop();
                this.notify(CONST_RESPONSE_FAIL, 'שגיאה בהעברת נתונים.');
            });
    }

    /**
     * Stop loading animation
     */
    onLoadingStop () {
        let isLoading = false;
        this.setState({ ...this.state, isLoading });
    }

    populateWireframe () {
        console.log('company: \n\r', this.state.company);
        return false;
    }

    render() {
        return (
            <div id="company-page-component">
                <ToastContainer autoClose={2500} rtl />
                <div className="pure-g">
                    <div className="pure-u-1">
                        {
                            this.state.isLoading === true
                                &&
                                <div className="company-page-loader" ref="mainContainerLoaderRef">
                                    <Loader type="Oval" color="#2194d3" height="60" width="60"/>
                                </div>
                        }
                        {
                            ( this.state.isLoading === false && !this.state.company.id )
                            &&
                            <div className="company-page-loader" ref="mainContainerLoaderRef">
                                <div><h3>חברה לא נמצאה.</h3></div>
                            </div>
                        }
                        {
                            ( this.state.isLoading === false && this.state.company.id )
                            &&
                            <div className="company-page-main-container" ref="mainContainerRef">
                                <div className="pure-u-1 section">
                                    <img className="pure-img" src={CONST_UNIVERSITY_BASE_URL + this.state.company.sections.files.cover} alt="company-cover" />
                                </div>
                                <div className="pure-u-1 section details">
                                    <div className="pure-u-1-5"></div>
                                    <div className="pure-u-1-5">
                                        <div className="company-logo-container">
                                            <img className="pure-img" src={CONST_UNIVERSITY_BASE_URL + this.state.company.sections.files.logo} alt="company-logo" />
                                        </div>
                                    </div>
                                    <div className="pure-u-1-5">
                                        <div>{ this.state.company.companyName }</div>
                                        <div>{ this.state.company.companyIndustry }</div>
                                    </div>
                                    <div className="pure-u-1-5 company-social-links-container">
                                        <img className="pure-img" name="twitter" src={CONST_UNIVERSITY_BASE_URL + 'dev.academe.wanted.co.il/images/icons/social-media/twitter_outline_light.png'} alt="company-social" />
                                        <img className="pure-img" name="youtube" src={CONST_UNIVERSITY_BASE_URL + 'dev.academe.wanted.co.il/images/icons/social-media/youtube_outline_light.png'} alt="company-social" />
                                        <img className="pure-img" name="instagram" src={CONST_UNIVERSITY_BASE_URL + 'dev.academe.wanted.co.il/images/icons/social-media/instagram_outline_light.png'} alt="company-social" />
                                        <img className="pure-img" name="linkedin" src={CONST_UNIVERSITY_BASE_URL + 'dev.academe.wanted.co.il/images/icons/social-media/linkedin_outline_light.png'} alt="company-social" />
                                        <img className="pure-img" name="facebook" src={CONST_UNIVERSITY_BASE_URL + 'dev.academe.wanted.co.il/images/icons/social-media/facebook_outline_light.png'} alt="company-social" />
                                    </div>
                                    <div className="pure-u-1-5"></div>
                                </div>
                                <div className="pure-u-1 section headline">
                                    { this.state.company.companyHeadline }
                                </div>
                                <div className="pure-u-1 section career">
                                    {
                                        this.state.company.jobs.map((job) => {
                                            return <JobCard data={ job }
                                                            companyLogo={ this.state.company.sections.files.logo }
                                                            companyName={ this.state.company.companyName }
                                                            key={ job.jobId } />
                                        })
                                    }
                                </div>
                                <div className="pure-u-1 section cards">
                                    <AboutUsCard description={ this.state.company.companyDescription }
                                                 presentation={this.state.company.sections.files.presentation} />

                                    <AchievementsCard achievements={this.state.company.sections.achievements} />

                                    <CompanySectionCardBase id="youtube" isFullRow={true} title={this.cardLabels.youtube}>
                                        <div></div>
                                    </CompanySectionCardBase>
                                    <CompanySectionCardBase id="testimonials" title={this.cardLabels.testimonials}>
                                        <div></div>
                                    </CompanySectionCardBase>

                                    <BenefitsCard benefits={this.state.company.sections.benefits} />

                                    <CompanySectionCardBase id="facts" title={this.cardLabels.facts}>
                                        <div></div>
                                    </CompanySectionCardBase>
                                    <CompanySectionCardBase id="gallery" title={this.cardLabels.gallery}>
                                        <div></div>
                                    </CompanySectionCardBase>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="pure-u-1 footer-container">
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        );
    }
}
