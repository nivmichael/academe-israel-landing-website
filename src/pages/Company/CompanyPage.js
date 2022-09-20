import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import {
    CONST_DEV_API_COMPANY_PAGE_URL,
    CONST_API_COMPANY_PAGE_PARAM,
    CONST_API_ACTION_PARAM,
    CONST_RESPONSE_SUCCESS
} from "../../constants";
import Footer from "../../components/Footer/Footer";

export default class CompanyPage extends Component {
    cancelToken;
    source;

    constructor() {
        super();

        this.state = {
            isLoading: true,
            company: {}
        }
    }

    componentDidMount () {
        window.scrollTo(0, 0);

        this.cancelToken = axios.CancelToken;
        this.source = this.cancelToken.source();

        let url = CONST_DEV_API_COMPANY_PAGE_URL + '?' + CONST_API_COMPANY_PAGE_PARAM + '&' + CONST_API_ACTION_PARAM + 'testapi';

        axios.get(url, { cancelToken: this.source.token })
            .then((response) => {
                if (axios.isCancel(response)) {
                    console.log('Request canceled', response);
                }
                else if (response.status == CONST_RESPONSE_SUCCESS) {
                    let company = { ...response.data };
                    this.setState({ ...this.state, company });
                    this.onLoadingStop();
                }
            })
            .catch((error) => {
                console.log('error -> ', error);
                this.onLoadingStop();
            });
    }

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
                <div className="pure-g">
                    <div className="pure-u-1">
                        {
                            this.state.isLoading === true
                            ?
                            <div className="company-page-loader" ref="mainContainerLoaderRef">
                                <Loader type="Oval" color="#2194d3" height="60" width="60" />
                            </div>
                            :
                            <div className="company-page-main-container" ref="mainContainerRef">
                                { this.populateWireframe() }
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
