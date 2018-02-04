// @flow
import React, { PureComponent } from 'react';
import Lightbox from 'react-images';

export type Props = {
  +images: Array<{
    src: string
  }>
}

type State = {
  isOpen: boolean,
  currentImage: number
}

class Gallery extends PureComponent<Props, State> {
  state = {
    isOpen: false,
    currentImage: 0,
  }

  onClose = () => {
    this.setState({ isOpen: false });
  }

  onClose = () => {
    this.setState({ isOpen: false });
  }

  onClickNext = () => {
    const currentImage = this.state.currentImage + 1;
    this.setState({ currentImage });
  }

  onClickPrev = () => {
    this.setState({ currentImage: this.state.currentImage - 1 });
  }

  renderImages = () => {
    return [];
  }

  render() {
    const {
      images,
    } = this.props;
    const {
      isOpen,
      currentImage,
    } = this.state;

    return (
      <div>
        Gallery
        {this.renderImages()}
        <Lightbox
          isOpen={isOpen}
          currentImage={currentImage}
          images={images}
          onClose={this.onClose}
          onClickPrev={this.onClickPrev}
          onClickNext={this.onClickNext}
        />
      </div>
    );
  }
}

export default Gallery;
