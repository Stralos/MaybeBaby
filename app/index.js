// @flow
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import App from "./app.jsx";

// Grab the state from a global variable injected into the server-generated HTML
const state = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__
const store = createStore((state) => {return state}, state)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById("root")
);