/* eslint no-underscore-dangle: 0 */
/* eslint no-undef: 0 */
/* eslint react/jsx-filename-extension: 0 */

/*
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import App from './containers/App/index';
*/

import printText from './printText';
// import s from './placeholderStore';

/*
const preLoadedTheme = window.__PRELOADED_THEME__;
delete window.__PRELOADED_THEME__;

const preLoadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
*/
/*
debugger;
const preLoadedState = s;
const preLoadedTheme = {
  color: 'white',
};

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

*/

function component(callback) {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = ['Hello', 'webpack'].join(' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printText;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component(printText));

debugger;

if (module.hot) {
  module.hot.accept('./printText.js', () => {
    debugger;
    console.log('Accepting the updated printMe module!');
    const updated = require('./printText');
    updated();
    document.body.appendChild(component(updated.default));
  });
}
