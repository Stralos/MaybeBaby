/* @flow */

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Services from '../Services';
import type { Props } from '../Services';

describe('Services Component Snapshot', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      services: [],
    };
  });

  it('should renders correctly', () => {
    const tree = renderer
      .create(<Services {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a list of services withouth products', () => {
    props.services = [{
      name: 'Haircut',
      products: [],
    }];
    const tree = renderer
      .create(<Services {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a list of servises with products', () => {
    props.services = [{
      name: 'Haircut',
      products: [{
        productName: 'Short haircut',
        range: false,
        minDurationMinutes: '20',
        maxDurationMinutes: '60',
      }, {
        productName: 'Long haircut',
        range: false,
        minDurationMinutes: '40',
        maxDurationMinutes: '80',
      }],
    }];
    const tree = renderer
      .create(<Services {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

