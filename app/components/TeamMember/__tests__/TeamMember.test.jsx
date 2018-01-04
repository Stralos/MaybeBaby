/* @flow */
import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';

import TeamMember, {
  Image,
  Name,
  Description,
  Profession,
  Initials,
} from '../TeamMember';
import type { Props } from '../TeamMember';

describe('Team Component', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      name: 'James Smith',
      initials: 'JS',
      image: 'http://wwww.james-hair-dresser.com/image',
      description: 'Likes to talk a lot',
      profession: 'Hair dresser',
    };
  });

  it('should have an image if image is not null', () => {
    const wrapper = shallow(<TeamMember {...props} />);
    const imageDOM = wrapper
      .find(Image)
      .find({
        src: props.image,
      });

    expect(imageDOM).toHaveLength(1);
  });

  it('should render initials if image is null', () => {
    props.image = null;
    const wrapper = shallow(<TeamMember {...props} />);
    const initialsDOM = wrapper
      .find(Initials);

    expect(initialsDOM).toHaveLength(1);
    expect(initialsDOM.children().text()).toEqual(props.initials);
  });

  it('should have a name', () => {
    const wrapper = shallow(<TeamMember {...props} />);
    const nameDOM = wrapper.find(Name);

    expect(nameDOM).toHaveLength(1);
    expect(nameDOM.children().text()).toEqual(props.name);
  });

  it('should have a description if description is not null', () => {
    const wrapper = shallow(<TeamMember {...props} />);
    const descriptionDOM = wrapper.find(Description);

    expect(descriptionDOM).toHaveLength(1);
    expect(descriptionDOM.children().text()).toEqual(props.description);
  });

  it('should not render description if description is empty', () => {
    props.description = null;
    const wrapper = shallow(<TeamMember {...props} />);
    const descriptionDOM = wrapper.find(Description);

    expect(descriptionDOM).toHaveLength(0);
  });

  it('should have a profession if profession is not null', () => {
    const wrapper = shallow(<TeamMember {...props} />);
    const professionDOM = wrapper.find(Profession);

    expect(professionDOM).toHaveLength(1);
    expect(professionDOM.children().text()).toEqual(props.profession);
  });

  it('should not render profession if profession is empty', () => {
    props.profession = null;
    const wrapper = shallow(<TeamMember {...props} />);
    const professionDOM = wrapper.find(Profession);

    expect(professionDOM).toHaveLength(0);
  });
});
