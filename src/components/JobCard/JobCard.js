import React from 'react';
import './JobCard.css';
import './JobCardResponsive.css';
import {CONST_UNIVERSITY_BASE_URL} from "../../constants";

export default function JobCard (props) {
    return (
        <div className="job-card">
            <div className="header">
                <div className="info">
                    <span>מספר משרה:</span>
                    <span>{ props.data.jobId }</span>
                </div>
                <div className="info">
                    { props.data.statusLabel }
                </div>
                <div className="info">
                    <span>תאריך פרסום:</span>
                    <span>{ props.data.createdAt }</span>
                </div>
            </div>
            <div className="body">
                <div className="company-details">
                    <div className="logo">
                        <img className="pure-img" src={CONST_UNIVERSITY_BASE_URL + props.companyLogo} alt="company-logo" />
                    </div>
                    <div className="company-name">
                        { props.companyName }
                    </div>
                </div>
                <div className="job-details">
                    <div className="title">
                        <h3>{ props.data.title }</h3>
                    </div>
                    <div className="details">
                        <div className="detail-container">
                            <img className="pure-img" src={CONST_UNIVERSITY_BASE_URL + 'dev.academe.wanted.co.il/images/icons/industry.png' } alt="industry"/>
                            <div>{ props.data.employment }</div>
                        </div>
                        <div>
                            <img className="pure-img" src={CONST_UNIVERSITY_BASE_URL + 'dev.academe.wanted.co.il/images/icons/location.png' } alt="locations"/>
                            <div>{ props.data.locationFormatted }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};