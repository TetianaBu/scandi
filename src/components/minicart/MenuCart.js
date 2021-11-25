import React from 'react';
import { CurrencyContext } from '../currencies/CurrencyContext';
import { CartContext } from '../cart/CartContext';
import InnerMenuCart from './InnerMenuCart';
import { MenuCartStyles, OuterWrapper } from '../styles/MiniCartStyles';

class MenuCart extends React.Component {
  render() {
    const { onClose, cartToggleButtonRef } = this.props;
    return (
      <OuterWrapper>
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
                    cartToggleButtonRef={cartToggleButtonRef}
                  />
                )}
              </CartContext.Consumer>
            )}
          </CurrencyContext.Consumer>
        </MenuCartStyles>
      </OuterWrapper>
    );
  }
}

export default MenuCart;
