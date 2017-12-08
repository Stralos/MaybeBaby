/* @flow */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import ROUTES from 'utils/routes';
import App from '../index';
import data from '../../../placeholderStore';

const props = data;
const theme = {
  color: 'white',
};

describe('App Component Snapshot-- ', () => {
  it('should renders correctly home page', () => {
    const store = createStore(state => state, props);
    const tree = renderer.create(
      <MemoryRouter initialEntries={[ROUTES.HOME]} initialIndex={0}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
