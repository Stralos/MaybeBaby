// @flow
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import Index from "./index.jsx";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const store = createStore((state) => {return state}, preloadedState)

ReactDOM.render(
  <Provider store={store}>
      <Index/>
  </Provider>
  , document);