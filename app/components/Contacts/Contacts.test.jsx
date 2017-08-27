import React from 'react';
import { shallow } from 'enzyme';
import Contacts from './Contacts';

describe('A suite', () => {
  it('should render without throwing an error', () => {
    const component = shallow(<Contacts />);
    expect(component).toHaveLength(1);
  });
});
