/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import SocialMediaIcon from '../SocialMediaIcon';

configure({ adapter: new Adapter() });

describe('SocialMediaIcon Snapshot Testing --', () => {
  it('should render and match snapshot', () => {
    const component = renderer.create(<SocialMediaIcon type="Test" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
