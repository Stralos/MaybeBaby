// @flow
import React, { Component } from "react";
import { connect } from 'react-redux';
import Home from "./components/Home/index.jsx"
import Contacts from "./components/Contacts/index.jsx";
import Services from "./components/Services/index.jsx";
import { Route, withRouter } from "react-router-dom"

type Props = { greeting: string, date: number };

class Index extends Component<void, Props, void> {
  render() {
    return(
      <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        <Route exact={true} path={"/"} component={Home}/>
        <Route exact={true} path={"/contacts"} component={Contacts}/>
        <Route exact={true} path={"/services"} component={Services}/>


        <script dangerouslySetInnerHTML={{
          __html: "window.__PRELOADED_STATE__=" + JSON.stringify(this.props).replace(/</g, '\\u003c')
        }}/>
        <script src="./bundle.js"/>
      </body>
      </html>
    )
  }
}

const mapSateToProps = (state) : Props => {
  debugger;
  return Object.assign({}, {
  greeting: state.greeting,
  date: state.date
})};
export default Index;
//export default withRouter(connect(mapSateToProps)(Index));

