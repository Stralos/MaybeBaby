// @flow
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import App from "./app.jsx";
import {BrowserRouter} from "react-router-dom";

// Grab the state from a global variable injected into the server-generated HTML
const state = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

ReactDOM.render(
  <BrowserRouter>
    <App initialStore={state}/>
  </BrowserRouter>, document
);