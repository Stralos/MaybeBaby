/* @flow */
import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';

import H3 from 'components/H3';
import Services from '../Services';

import type { Props } from '../Services';


const getProps = (): Props => ({
  services: [],
});

describe('Services Component -- ', () => {
  it('should have an header', () => {
    const props = getProps();
    const wrapper = shallow(<Services {...props} />);
    const headerDOM = wrapper.find(H3);

    expect(headerDOM).toHaveLength(1);
  });
});
