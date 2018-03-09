/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import SocialMediaIcon from 'components/SocialMediaIcon';
import App from '../App';
import type { Props } from '../App';

describe('App Component', () => {
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

  it('should not render social links', () => {
    props = Object.assign({}, props, {
      socialMedia: {
        facebook: null,
        instagram: null,
        twitter: null,
      },
    });

    const wrapper = shallow(<App {...props} />);
    const socialMediaDOM = wrapper.find(SocialMediaIcon);

    expect(socialMediaDOM).toHaveLength(0);
  });

  it('should render social links', () => {
    props = Object.assign({}, props, {
      socialMedia: {
        facebook: 'www.facebook.com/hair&beauty',
        instagram: 'www.instagram.com/hair&beauty',
        twitter: 'www.twitter.com/hair&beauty',
      },
    });

    const wrapper = shallow(<App {...props} />);
    const socialMediaDOM = wrapper.find(SocialMediaIcon);

    expect(socialMediaDOM).toHaveLength(3);
  });
});
