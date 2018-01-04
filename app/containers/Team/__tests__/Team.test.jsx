/* @flow */
import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';

import H3 from 'components/H3';
import TeamMember from 'components/TeamMember';

import Team from '../Team';
import type { Props } from '../Team';

describe('Team Component', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      employees: [{
        name: 'James Smith',
        initials: 'JS',
        image: 'http://wwww.james-hair-dresser.com/image',
        description: 'Likes to talk',
        profession: 'Hair dresser',
      }, {
        name: 'Sarah Snow',
        initials: 'SS',
        image: 'http://wwww.sarah-snow.com/image',
        description: 'Cuts hair like a pro',
        profession: 'Hair dresser',
      }],
    };
  });

  it('should have an header', () => {
    const wrapper = shallow(<Team {...props} />);
    const headerDOM = wrapper.find(H3);

    expect(headerDOM).toHaveLength(1);
  });

  it('should have employees rendered', () => {
    const wrapper = shallow(<Team {...props} />);
    const teamMemberDOM = wrapper.find(TeamMember);

    expect(teamMemberDOM).toHaveLength(props.employees.length);
  });
});
