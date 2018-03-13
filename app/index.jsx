/* eslint no-underscore-dangle: 0 */
/* eslint no-undef: 0 */
/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import App from './containers/App/index';
import preLoadedState from './placeholderStore';

debugger;

const store = createStore(state => state, preLoadedState);

const rootDOM = document.getElementById('root');
if (rootDOM) {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
    , rootDOM,
  );
}
