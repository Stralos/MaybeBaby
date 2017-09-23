/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SocialMediaIcon from '../SocialMediaIcon';

describe('SocialMediaIcon Snapshot Testing --', () => {
  it('should render with a backgound colour', () => {
    const props = {
      type: 'blue',
    };

    const component = renderer.create(<SocialMediaIcon {...props} />).toJSON();
    expect(component).toHaveStyleRule('background-color', props.type);
  });
});
