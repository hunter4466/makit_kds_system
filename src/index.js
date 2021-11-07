import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/fn/number/is-nan';
import 'core-js/es7/';
import 'core-js/es6/';
import 'raf/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/configureStore';
import './styles/_fonts.scss';
import './styles/_kds.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
