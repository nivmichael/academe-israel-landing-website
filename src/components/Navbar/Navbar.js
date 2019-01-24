import React, { Component } from 'react';
// import { Container, Grid, Header, Image } from 'semantic-ui-react';

/* ======== IMPORT STYLES ======== */
import './Navbar.css';

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
            // <Grid divided='vertically'>
            //     <Grid.Row id="navbar-component" columns={2}>
            //         <Grid.Column>
            //             <HamburgerMenu></HamburgerMenu>
            //         </Grid.Column>
            //         <Grid.Column>
            //             <Image src={mainAcademeLogo} verticalAlign="middle" floated="left" />
            //         </Grid.Column>
            //     </Grid.Row>
            // </Grid>

            <div id="navbar-component">
                <div className="pure-g container">
                    <div className="pure-u-1-3">
                        <HamburgerMenu></HamburgerMenu>
                    </div>
                    <div className="pure-u-2-3">
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
