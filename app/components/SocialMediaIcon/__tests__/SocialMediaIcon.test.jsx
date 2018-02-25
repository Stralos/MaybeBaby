/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SocialMediaIcon, { FACEBOOK, INSTAGRAM, TWITTER } from '../SocialMediaIcon';

import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import instagramIcon from '../assets/icon-instagram.svg';

describe('SocialMediaIcon Snapshot Testing --', () => {
  it('should render with Facebook icon', () => {
    const props = {
      type: FACEBOOK,
    };

    const component = renderer.create(<SocialMediaIcon {...props} />).toJSON();
    expect(component).toHaveStyleRule('background-image', `url(${facebookIcon})`);
  });

  it('should render with Twitter icon', () => {
    const props = {
      type: TWITTER,
    };

    const component = renderer.create(<SocialMediaIcon {...props} />).toJSON();
    expect(component).toHaveStyleRule('background-image', `url(${twitterIcon})`);
  });

  it('should render with Instagram icon', () => {
    const props = {
      type: INSTAGRAM,
    };

    const component = renderer.create(<SocialMediaIcon {...props} />).toJSON();
    expect(component).toHaveStyleRule('background-image', `url(${instagramIcon})`);
  });
});
