// @flow
import React, { Component } from "react";
import {withRouter, Route, NavLink } from "react-router-dom"
import { connect } from "react-redux"
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Services from "./components/Services";
import styled from 'styled-components';

type Props = {
  greeting: string,
  date: number
}

const rando = "active";
const StyledNavLink = styled(NavLink).attrs({
  activeClassName: rando
})`
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  &.${rando} {
    color: red;
  }
`;

class App extends Component {
  props: Props

  render(){
    return (
      <div>
        <nav>
          <StyledNavLink exact={true} to="/"> Home </StyledNavLink>
          <StyledNavLink exact={true} to="/contacts"> Contacts </StyledNavLink>
          <StyledNavLink exact={true} to="/services"> Services </StyledNavLink>
        </nav>
        <Route exact={true} path={"/"} render={ () => <Home {...this.props}/>}/>
        <Route exact={true} path={"/contacts"} component={Contacts}/>
        <Route exact={true} path={"/services"} render={ () => <Services/>}/>
      </div>
    )
  }
}


const mapSateToProps = (state : Props) => {
  return Object.assign({}, {
    greeting: state,
    date: state.date
  })};
export default withRouter(connect(mapSateToProps)(App));

