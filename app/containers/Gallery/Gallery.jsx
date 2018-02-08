// @flow
import React, { PureComponent } from 'react';
import Lightbox from 'react-images';
import styled from 'styled-components';

import H3 from 'components/H3';

export type Props = {
  images: Array<{
    src: string
  }>
}

type State = {
  isOpen: boolean,
  currentImage: number
}

export const ImageList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  display: flex;
  margin: -10px -10px -5px -10px;
`;

export const Li = styled.li`
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  padding: 10px 10px 5px 10px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  cursor: pointer;
`;

class Gallery extends PureComponent<Props, State> {
  state = {
    isOpen: false,
    currentImage: 0,
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

  open = (index: number) => {
    this.setState({
      isOpen: true,
      currentImage: index,
    });
  }

  renderImages = () => {
    const { images } = this.props;

    if (images.length === 0) {
      return null;
    }

    return (
      <ImageList>
        {images.map((img, index) => {
          const { src } = img;
          return (
            <Li key={src}>
              <Image src={src} onClick={() => { this.open(index); }} />
            </Li>
          );
        })}
      </ImageList>
    );
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
        <H3>
          Gallery
        </H3>
        {this.renderImages()}
        <Lightbox
          isOpen={isOpen}
          currentImage={currentImage}
          images={images}
          onClose={this.onClose}
          onClickPrev={this.onClickPrev}
          onClickNext={this.onClickNext}
          backdropClosesModal
        />
      </div>
    );
  }
}

export default Gallery;
