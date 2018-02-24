/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Lightbox from 'react-images';

import H3 from 'components/H3';

import Gallery, {
  ImageList,
  Image,
} from '../Gallery';
import type { Props } from '../Gallery';


let props: Props;

describe('Gallery Component', () => {
  beforeEach(() => {
    props = {
      images: [],
    };
  });

  it('should have an image list if it has atleast one image', () => {
    props.images = [{
      src: 'http://www.super-spa.com/image/venue.jpeg',
    }];

    const wrapper = shallow(<Gallery {...props} />);
    const imageListDOM = wrapper.find(ImageList);

    expect(imageListDOM).toHaveLength(1);
  });

  it('should not have an image list if there are no images', () => {
    props.images = [];

    const wrapper = shallow(<Gallery {...props} />);
    const imageListDOM = wrapper.find(ImageList);

    expect(imageListDOM).toHaveLength(0);
  });

  it('should have images', () => {
    props.images = [{
      src: 'http://www.super-spa.com/image/venue.jpeg',
    }, {
      src: 'http://www.super-spa.com/image/chairs.jpeg',
    }, {
      src: 'http://www.super-spa.com/image/staff.jpeg',
    }];

    const wrapper = shallow(<Gallery {...props} />);
    const imagesDOM = wrapper.find(Image);

    expect(imagesDOM).toHaveLength(props.images.length);
  });

  it('should have a header', () => {
    const wrapper = shallow(<Gallery {...props} />);
    const h3DOM = wrapper.find(H3);

    expect(h3DOM).toHaveLength(1);
  });

  it('should hide Lightbox when onClose is triggered', () => {
    const wrapper = shallow(<Gallery {...props} />);
    wrapper.setState({ isOpen: true });

    wrapper.instance().onClose();
    wrapper.update();

    const lightBoxDOM = wrapper
      .find(Lightbox)
      .find({ isOpen: false });

    expect(lightBoxDOM).toHaveLength(1);
  });

  it('should decrease currentImageId', () => {
    const wrapper = shallow(<Gallery {...props} />);
    wrapper.setState({ currentImage: 2 });
    wrapper.instance().onClickPrev();
    wrapper.update();

    const lightBoxDOM = wrapper
      .find(Lightbox)
      .find({ currentImage: 1 });

    expect(lightBoxDOM).toHaveLength(1);
  });

  it('should increase currentImageId', () => {
    const wrapper = shallow(<Gallery {...props} />);
    wrapper.setState({ currentImage: 2 });
    wrapper.instance().onClickNext();
    wrapper.update();

    const lightBoxDOM = wrapper
      .find(Lightbox)
      .find({ currentImage: 3 });

    expect(lightBoxDOM).toHaveLength(1);
  });

  it('should open gallery when open is clicked', () => {
    const currentImage = 2;

    const wrapper = shallow(<Gallery {...props} />);
    wrapper.instance().open(currentImage);
    wrapper.update();

    const lightBoxDOM = wrapper
      .find(Lightbox)
      .find({
        currentImage,
        isOpen: true,
      });

    expect(lightBoxDOM).toHaveLength(1);
  });
});
