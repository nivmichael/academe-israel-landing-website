import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import HomePage from './../Home/HomePage';
import ContactUsPage from './../ContactUs/ContactUsPage';
import StudentsPage from './../Students/StudentsPage';
import EmployersPage from './../Employers/EmployersPage';
import ReferPage from './../Refer/ReferPage';
import { hotjar } from 'react-hotjar';
import './App.css';

hotjar.initialize('1730941', 6);


class App extends Component {
  render() {
    return (
      <div id="root-app" className="App">
          <div className="pure-g">
              <div className="pure-u-1 header-container">
                  <Navbar></Navbar>
              </div>
              <div className="pure-u-1 body-container">
                  <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
                      <Route exact path="/" component={ HomePage } />
                      <Route path="/home" component={ HomePage } />
                      <Route path="/students" component={ StudentsPage } />
                      <Route path="/employers" component={ EmployersPage } />
                      <Route path="/contact-us" component={ ContactUsPage } />
                      <Route path="/login" component={ ReferPage } />
                      <Route path="/register" component={ ReferPage } />
                  </AnimatedSwitch>
              </div>
              {/* <div className="pure-u-1 footer-container">
                <Footer></Footer>
              </div> */}
          </div>
      </div>
    );
  }
}

export default App;

// <Footer></Footer>
