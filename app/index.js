/* eslint no-underscore-dangle: 0 */
/* eslint no-undef: 0 */
/* eslint react/jsx-filename-extension: 0 */

// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import App from './app';

// Grab the state from a global variable injected into the server-generated HTML
const preLoadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;
const store = createStore(state => state, preLoadedState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={{ color: 'white' }}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
);
