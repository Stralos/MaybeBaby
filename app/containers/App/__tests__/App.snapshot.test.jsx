/* @flow */
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import App from '../index';
import data from '../../../placeholderStore';

configure({ adapter: new Adapter() });

const props = data;
const theme = {
  color: 'white',
};

describe('App Component Snapshot-- ', () => {
  it('renders correctly', () => {
    const store = createStore(state => state, props);
    const tree = renderer.create(
      <MemoryRouter>
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
