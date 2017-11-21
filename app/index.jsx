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
import { shouldBeIndexed } from 'utils/indexing';
import App from 'containers/App';

const preLoadedTheme = window.__PRELOADED_THEME__;
delete window.__PRELOADED_THEME__;

const preLoadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(state => state, preLoadedState);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={preLoadedTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'),
);


const urlToIndex = {
  '/': true,
};

const changeIndex = (element) => {
  try {
    if (element.target.hostname !== window.location.hostname) {
      return;
    }
    const href = element.target.getAttribute('href');
    const shouldIndex = shouldBeIndexed(href, urlToIndex);
    const robotsMetaTag = window.document.head.querySelector("meta[name='robots']");

    if (!shouldIndex && !robotsMetaTag) {
      const meta = window.document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      window.document.head.appendChild(meta);
    }

    if (shouldIndex && robotsMetaTag) {
      window.document.head.removeChild(robotsMetaTag);
    }
  } catch (error) {
    console.log(error);
  }
};

[...window.document.links].forEach((element) => {
  element.addEventListener('click', changeIndex);
});

