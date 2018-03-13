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
import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';

import Super from 'containers/Super';

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
/*
const App = () => {
  return (
    <div>
      Hello world!!!!!
    </div>
  );
};
debugger
const Comp = hot(module)(App);
*/
const store = createStore(state => state, {});

const App = Super;


render(
  <Provider store={store}>
    <ThemeProvider theme={{}}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
/*

if (module.hot) {
  module.hot.accept('./printText.js', () => {
    debugger;
    console.log('Accepting the updated printMe module!');
    // const updated = require('./printText');
    printText();
    document.body.appendChild(component(printText));
  });
}

*/
