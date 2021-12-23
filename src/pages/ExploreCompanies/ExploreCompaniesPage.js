import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
/* ========== import components ========= */
import PageMainTitle from './../../components/PageMainTitle/PageMainTitle';
import Footer from './../../components/Footer/Footer';
import CategorySection from './../../components/CategorySection/CategorySection';
import CompanyCard from './../../components/CompanyCard/CompanyCard';

/* =========== component style ========== */
import './ExploreCompaniesPage.css';
import './ExploreCompaniesPageResponsive.css';

/* ========== import constants ========= */
import {
    CONST_API_BASE_URL,
    CONST_API_BASE_PARAM,
    CONST_API_ACTION_PARAM,
    CONST_RESPONSE_SUCCESS,
    CONST_RESPONSE_FAIL,
    CONST_SITE_ID_LIST,
    CONST_UNIVERSITY_FULL_URL,
    CONST_UNIVERSITY_FULL_URL_AC,
    CONST_UNIVERSITY_BASE_URL
} from './../../constants';

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

/* ========= into system logo ========= */
import intoLogo from './../../images/logos/universities/into-logo-209x65.png';

const sites = {
    'tau'       : tauLogo,
    'bgu'       : bguLogo,
    'materials.technion': technionLogo,
    'haifa'     : haifaLogo,
    'openu'     : openuLogo,
    'biu'       : biuLogo,
    // testing
    'telhai'    : telHaiLogo,
    'ruppin'    : ruppinLogo,
    'jobsapir'  : sapirLogo,
    'ash'       : ashLogo,
    'mla'       : mlaLogo,
    'sce'       : sceLogo,
    'wgalil'    : wgalilLogo,
    'into'      : intoLogo
};

export default class ExploreCompaniesPage extends Component {
    constructor() {
        super();

        this.state = {
            isCategoriesReady: false,
            categories: []
        }
    }


    getCategories = () => {
        this.setState({ ...this.state, isCategoriesReady: false }, () => { console.log('preparing categories ...'); });
        let url = CONST_API_BASE_URL + '?' + CONST_API_BASE_PARAM + '&' + CONST_API_ACTION_PARAM + 'exploreCompanies';

        this.refs.categoriesContainerLoaderRef.classList.add('show-spinner');

        axios.get(url).then((response) => {
            this.refs.categoriesContainerLoaderRef.classList.remove('show-spinner');

            if (response.data.status == CONST_RESPONSE_SUCCESS) {
                let categories = response.data.data;
                this.setState({ ...this.state, categories });
                this.setState({ ...this.state, isCategoriesReady: true }, () => { console.log('categories ready!', this.state) });
            }
            else if (response.data.status == CONST_RESPONSE_FAIL) {
                //
            }
        }).catch((error) => {
            this.refs.categoriesContainerLoaderRef.classList.remove('show-spinner');
            console.log('error -> ', error);
        });
    }

    /**
     * Keeps your state in sync
     */
    handleStateChange = () => {

    }

    renderCompanyCards = (companies) => {
        let companyCards = [];

         return companies.map((company, key) => {
             return (
                 <CompanyCard
                    sponsorshipId={company.id}
                    companyId={company.companyData.id}
                    name={company.companyData.companyName}
                    logo={company.companyData.companyLogo}
                    cover={company.companyData.companyCover}
                    linkToCompany={company.companyData.viewLink}
                    key={key}>
                </CompanyCard>
             );
         })
    }

    /**
     * Creates array of CategorySections for rendering
     *
     * @param {Array} categories - array of categpries to render
     * @return {Array} list - list of html elements
     */
    renderCategorySections = (categories) => {
        let list = [];

        categories.map((category, key) => {
            console.log('category -> ', category);
            list.push(
                <CategorySection title={category.label} key={key}>
                     { this.renderCompanyCards(category.companies) }
                </CategorySection>
            );
        });


        return list;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getCategories();
    }

    render() {
        return (
            <div id="explore-companies-page-component">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <PageMainTitle titleType="explore_companies"></PageMainTitle>
                    </div>
                    <div className="pure-u-1">
                        {
                            this.state.isCategoriesReady !== true
                            ?
                            <div className="category-sections-loader" ref="categoriesContainerLoaderRef">
                                <Loader type="Oval" color="#2194d3" height="60" width="60" />
                            </div>
                            :
                            <div className="category-sections-container" ref="categoriesContainerRef">
                                { this.renderCategorySections(this.state.categories) }
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
