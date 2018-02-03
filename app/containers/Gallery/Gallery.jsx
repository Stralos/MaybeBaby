// @flow
import React, { PureComponent } from 'react';
import Lightbox from 'react-images';

export type Props = {
  +images: Array<{
    src: string
  }>
}

class Gallery extends PureComponent<Props> {
  render() {
    const { images } = this.props;
    return (
      <div>
        Gallery
        <Lightbox
          images={images}
        />
      </div>
    );
  }
}

export default Gallery;
