import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
/* ========== import components ========= */
import PageMainTitle from './../../components/PageMainTitle/PageMainTitle';
import Footer from './../../components/Footer/Footer';
import CategorySection from './../../components/CategorySection/CategorySection';
import CompanyCard from './../../components/CompanyCard/CompanyCard';
import SitesModal from './../../components/SitesModal/SitesModal';
import { formatExploreCompanyUrlUtil }  from './../../utils';

/* =========== component style ========== */
import './ExploreCompaniesPage.css';
import './ExploreCompaniesPageResponsive.css';

/* ========== import constants ========= */
import {
    CONST_API_BASE_URL,
    CONST_API_BASE_PARAM,
    CONST_API_ACTION_PARAM,
    CONST_RESPONSE_SUCCESS
} from './../../constants';


/**
* ExploreCompaniesPage
* State:
*   isCategoriesReady - state of ajax call
*   isModalOpen - state of sites modal
*   onEnterModalOpen - determines if the sites modal will open as soon as the page loads
*       or after a click on CompanyCard
*   selectedSite - stores selected site name [ONLY] when `onEnterModalOpen` is TRUE
*   selectedCompanyCard - stores selected company data
*   categories - stores categories
*   sites - stores sites
*
* @extends Component
*/
export default class ExploreCompaniesPage extends Component {
    constructor() {
        super();

        this.state = {
            isCategoriesReady: false,
            isModalOpen: false,
            onEnterModalOpen: false,
            selectedSite: null,
            selectedCompanyCard: {
                sponsorshipId: null,
                companyId: null
            },
            categories: [],
            sites: []
        }
    }

    /**
     * Service - Get Sites
     *
     * @return {Promise|Array} sites
     */
    getSitesPromise = () => {
        return axios.get(CONST_API_BASE_URL + '?' + CONST_API_BASE_PARAM + '&' + CONST_API_ACTION_PARAM + 'getSites')
            .then((response) => {
                if (response.data.status == CONST_RESPONSE_SUCCESS) {
                    let sites = response.data.data;
                    return sites;
                }
            }).catch((error) => {
                return [];
            });
    }


   /**
    * Service - Get Categories
    *
    * @return {Promise|Array} categories
    */
    getCategoriesPromise = () => {
        return axios.get(CONST_API_BASE_URL + '?' + CONST_API_BASE_PARAM + '&' + CONST_API_ACTION_PARAM + 'exploreCompanies')
            .then((response) => {
                if (response.data.status == CONST_RESPONSE_SUCCESS) {
                    let categories = response.data.data;
                    return categories;
                }
            }).catch((error) => {
                return [];
            });
    }


    /**
     * Handle Response Data of Sites And Categories
     *
     * @param {Array} sites
     * @param {Array} categories
     */
    handleDataUpdated = (sites, categories) => {
        if (typeof sites !== 'undefined') {
            sites.sort((a, b) => { a.label.localeCompare(b.label, 'he') });
            this.setState({ ...this.state, sites });
        }

        if (typeof categories !== 'undefined') {
            this.setState({ ...this.state, categories });
            this.setState({ ...this.state, isCategoriesReady: true });
        }
    }


    /**
     * Opens modal when company card is clicked
     *
     * @param {number} sponsorshipId
     * @param {number} companyId
     */
    handleCompanyCardClickedModalOpen = (sponsorshipId, companyId) => {
        if (this.state.onEnterModalOpen === true && this.state.selectedSite !== null) {
            let redirectUrl = formatExploreCompanyUrlUtil(this.state.selectedSite, companyId, sponsorshipId);

            if (redirectUrl !== false && redirectUrl !== '') {
                window.open(redirectUrl, "_blank");
            }
        } else {
            this.setState({ selectedCompanyCard: { sponsorshipId, companyId } }, () => {
                this.showModal();
            });
        }
    }

    /**
     * Closes modal
     * Resets selectedCompanyCard
     */
    handleCompanyCardModalClose = () => {
        this.hideModal();
        this.setState({ selectedCompanyCard: { sponsorshipId: null, companyId: null } });
    }


    /**
     * SiteCard click handler
     * When `onEnterModalOpen` is TRUE - updates the state and closes the modal
     * When `onEnterModalOpen` is FALSE - redirects to url (based on companyId and sponsorshipId)
     *
     * @param {string} siteName - selected site
     * @param {number} companyId     selected company id
     * @param {number} sponsorshipId selected company sponsorship id
     */
    handleSiteCardClicked = (siteName, companyId, sponsorshipId) => {
        if (this.state.onEnterModalOpen) {
            this.setState( { ...this.state, selectedSite: siteName }, () => {
                this.hideModal();
            });
        } else {
            let redirectUrl = formatExploreCompanyUrlUtil(siteName, companyId, sponsorshipId);
            if (redirectUrl !== false && redirectUrl !== '') { window.open(redirectUrl, "_blank"); }
        }
    }

    /**
     * Shows the Modal
     */
    showModal = () => {
        this.setState({ isModalOpen: true });
    };

    /**
     * Hides the Modal
     */
    hideModal = () => {
        this.setState({ isModalOpen: false });
    };


    /**
    * Renders the Company Cards
    *
    * @param {Array} companies
    *
    * @return {Array} array of CompanyCard elements
    */
    renderCompanyCards = (companies) => {
         return companies.map((company, key) => {
             return (
                 <CompanyCard
                    sponsorshipId={company.id}
                    companyId={company.companyData.id}
                    name={company.companyData.companyName}
                    logo={company.companyData.companyLogo}
                    cover={company.companyData.companyCover}
                    handleCompanyCardClicked={this.handleCompanyCardClickedModalOpen}
                    key={key}>
                </CompanyCard>
             );
         })
    }

    /**
     * Creates array of CategorySections for rendering
     *
     * @param {Array} categories - array of categpries to render
     * @return {Array} array of CategorySection elements
     */
    renderCategorySections = (categories) => {
        let list = [];

        categories.map((category, key) => {
            list.push(
                <CategorySection title={category.label} key={key}>
                     { this.renderCompanyCards(category.companies) }
                </CategorySection>
            );
        });


        return list;
    }


    /**
     * onMount:
     * fetch sites and categories
     * update state with received data
     * if `onEnterModalOpen` is TRUE show sites modal
     */
    async componentDidMount() {
        window.scrollTo(0, 0);
        const [sitesResponse, categoriesResponse] = await Promise.all(
            [ this.getSitesPromise(), this.getCategoriesPromise() ]
        );

        this.handleDataUpdated(sitesResponse, categoriesResponse);

        if (this.state.onEnterModalOpen === true) {
            this.showModal();
        }
    }

    render() {
        return (
            <div id="explore-companies-page-component">
                <div className="pure-g">
                    { this.state.isCategoriesReady &&
                    <SitesModal sponsorshipId={this.state.selectedCompanyCard.sponsorshipId}
                                companyId={this.state.selectedCompanyCard.companyId}
                                sites={this.state.sites}
                                isOpen={this.state.isModalOpen}
                                onEnterModalOpen={this.state.onEnterModalOpen}
                                handleSiteCardClicked={this.handleSiteCardClicked}
                                withLogos={true}
                                handleClose={this.handleCompanyCardModalClose} />
                    }
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
