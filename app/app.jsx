// @flow
import React, { Component } from "react";
import {withRouter, Route } from "react-router-dom"
import { connect } from "react-redux"
import Home from "./components/Home/index.jsx";
import Contacts from "./components/Contacts/index.jsx";
import Services from "./components/Services/index.jsx";

type Props = {
  greeting: string,
  date: number
}

class App extends Component<void, Props, void> {
  render(){
    debugger;
    return (
      <div>
        <Route exact={true} path={"/"} component={Home}/>
        <Route exact={true} path={"/contacts"} component={Contacts}/>
        <Route exact={true} path={"/services"} component={Services}/>
      </div>
    )
  }
}


const mapSateToProps = (state) : Props => {
  return Object.assign({}, {
    greeting: state.greeting,
    date: state.date
  })};
export default withRouter(connect(mapSateToProps)(App));

