import React from 'react';
import { getCurrencySymbol } from '../../lib/currency';
import { NavLink } from 'react-router-dom';
import {
  ItemInCartStyles,
  SizesButtonStyles,
  AmountWrapper,
  ActionBtnStyles
} from '../styles/MenuCartStyles';

export default class InnerMenuCart extends React.Component {
  totalAmount = (itemsAddedToCart) =>
    itemsAddedToCart.reduce(
      (aggregator, current) => aggregator + current.amount,
      0
    );
  totalPrice = (itemsAddedToCart, currency) =>
    itemsAddedToCart.reduce((aggregator, current) => {
      let currentPrice = current.product.prices.find(
        (price) => price.currency === currency
      )?.amount;
      return aggregator + current.amount * currentPrice;
    }, 0);

  render() {
    const { itemsAddedToCart, currency, addItemToCart, removeItemFromCart } =
      this.props;
    console.log(itemsAddedToCart);
    const amount = this.totalAmount(itemsAddedToCart);
    let amountLabel = '';
    switch (amount) {
      case 0:
        amountLabel = ` is empty`;
        break;
      case 1:
        amountLabel = `, ${amount} item`;
        break;
      default:
        amountLabel = `, ${amount} items`;
    }
    return (
      <div>
        <p className="bag-title">
          <b>My Bag</b>
          {amountLabel}
        </p>
        {amount > 0 && (
          <div>
            {itemsAddedToCart.map((item, index) => (
              <ItemInCartStyles key={index}>
                <div className="item-description">
                  <div className="titles-wrapper">
                    <h4>{item.product.brand}</h4>
                    <h5>{item.product.name}</h5>
                  </div>
                  <p className="price">
                    {getCurrencySymbol(currency)}
                    {item.product.prices.find(
                      (price) => price.currency === currency
                    )?.amount * item.amount}
                  </p>
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
              <p>
                <b>Total</b>
              </p>{' '}
              <p>
                {getCurrencySymbol(currency)}
                {this.totalPrice(itemsAddedToCart, currency)}
              </p>
            </div>
            <ActionBtnStyles>
              <button className="btn-view-bag" onClick={this.props.onClose}>
                <NavLink to={`/cart`}>View bag</NavLink>
              </button>
              <button className="btn-check-out">Check Out</button>
            </ActionBtnStyles>
          </div>
        )}
      </div>
    );
  }
}
