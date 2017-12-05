/* @flow */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Contacts from '../Contacts';

configure({ adapter: new Adapter() });

describe('A suite', () => {
  it('should render without throwing an error', () => {
    const component = shallow(<Contacts />);
    expect(component).toHaveLength(1);
  });
});
