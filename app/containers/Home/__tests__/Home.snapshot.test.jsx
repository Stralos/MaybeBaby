/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Home from '../Home';
import type { Props } from '../Home';

const getProps = (): Props => ({
  image: 'www.images.com/venueImage.jpg',
  description: 'This is the best venue Ever!',
  products: [{
    image: 'www.images.com/shampoon.jpg',
  }, {
    image: 'www.images.com/soap.jpg',
  }],
  workingHours: [{
    day: 'Monday',
    open: false,
    opensAt: '08:00',
    closesAt: '18:00',
  }, {
    day: 'Tuesday',
    open: true,
    opensAt: '10:00',
    closesAt: '20:00',
  }],
  address: 'England London Main Street 13',
  phone: '+88 2349 83921',
  email: 'awesomeVenue@gmail.com',
});


describe('Home Component Snapshot-- ', () => {
  it('should renders correctly', () => {
    const props = getProps();
    const tree = renderer
      .create(<Home {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
