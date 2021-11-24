import React from "react";
import {
  ItemInCartStyles,
  SizesButtonStyles,
  AmountWrapper
} from '../styles/MenuCartStyles';
import { getCurrencySymbol } from '../../lib/currency';

export default class ItemInCart extends React.Component {
  render() {
    const { currency, addItemToCart, removeItemFromCart, item } =
    this.props;
    return (
      <ItemInCartStyles>
      <div className="item-description">
        <div className="titles-wrapper">
          <h4>{item.product.brand}</h4>
          <h5>{item.product.name}</h5>
        </div>
        <p className="price">
          {getCurrencySymbol(currency)}
          {(
            item.product.prices.find(
              (price) => price.currency === currency
            )?.amount * item.amount
          ).toFixed(2)}
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
    )
  }
}