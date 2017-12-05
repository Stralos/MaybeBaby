/* @flow */
import React from 'react';
import { shallow } from 'enzyme';

import Home, {
  Description,
  ProductList,
  Product,
  TimeTable,
  Phone,
  Email,
  Address,
  VenueImage,
} from '../Home';
import WorkTime from '../__components__/WorkTime';
import type { Props } from '../Home';


const props: Props = {
  image: 'venue-image.jpeg',
  description: 'Sarah Snips is a hairdressers and salon based in Marylebone, London.',
  products: [{ image: 'a' }, { image: 'b' }],
  phone: '+37062322479',
  address: 'Jono Basanaviciaus 15',
  email: 'treatwell-salon@treatwell.com',
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

  it('should have email information', () => {
    const wrapper = shallow(<Home {...props} />);

    const emailDOM = wrapper
      .find(Email)
      .find({
        lable: 'Email',
        contactInformation: props.email,
      });
    expect(emailDOM).toHaveLength(1);
  });

  it('should have phone information', () => {
    const wrapper = shallow(<Home {...props} />);

    const phoneDOM = wrapper
      .find(Phone)
      .find({
        lable: 'Phone',
        contactInformation: props.phone,
      });
    expect(phoneDOM).toHaveLength(1);
  });

  it('should have address information', () => {
    const wrapper = shallow(<Home {...props} />);

    const addressDOM = wrapper
      .find(Address)
      .find({
        lable: 'Address',
        contactInformation: props.address,
      });
    expect(addressDOM).toHaveLength(1);
  });

  it('should have a venue image displayed', () => {
    const wrapper = shallow(<Home {...props} />);

    const venueImageDOM = wrapper.find(VenueImage);
    expect(venueImageDOM).toHaveLength(1);
  });
});
