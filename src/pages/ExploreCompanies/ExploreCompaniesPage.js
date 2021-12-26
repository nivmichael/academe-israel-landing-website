import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
/* ========== import components ========= */
import PageMainTitle from './../../components/PageMainTitle/PageMainTitle';
import Footer from './../../components/Footer/Footer';
import CategorySection from './../../components/CategorySection/CategorySection';
import CompanyCard from './../../components/CompanyCard/CompanyCard';
import SitesModal from './../../components/SitesModal/SitesModal';

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

export default class ExploreCompaniesPage extends Component {
    constructor() {
        super();

        this.state = {
            isCategoriesReady: false,
            isModalOpen: false,
            selectedCompanyCard: {
                sponsorshipId: null,
                companyId: null
            },
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
     * Opens modal when company card is clicked
     */
    handleCompanyCardClickedModalOpen = (sponsorshipId, companyId) => {
        console.log('EmploleCompanies.handleCompanyCardClickedOpenModal.ModalOpen -> ', sponsorshipId, companyId);
        this.setState({ selectedCompanyCard: { sponsorshipId, companyId } }, () => {
            this.showModal();
        });
    }

    /**
     * Opens modal when company card is clicked
     */
    handleCompanyCardModalClose = () => {
        console.log('EmploleCompanies.handleCompanyCardModalClose.ModalClose');
        this.hideModal();
        this.setState({ selectedCompanyCard: { sponsorshipId: null, companyId: null } });
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
     * @return {Array} list - list of html elements
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

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getCategories();
    }

    render() {
        return (
            <div id="explore-companies-page-component">
                <div className="pure-g">
                    <SitesModal sponsorshipId={this.state.selectedCompanyCard.sponsorshipId}
                                companyId={this.state.selectedCompanyCard.companyId}
                                sites={this.sites}
                                isOpen={this.state.isModalOpen}
                                handleClose={this.handleCompanyCardModalClose} />

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
