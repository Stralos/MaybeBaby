/* @flow */
import React from 'react';
import { shallow } from 'enzyme';

import Home, {
  Description,
  ProductList,
  Product,
  TimeTable,
  WorkTime,
  ContactDetails,
  Phone,
  Email,
  Address,
} from '../Home';
import type { Props } from '../Home';

const props: Props = {
  description: 'Sarah Snips is a hairdressers and salon based in Marylebone, London.',
  products: [{ image: 'a' }, { image: 'b' }],
  workingHours: [{
    day: 'Monday',
    open: true,
    opensAt: '08:00',
    closesAt: '22:00',
  }, {
    day: 'Tuesday',
    open: true,
    opensAt: '08:00',
    closesAt: '22:00',
  }, {
    day: 'Wendnesday',
    open: true,
    opensAt: '08:00',
    closesAt: '22:00',
  }, {
    day: 'Thursday',
    open: true,
    opensAt: '08:00',
    closesAt: '22:00',
  }, {
    day: 'Friday',
    open: true,
    opensAt: '08:00',
    closesAt: '22:00',
  }, {
    day: 'Saturday',
    open: true,
    opensAt: '08:00',
    closesAt: '22:00',
  }, {
    day: 'Sunday',
    open: true,
    opensAt: '08:00',
    closesAt: '22:00',
  }],
};

describe('Home Component -- ', () => {
  it('should have an description', () => {
    const wrapper = shallow(<Home {...props} />);
    const descriptionDOM = wrapper.find(Description);

    expect(descriptionDOM).toHaveLength(1);
    expect(descriptionDOM.children().text()).toEqual(props.description);
  });

  it('should have a product list with 2 products', () => {
    const wrapper = shallow(<Home {...props} />);
    const productListDOM = wrapper.find(ProductList);

    expect(productListDOM).toHaveLength(1);
    expect(productListDOM.find(Product)).toHaveLength(2);
  });

  it('should have time table with work times', () => {
    const wrapper = shallow(<Home {...props} />);
    const timeTableDOM = wrapper.find(TimeTable);

    expect(timeTableDOM).toHaveLength(1);
    expect(timeTableDOM.find(WorkTime)).toHaveLength(7);
  });

  it('shoudl have contact details with email, phone and address', () => {
    const wrapper = shallow(<Home {...props} />);
    const contactDetailsDOM = wrapper.find(ContactDetails);

    expect(contactDetailsDOM).toHaveLength(1);
    expect(contactDetailsDOM.find(Email)).toHaveLength(1);
    expect(contactDetailsDOM.find(Phone)).toHaveLength(1);
    expect(contactDetailsDOM.find(Address)).toHaveLength(1);
  });
});
