/* @flow */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import ROUTES from 'utils/routes';
import App from '../App';
import type { Props } from '../App';

jest.mock('containers/Home', () => () => '<Home />');
jest.mock('containers/Services', () => () => '<Services />');
jest.mock('containers/Team', () => () => '<Team />');

const theme = {
  color: 'white',
};

describe('App Component Snapshot', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      venueName: 'Hair & Beauty',
      socialMedia: {
        facebook: 'www.facebook.com/hair&beauty',
        instagram: 'www.instagram.com/hair&beauty',
        twitter: 'www.twitter.com/hair&beauty',
      },
    };
  });

  it('should renders correctly home page', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={[ROUTES.HOME]} initialIndex={0}>
        <ThemeProvider theme={theme}>
          <App {...props} />
        </ThemeProvider>
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
