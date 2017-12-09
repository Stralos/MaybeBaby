/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import H3 from '../H3';

describe('H3 Snapshot Testing --', () => {
  it('should render and match snapshot', () => {
    const component = renderer
      .create(<H3 />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
