/* @flow */
import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';

import H3 from 'components/H3';
import Services from '../Services';

import type { Props } from '../Services';


describe('Services Component -- ', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      services: [],
    };
  });

  it('should have an header', () => {
    const wrapper = shallow(<Services {...props} />);
    const headerDOM = wrapper.find(H3);

    expect(headerDOM).toHaveLength(1);
  });
});
