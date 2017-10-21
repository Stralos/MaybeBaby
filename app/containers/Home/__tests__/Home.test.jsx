/* @flow */
import React from 'react';
import { shallow } from 'enzyme';

import Home, { Description } from '../Home';
import type { Props } from '../Home';

const props: Props = {
  description: 'Sarah Snips is a hairdressers and salon based in Marylebone, London.',
};

describe('Home Component -- ', () => {
  it('should have an description', () => {
    const wrapper = shallow(<Home {...props} />);
    const descriptionDOM = wrapper.find(Description);

    expect(descriptionDOM).toHaveLength(1);
    expect(descriptionDOM.children().text()).toEqual(props.description);
  });
});
