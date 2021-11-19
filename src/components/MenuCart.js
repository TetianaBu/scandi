import React from 'react';
import { CurrencyContext } from './CurrencyContext';
import { CartContext } from './CartContext';
import { getCurrencySymbol } from '../lib/currency';
import { NavLink } from 'react-router-dom';
import {
  MenuCartStyles,
  ItemInCartStyles,
  SizesButtonStyles,
  AmountWrapper
} from './styles/MenuCartStyles';
class MenuCart extends React.Component {
  render() {
    return (
      <MenuCartStyles>
        <CartContext.Consumer>
          {({
            itemsAddedToCart,
            addItemToCart,
            removeItemFromCart,
            itemsAmountContext
          }) => (
            <>
              <h4 className="bag-title">
                My Bag
                {itemsAddedToCart.reduce(
                  (aggregator, current) => aggregator + current.amount,
                  0
                ) === 0
                  ? ` is empty`
                  : ` items`}
              </h4>

              {itemsAddedToCart.map((item, index) => (
                <ItemInCartStyles key={index}>
                  <div className="item-description">
                    <div className="titles-wrapper">
                      <h4>{item.product.brand}</h4>
                      <h5>{item.product.name}</h5>
                    </div>
                    <CurrencyContext.Consumer>
                      {({ currency }) => (
                        <p className="price">
                          {getCurrencySymbol(currency)}
                          {
                            item.product.prices.find(
                              (price) => price.currency === currency
                            )?.amount
                          }
                        </p>
                      )}
                    </CurrencyContext.Consumer>
                    <SizesButtonStyles>
                      <button>S</button>
                      <button>M</button>{' '}
                    </SizesButtonStyles>
                  </div>
                  <div className="row-with-gallery">
                    <AmountWrapper>
                      <button onClick={() => addItemToCart(item.product)}>
                        &#43;{' '}
                      </button>
                      <p>{item.amount}</p>
                      <button onClick={() => removeItemFromCart(item.product)}>
                        &#8211;{' '}
                      </button>
                    </AmountWrapper>
                    <img
                      src={item.product.gallery[0]}
                      alt={item.name}
                      className="img-cart"
                    />
                  </div>
                </ItemInCartStyles>
              ))}
              <div className="total-amount-wrapper">
                <p>total</p> <p>sum</p>
              </div>
              <div className="action-btn-wrapper">
                <button className="btn-view-bag">
                  <NavLink to={`/cart`}>Check Out</NavLink>
                </button>
                <button className="btn-check-out">View bag</button>
              </div>
            </>
          )}
        </CartContext.Consumer>
      </MenuCartStyles>
    );
  }
}

export default MenuCart;
