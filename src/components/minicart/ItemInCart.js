import React from 'react';
import { ItemInCartStyles, AmountWrapper } from '../styles/MiniCartStyles';
import { getCurrencySymbol } from '../../lib/currency';
import AttributesInCart from '../cart/AttributesInCart';

export default class ItemInCart extends React.Component {
  render() {
    const { currency, addItemToCart, removeItemFromCart, item } = this.props;
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
              item.product.prices.find((price) => price.currency === currency)
                ?.amount * item.amount
            ).toFixed(2)}
          </p>
          {item.product.attributes && (
            <AttributesInCart attributes={item.product.attributes} />
          )}
        </div>
        <div className="row-with-gallery">
          <AmountWrapper>
            <button onClick={() => addItemToCart(item.product)}>&#43; </button>
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
    );
  }
}
