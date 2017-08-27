/* @flow */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Contacts from '../Contacts';

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Contacts />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
