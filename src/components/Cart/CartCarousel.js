import React from 'react';
import CartCarouselStyles from '../styles/CartCarouselStyles'
class CartCarousel extends React.Component {
  render() {
    return (
      <CartCarouselStyles>
        {([...this.props.children]).map((img, index) => (
          <img src={img} key={index} alt="item img" />
        ))}
      </CartCarouselStyles>
    );
  }
}

export default CartCarousel;
