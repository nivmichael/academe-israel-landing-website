import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/* ======== IMPORT STYLES ======== */
import './Navbar.css';
import './NavbarResponsive.css';

/* ======== IMPORT IMAGES ======== */
import mainAcademeLogo from  '../../images/logos/academe/academe-logo-only-30x30.png';

/* ======== IMPORT COMPONENTS ======== */
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

/* ============================ */
/* ======== CLASS INIT ======== */
/* ============================ */

export default class Navbar extends Component {
    render() {
        return (
            <div id="navbar-component">
                <div className="pure-g navbar-container">
                    <div className="pure-u-2-3 hamburger-container">
                        <HamburgerMenu></HamburgerMenu>
                    </div>
                    <div className="pure-u-2-3 navigation-container">
                        <div className="pure-menu pure-menu-horizontal">
                            <ul className="pure-menu-list">
                                <li className="pure-menu-item">
                                    <NavLink to="/home" activeClassName="active-link">ראשי</NavLink>
                                </li>
                                <li className="pure-menu-item">
                                    <NavLink to="/students" activeClassName="active-link">סטודנטים / בוגרים</NavLink>
                                </li>
                                <li className="pure-menu-item">
                                    <NavLink to="/employers" activeClassName="active-link">מעסיקים</NavLink>
                                </li>
                                <li className="pure-menu-item">
                                    <NavLink to="/contact-us" activeClassName="active-link">צור קשר</NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="pure-u-1-3">
                        <div className="logo-container">
                            <div className="title">AcadeME</div>
                            <img className="pure-img" src={mainAcademeLogo} alt="academe-logo"></img>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

// <li className="pure-menu-item">
//     <NavLink to="/faq" activeClassName="active-link">שאלות תשובות</NavLink>
// </li>
