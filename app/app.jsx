// @flow
import React from 'react';
import styled from 'styled-components';
import { withRouter, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from 'components/Nav';
import SocialMediaIcon from 'components/SocialMediaIcon';
import Home from './containers/Home';

type Props = {
  +greeting: string,
  +date: number
}

const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  margin: 0 4px;
  padding: 4px 8px;
  color: #eee;
  font-size: 16px;
  text-decoration: none;

  &.${activeClassName} {
    //font-weight: 600;
  }
  &:hover {
    color: #c8c8c8;
  }
`;

const App = (props: Props) => {
  return (
    <div>
      <Nav>
        <StyledNavLink exact to="/"> Home </StyledNavLink>
        <StyledNavLink exact to="/a"> Service & Prices </StyledNavLink>
        <StyledNavLink exact to="/v"> Our Team </StyledNavLink>
        <StyledNavLink exact to="/b"> Gallery </StyledNavLink>
      </Nav>
      <SocialMediaIcon type={'blue'} />
      <SocialMediaIcon type={'blue'} />
      <Route exact path={'/'} render={() => <Home {...props} />} />
    </div>
  );
};


const mapSateToProps = (state: Props): Props => Object.assign({}, {
  greeting: state.greeting,
  date: state.date,
});
export default withRouter(connect(mapSateToProps)(App));
