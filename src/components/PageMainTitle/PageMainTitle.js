import React, { Component } from 'react';

import './PageMainTitle.css';

import ContactUsIcon from '../../images/icons/page-title/contact-us-icon-white-100x100.png';
import StudentsIcon from '../../images/icons/page-title/students-icon-white-100x100.png';
import EmployersIcon from '../../images/icons/page-title/employers-icon-white-100x100.png';


const pageMainTitleResourcesList = {
    students        : { class: 'students-color',    icon: StudentsIcon,     alt: 'סטודנטים/בוגרים',    title: 'סטודנטים/בוגרים' },
    employers       : { class: 'employers-color',   icon: EmployersIcon,    alt: 'מעסיקים',             title: 'מעסיקים' },
    about_us        : { class: 'about-us-color',    icon: null,             alt: 'אודות',               title: 'אודות' },
    contact_us      : { class: 'contact-us-color',  icon: ContactUsIcon,    alt: 'צור קשר',             title: 'טופס פנייה - אקדמי' },
    faq             : { class: 'faq-color',         icon: null,             alt: 'שאלות ותשובות',       title: 'שאלות ותשובות' },
    default_class   : { class: 'default-color',     icon: null,             alt: '',                     title: '' }
};

export default class PageMainTitle extends Component {

    render() {
        return (
            <div id="page-main-title-component">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <div className={ "message-container " + pageMainTitleResourcesList[this.props.titleType].class }>
                            <div className="page-logo-container">
                                <img className="pure-img" src={ pageMainTitleResourcesList[this.props.titleType].icon } alt={ pageMainTitleResourcesList[this.props.titleType].alt }></img>
                            </div>
                            <div className="message">{ pageMainTitleResourcesList[this.props.titleType].title }</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
