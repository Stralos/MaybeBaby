/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import TeamMember from '../TeamMember';
import type { Props } from '../TeamMember';

describe('TeamMember Component Snapshot', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      name: 'James Smith',
      initials: 'JS',
      image: 'www.james-smith.com/image/me.jpg',
      profession: 'Hair Dresser',
      description: 'Likes to talk a lot',
    };
  });

  it('it should render correctly with an image', () => {
    const tree = renderer.create(
      <TeamMember {...props} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with initials', () => {
    props.image = null;
    const tree = renderer.create(
      <TeamMember {...props} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render description', () => {
    props.description = null;
    const tree = renderer.create(
      <TeamMember {...props} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render profession', () => {
    props.profession = null;
    const tree = renderer.create(
      <TeamMember {...props} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
