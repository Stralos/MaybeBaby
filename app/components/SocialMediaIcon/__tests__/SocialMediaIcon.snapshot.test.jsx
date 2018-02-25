/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SocialMediaIcon, { FACEBOOK, TWITTER, INSTAGRAM } from '../SocialMediaIcon';

describe('SocialMediaIcon Snapshot Testing', () => {
  it('should render with Facebook icon', () => {
    const component = renderer.create(<SocialMediaIcon type={FACEBOOK} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('should render with Instagram icon', () => {
    const component = renderer.create(<SocialMediaIcon type={INSTAGRAM} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('should render with Twitter icon', () => {
    const component = renderer.create(<SocialMediaIcon type={TWITTER} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
