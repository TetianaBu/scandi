import React from 'react';
import {
  SinglePhotoStyles,
  ProductDescriptionCarouselStyles
} from './styles/ProductDescriptionCarouselStyles';

class ProductDescriptionCarousel extends React.Component {
  render() {
    if (Object.keys(this.props.children).length === 0) {
      return 'Photo are not available for this product';
    }
    if (Object.keys(this.props.children).length === 1) {
      return (
        <SinglePhotoStyles>
          <img src={this.props.children} alt="item img" />
        </SinglePhotoStyles>
      );
    } else {
      return (
        <ProductDescriptionCarouselStyles>
          <div class="gallery">
            {[...this.props.children].map((img, index) => (
              <img src={img} key={index} alt="item img" />
            ))}
          </div>
          <img src={this.props.children[0]} alt="item img" />
        </ProductDescriptionCarouselStyles>
      );
    }
  }
}

export default ProductDescriptionCarousel;
