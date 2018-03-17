/* @flow */
import React from 'react';
import styled from 'styled-components';

// import facebookIcon from './assets/icon-facebook.svg';
// import instagramIcon from './assets/icon-instagram.svg';
// import twitterIcon from './assets/icon-twitter.svg';

type Icon = 'Facebook' | 'Twitter' | 'Instagram';
type Props = {
  +type: Icon,
  +theme?: {
    color: string
  }
}

export const FACEBOOK: Icon = 'Facebook';
export const TWITTER: Icon = 'Twitter';
export const INSTAGRAM: Icon = 'Instagram';

const SocialMediaIcon = styled.a`
  text-decoration: none;
  height: 24px;
  width: 24px;
  display: inline-block;
  background-image: url(${(props: Props) => {
    switch (props.type) {
      case FACEBOOK:
        return 'facebookIcon';
      case TWITTER:
        return 'twitterIcon';
      case INSTAGRAM:
        return 'instagramIcon';
      default:
        return '';
    }
  }});
  color: ${(props: Props) => {
    const { theme } = props;
    const color = theme ? theme.color : 'blue';
    return color;
  }}
`;

export default (props: Props) => <SocialMediaIcon {...props} target="_blank" />;
