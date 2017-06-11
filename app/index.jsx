// @flow
import React, { Component } from "react";
import { connect } from 'react-redux';
import Home from "./components/Home/index.jsx"

type Props = { greeting: string, date: number };

class Index extends Component<void, Props, void> {
  render() {
    return(
      <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        <Home {...this.props}/>
        <script dangerouslySetInnerHTML={{
          __html: "window.__PRELOADED_STATE__=" + JSON.stringify(this.props).replace(/</g, '\\u003c')
        }}/>
        <script src="./bundle.js"/>
      </body>
      </html>
    )
  }
}

const mapSateToProps = (state) : Props => Object.assign({}, {
  greeting: state.greeting,
  date: state.date
});
export default connect(mapSateToProps)(Index);


