import React from 'react';
import { CurrencyContext } from '../currencies/CurrencyContext';
import { CartContext } from '../Cart/CartContext';
import InnerPopUpCart from './InnerPopUpCart';
import { PopUpCartStyles, OuterWrapper } from '../styles/PopUpCartStyles';

class PopUpCart extends React.Component {
  render() {
    const { onClose, cartToggleButtonRef } = this.props;
    return (
      <OuterWrapper>
        <PopUpCartStyles>
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
        </PopUpCartStyles>
      </OuterWrapper>
    );
  }
}

export default PopUpCart;
