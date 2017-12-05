/* @flow */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import Contacts from '../Contacts';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Contacts />
    </MemoryRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
