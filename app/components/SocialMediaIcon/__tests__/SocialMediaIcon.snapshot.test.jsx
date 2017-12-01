/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SocialMediaIcon from '../SocialMediaIcon';

describe('SocialMediaIcon Snapshot Testing --', () => {
  it('should render and match snapshot', () => {
    const component = renderer.create(<SocialMediaIcon type={'Test'} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
