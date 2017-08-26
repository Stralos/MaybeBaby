// @flow
import React from 'react';
import styled from 'styled-components';
import { withRouter, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Services from './components/Services';

type Props = {
  greeting: string,
  date: number
}

const rando = 'active';
const StyledNavLink = styled(NavLink).attrs({
  activeClassName: rando,
})`
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  &.${rando} {
    color: red;
  }
`;

const App = (props: Props) => {
  return (
    <div>
      <nav>
        <StyledNavLink exact to="/"> Home </StyledNavLink>
        <StyledNavLink exact to="/contacts"> Contacts </StyledNavLink>
        <StyledNavLink exact to="/services"> Services </StyledNavLink>
      </nav>
      <Route exact path={'/'} render={() => <Home {...props} />} />
      <Route exact path={'/contacts'} component={Contacts} />
      <Route exact path={'/services'} render={() => <Services />} />
    </div>
  );
};


const mapSateToProps = (state : Props) : Props => Object.assign({}, {
  greeting: state.greeting,
  date: state.date,
});
export default withRouter(connect(mapSateToProps)(App));
