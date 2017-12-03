// @flow
import React, { PureComponent, Fragment } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Route, NavLink, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ROUTES from 'utils/routes';
import Nav from 'components/Nav';
import SocialMediaIcon from 'components/SocialMediaIcon';
import Services from 'components/Services';
import Home from 'containers/Home';

export type Props = {
  +venueName: string,
  +socialMedia: {
    +facebook: string,
    +instagram: string,
    +twitter: string,
  },
}

const AppStyled = styled.div`
  min-height: 100%;
  margin: 0 auto;
  max-width: 980px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  margin: 0 4px;
  padding: 4px 8px;
  color: #eee;
  font-size: 16px;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: .1em;
  text-transform: uppercase;

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
  font-family: 'Marcellus SC';
`;

const VenueName = styled(NavLink)`
  font-family: 'Marcellus SC';
  font-size: 40px;
  line-height: 40px;
  color: #eee;
  letter-spacing: 0.05em;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: #c8c8c8;
  }
`;

const SocialMedia = styled.div`
  font-size: 21px;
  margin: 0 -12px;
  > * {
    margin: 0 12px;
  }
`;
const RouteContent = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  background: #222;
  padding: 32px 0;
`;

class App extends PureComponent<Props> {
  componentWillMount() {
    /*
    ** the fontfamaly should be already passed inside the theme object
    ** all the calculations should be done beforehand
    ** in the theme layer.
    ** component should only display what he is given.
    */
    const globalStyles = `
      #root, body, html {
        margin: 0;
        height: 100%;
        min-height: 100%;
      }
      body, html {
        background-color: #333; 
        color: #ccc;
        font-family: 'Gentium Basic';
      }
    `;
    // eslint-disable-next-line no-unused-expressions
    injectGlobal`${globalStyles}`;
  }
  injectHtmlHead = () => {
    const noIndexTag = () => {
      return (
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
      );
    };
    return (
      <Fragment>
        <Helmet>
          <title> Test </title>
        </Helmet>
        <Switch>
          <Route exact path={ROUTES.HOME} />
          <Route render={noIndexTag} />
        </Switch>
      </Fragment>
    );
  }

  render() {
    const {
      venueName,
      socialMedia: {
        facebook, twitter, instagram,
      },
    } = this.props;
    return (
      <AppStyled>
        {this.injectHtmlHead()}
        <Header>
          <VenueName to={ROUTES.HOME}> {venueName} </VenueName>
          <SocialMedia>
            <SocialMediaIcon href={facebook}> F </SocialMediaIcon>
            <SocialMediaIcon href={twitter}> T</SocialMediaIcon>
            <SocialMediaIcon href={instagram}> I</SocialMediaIcon>
          </SocialMedia>
        </Header>
        <Nav>
          <StyledNavLink exact to={ROUTES.HOME}> Home </StyledNavLink>
          <StyledNavLink exact to={ROUTES.SERVICES}> Service & Prices </StyledNavLink>
          <StyledNavLink exact to={ROUTES.TEAM}> Our Team </StyledNavLink>
          <StyledNavLink exact to={ROUTES.GALLERY}> Gallery </StyledNavLink>
          <StyledNavLink exact to={ROUTES.CONTACT}> Contact </StyledNavLink>
        </Nav>
        <RouteContent>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.SERVICES} component={Services} />
          </Switch>
        </RouteContent>
        <Footer>
          Footer
        </Footer>
      </AppStyled>
    );
  }
}

export default App;
