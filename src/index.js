import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import OnlineStore from './App';

/* Styles */
import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import './assets/sass/App.sass';

ReactDOM.render(
  <React.StrictMode>
    <OnlineStore />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
