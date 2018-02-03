/* eslint no-underscore-dangle: 0 */
/* eslint no-undef: 0 */
/* eslint react/jsx-filename-extension: 0 */

// @flow
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';

import App from 'containers/App';

const preLoadedTheme = window.__PRELOADED_THEME__;
delete window.__PRELOADED_THEME__;

const preLoadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(state => state, preLoadedState);

const rootDOM = document.getElementById('root');
if (rootDOM) {
  hydrate(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={preLoadedTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
    , rootDOM,
  );
}

