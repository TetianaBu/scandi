import React from 'react';
import {
  CartStyles,
  ItemInCartStyles,
  AmountWrapper
} from '../styles/CartStyles';
import { CurrencyContext } from '../currencies/CurrencyContext';
import { CartContext } from './CartContext';
import { getCurrencySymbol } from '../../lib/currency';
import CartCarousel from './CartCarousel';
import AttributesInCart from './AttributesInCart';

class Cart extends React.Component {
  render() {
    return (
      <CartContext.Consumer>
        {({ itemsAddedToCart, addItemToCart, removeItemFromCart }) => (
          <CartStyles>
            <h1>Cart</h1>
            {itemsAddedToCart.length === 0 && <p>Your cart is empty</p>}
            {itemsAddedToCart.map((item, index) => (
              <ItemInCartStyles key={item.product.id + index}>
                <div className="item-description">
                  <h4>{item.product.brand}</h4>
                  <h5>{item.product.name}</h5>
                  <CurrencyContext.Consumer>
                    {({ currency }) => (
                      <p className="price">
                        {getCurrencySymbol(currency)}
                        {(
                          item.product.prices.find(
                            (price) => price.currency === currency
                          )?.amount
                        ).toFixed(2)}
                      </p>
                    )}
                  </CurrencyContext.Consumer>
                  <AttributesInCart attributes={item.attributes} />
                </div>
                <div className="row-with-gallery">
                  <AmountWrapper>
                    <button
                      onClick={() =>
                        addItemToCart(item.product, item.attributes)
                      }
                    >
                      &#43;{' '}
                    </button>
                    <p>{item.amount}</p>
                    <button onClick={() => removeItemFromCart(item.product)}>
                      &#8211;{' '}
                    </button>
                  </AmountWrapper>
                  <CartCarousel gallery={item.product.gallery}></CartCarousel>
                </div>
              </ItemInCartStyles>
            ))}
          </CartStyles>
        )}
      </CartContext.Consumer>
    );
  }
}

export default Cart;
