/* @flow */
import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';

import WorkTime, { Day, Time } from '../WorkTime';
import type { Props } from '../WorkTime';

configure({ adapter: new Adapter() });

const getProps = (overRidenProps): Props => {
  return Object.assign({}, {
    open: true,
    opensAt: '08:00',
    closesAt: '20:00',
    day: 'Monday',
  }, { ...overRidenProps });
};

describe('WorkTime Component -- ', () => {
  it('should be checked if it is open', () => {
    const props = getProps();
    const tree = renderer.create(<WorkTime {...props} />).toJSON();
    expect(tree).toHaveStyleRule('background-color', 'white', {
      modifier: ':before',
    });
  });

  it('shoud have a transparent buble if the work time is closed', () => {
    const props = getProps({ open: false });
    const tree = renderer.create(<WorkTime {...props} />).toJSON();
    expect(tree).toHaveStyleRule('background-color', 'transparent', {
      modifier: ':before',
    });
  });

  it('should have the day displayed', () => {
    const props = getProps();
    const wrapper = shallow(<WorkTime {...props} />);
    const dayDOM = wrapper.find(Day);

    expect(dayDOM.children().text()).toEqual(props.day);
  });

  it('should have the time formated and displayed', () => {
    const props = getProps();
    const expectedResult = `${props.opensAt} - ${props.closesAt}`;

    const wrapper = shallow(<WorkTime {...props} />);
    const timeDOM = wrapper.find(Time);

    expect(timeDOM.children().text()).toEqual(expectedResult);
  });
});
