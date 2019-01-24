import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Navbar from './../../components/Navbar/Navbar';
import HomePage from './../Home/HomePage';
import ContactUsPage from './../ContactUs/ContactUsPage';
import StudentsPage from './../Students/StudentsPage';
import EmployersPage from './../Employers/EmployersPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root-app" className="App">
          <div className="pure-g">
              <div className="pure-u-1 header-container">
                  <Navbar></Navbar>
              </div>
              <div className="pure-u-1 body-container">
                  <Switch>
                      <Route exact path="/" component={HomePage} />
                      <Route path="/home" component={HomePage} />
                      <Route path="/students" component={StudentsPage} />
                      <Route path="/employers" component={EmployersPage} />
                      <Route path="/contact-us" component={ContactUsPage} />
                  </Switch>
              </div>
              <div className="pure-u-1 footer-container">

              </div>
          </div>
      </div>
    );
  }
}

export default App;
