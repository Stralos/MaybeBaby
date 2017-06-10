// @flow
import React from "react";
import ReactDOM from "react-dom";
import Index from "./index.jsx";
const props = {
  greeting: "Hello World!",
  date: 1
}


ReactDOM.render(<Index {...props}/>, document);