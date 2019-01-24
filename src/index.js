import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
// Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// styles
import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive.css'; // (?)
import './index.css';
import './global.css';

import App from './pages/Root/App';

// service workers
// import * as serviceWorker from './serviceWorker';

// fontawesome library
library.add(
    faInstagram,
    faFacebook,
    faChevronDown,
    faPlus,
    faMinus
);

ReactDOM.render((
    <Router>
         <App />
  </Router>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
