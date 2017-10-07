// @flow
import type { Connector } from 'react-redux';

import React from 'react';
import styled from 'styled-components';
import { withRouter, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from 'components/Nav';
import SocialMediaIcon from 'components/SocialMediaIcon';
import Home from './containers/Home';


type Props = {
  +greeting: string,
  +date: number,
  +socialMedia: {
    +facebook: string,
    +instagram: string,
    +twitter: string,
  },
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

const Header = styled.h1`
  margin: 32px 0 24px 0;
  display: flex;
  justify-content: space-between;
  color: white;
`;
const VenueName = styled.a`
  font-size: 21px;
  text-decoration: none;
`;
const SocialMedia = styled.div`
  font-size: 21px;
  margin: 0 -12px;
  > * {
    margin: 0 12px;
  }
`;
// 12px


const App = (props: Props) => {
  const {
    socialMedia: {
      facebook, twitter, instagram,
    },
  } = props;
  return (
    <div>
      <Header>
        <VenueName href={'/'}> Title </VenueName>
        <SocialMedia>
          <SocialMediaIcon href={facebook}> F </SocialMediaIcon>
          <SocialMediaIcon href={twitter}> T</SocialMediaIcon>
          <SocialMediaIcon href={instagram}> I</SocialMediaIcon>
        </SocialMedia>
      </Header>
      <Nav>
        <StyledNavLink exact to="/"> Home </StyledNavLink>
        <StyledNavLink exact to="/a"> Service & Prices </StyledNavLink>
        <StyledNavLink exact to="/v"> Our Team </StyledNavLink>
        <StyledNavLink exact to="/b"> Gallery </StyledNavLink>
      </Nav>
      <Route exact path={'/'} render={() => <Home {...props} />} />
    </div>
  );
};


const mapSateToProps = state => Object.assign({}, {
  greeting: state.greeting,
  date: state.date,
  socialMedia: {
    facebook: state.socialMedia.facebook,
    instagram: state.socialMedia.instagram,
    twitter: state.socialMedia.twitter,
  },
});

const connector : Connector<{}, Props> = connect(mapSateToProps, {});

export default withRouter(connector(App));
