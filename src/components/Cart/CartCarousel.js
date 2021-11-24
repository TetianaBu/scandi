import React from 'react';
import { CartCarouselStyles, ArrowBtn } from '../styles/CartCarouselStyles';
import arrowRight from '../../assets/icons/arrowRight.svg';
import arrowLeft from '../../assets/icons/arrowLeft.svg';

class CartCarousel extends React.Component {
  state = {
    imageIndex: 0
  };

  previousImage = () => {
    return this.state.imageIndex > 0
      ? this.setState((prevState) => {
          return {
            imageIndex: prevState.imageIndex - 1
          };
        })
      : false;
  };

  nextImage = (gallery) => {
    return this.state.imageIndex < gallery.length - 1
      ? this.setState((prevState) => {
          return {
            imageIndex: prevState.imageIndex + 1
          };
        })
      : false;
  };

  render() {
    const { gallery } = this.props;
    const displayedImage = gallery[this.state.imageIndex];
    return (
      <CartCarouselStyles>
        {gallery.length > 1 && (
          <ArrowBtn onClick={this.previousImage}>
            {' '}
            <img src={arrowRight} alt="arrow right" />
          </ArrowBtn>
        )}
        <div className="img-gallery">
          <img src={displayedImage} alt="item img" />
        </div>
        {gallery.length > 1 && (
          <ArrowBtn onClick={() => this.nextImage(gallery)}>
            {' '}
            <img src={arrowLeft} alt="arrow left" />
          </ArrowBtn>
        )}
      </CartCarouselStyles>
    );
  }
}

export default CartCarousel;
