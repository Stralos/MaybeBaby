// @flow
import React, { PureComponent } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Route, NavLink, Switch } from 'react-router-dom';
import Nav from 'components/Nav';
import SocialMediaIcon from 'components/SocialMediaIcon';
import Services from 'components/Services';
import Home from 'containers/Home';
import getFontFamalyFromTheme from 'utils/fonts';

export type Props = {
  +venueName: string,
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

const VenueName = styled(NavLink)`
  font-size: 40px;
  line-height: 40px;
  color: #eee;
  letter-spacing: 0.5em;
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

class App extends PureComponent<Props> {
  componentWillMount() {
    /*
    ** the fontfamaly should be already passed inside the theme object
    ** all the calculations should be done beforehand
    ** in the theme layer.
    ** component should only display what he is given.
    */

    const f: FontFamaly = getFontFamalyFromTheme('T');
    const globalStyles = `
      @font-face {
        font-family: ${f.fontFamaly};
        src: ${f.src}
      }
      body, html {
        margin: 0;
        height: 100%;
        min-height: 100%;
        background-color: #333; 
        color: #ccc;
        font-family: ${f.fontFamaly};
      }
    `;
    // eslint-disable-next-line no-unused-expressions
    injectGlobal`${globalStyles}`;
  }

  render() {
    const {
      venueName,
      socialMedia: {
        facebook, twitter, instagram,
      },
    } = this.props;
    return (
      <div>
        <Header>
          <VenueName to="/"> {venueName} </VenueName>
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
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/a'} component={Services} />
        </Switch>
      </div>
    );
  }
}

export default App;
