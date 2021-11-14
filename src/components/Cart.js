import React from 'react';
import CartStyles from './styles/CartStyles';
import { CurrencyContext } from './CurrencyContext';
import { CartContext } from './CartContext';

class Cart extends React.Component {
  render() {
    return (
      <CartContext.Consumer>
        {({ itemsAddedToCart }) => (
          <CartStyles>
            {itemsAddedToCart.map((item, index) => (
              <p key={index}>{item.product.name}</p>
            ))}
          </CartStyles>
        )}
      </CartContext.Consumer>
    );
  }
}

export default Cart;
