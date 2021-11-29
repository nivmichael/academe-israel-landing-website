import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { slide as Menu } from 'react-burger-menu';
import Menu from 'react-burger-menu/lib/menus/slide'
import './HamburgerMenu.css';
import './HamburgerMenuResponsive.css';

export default class HamburgerMenu extends Component {
    constructor () {
        super();

        this.state = {
          menuOpen: false
        }
    }

    /**
     * Keeps your state in sync with the opening/closing of the menu
     *
     * @param state
     */
    handleStateChange = (state) => {
        this.setState( {menuOpen: state.isOpen} );
    }

    /**
     * Checks if the menu is open
     *
     * @param state
     * @returns {Boolean} isOpen
     */
    isMenuOpen = (state) => {
        return state.isOpen;
    };

    /**
     * This is used to close the menu, when a user clicks a menu item
     */
    closeMenu = () => {
        this.setState({ menuOpen: false });
    }

    render () {
        return (
            <Menu id={ "hamburger-sidebar" } right width={ '40%' } isOpen={ this.state.menuOpen } onStateChange={ (state) => this.handleStateChange(state) } customCrossIcon={ false }>
                    <Link to="/home" onClick={ this.closeMenu }>ראשי</Link>
                    <Link to="/students" onClick={ this.closeMenu }>סטודנטים / בוגרים</Link>
                    <Link to="/employers" onClick={ this.closeMenu }>מעסיקים</Link>
                    <Link to="/contact-us" onClick={ this.closeMenu }>צור קשר</Link>
                {/*<Link to="/login" className="is-bold" onClick={ this.closeMenu }>התחבר</Link>
                    <Link to="/register" className="is-bold" onClick={ this.closeMenu }>הירשם</Link>*/}
            </Menu>
        );
    }
}

// <div id="hamburger-menu-component">
// </div>
