import React from 'react';
import { CurrencyContext } from '../CurrencyContext';
import { CartContext } from '../cart/CartContext';
import InnerMenuCart from './InnerMenuCart';
import { MenuCartStyles } from '../styles/MenuCartStyles';

class MenuCart extends React.Component {
  render() {
    const { onClose } = this.props;
    return (
      <MenuCartStyles>
        <CurrencyContext.Consumer>
          {({ currency }) => (
            <CartContext.Consumer>
              {({ itemsAddedToCart, addItemToCart, removeItemFromCart }) => (
                <InnerMenuCart
                  itemsAddedToCart={itemsAddedToCart}
                  addItemToCart={addItemToCart}
                  removeItemFromCart={removeItemFromCart}
                  currency={currency}
                  onClose={onClose}
                />
              )}
            </CartContext.Consumer>
          )}
        </CurrencyContext.Consumer>
      </MenuCartStyles>
    );
  }
}

export default MenuCart;
