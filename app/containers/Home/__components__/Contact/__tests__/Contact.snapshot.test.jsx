/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Contact from '../Contact';
import type { Props } from '../Contact';

const getProps = (): Props => {
  return {
    label: '',
    contactInformation: '',
  };
};

describe('Contact Component Snapshot', () => {
  it('renders correctly', () => {
    const props = getProps();
    const tree = renderer.create(
      <Contact {...props} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
