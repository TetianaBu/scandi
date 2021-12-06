import React from 'react';
import { ProductInCartStyles, AmountWrapper } from '../styles/PopUpCartStyles';
import { getCurrencySymbol } from '../../lib/currency';
import AttributesInCart from '../Cart/AttributesInCart';

class ProductInCart extends React.Component {
  render() {
    const { currency, addItemToCart, removeItemFromCart, item } = this.props;
    return (
      <ProductInCartStyles>
        <div className="item-description">
          <div>
            <div className="titles-wrapper">
              <h4>{item.product.brand}</h4>
              <h5>{item.product.name}</h5>
            </div>
            <p className="price">
              {getCurrencySymbol(currency)}
              {(
                item.product.prices.find((price) => price.currency === currency)
                  ?.amount
              ).toFixed(2)}
            </p>
          </div>
          <AttributesInCart attributes={item.attributes} />
        </div>
        <div className="row-with-gallery">
          <AmountWrapper>
            <button
              onClick={() => addItemToCart(item.product, item.attributes)}
            >
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
      </ProductInCartStyles>
    );
  }
}

export default ProductInCart;
