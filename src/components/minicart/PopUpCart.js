import React from 'react';
import { CurrencyContext } from '../currencies/CurrencyContext';
import { CartContext } from '../cart/CartContext';
import InnerPopUpCart from './InnerPopUpCart';
import { MenuCartStyles, OuterWrapper } from '../styles/MiniCartStyles';

class PopUpCart extends React.Component {
  render() {
    const { onClose, cartToggleButtonRef } = this.props;
    return (
      <OuterWrapper>
        <MenuCartStyles>
          <CurrencyContext.Consumer>
            {({ currency }) => (
              <CartContext.Consumer>
                {({ itemsAddedToCart, addItemToCart, removeItemFromCart }) => (
                  <InnerPopUpCart
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

export default PopUpCart;
