import React, { Component } from 'react';
import {
  ProductItemStyles,
  ItemImageWrapper,
  ProductItemButton
} from './styles/ProductItemStyles';
import emptyCart from '../assets/icons/emptyWhiteCart.svg';
import { CurrencyContext } from './CurrencyContext';
import { CartContext } from './CartContext';
import { getCurrencySymbol } from '../lib/currency';

export class ProductItem extends Component {
  getPriceByCurrency = (currency) => {
    const { prices } = this.props.product;
    return prices.find((price) => price.currency === currency)?.amount;
  };
  render() {
    const {
      name,
      gallery: [firstImage]
    } = this.props.product;
    return (
      <CartContext.Consumer>
        {({ addItemToCart }) => (
          <ProductItemStyles>
            <ItemImageWrapper>
              <img src={firstImage} className="item-img" alt={name} />
              <ProductItemButton
                onClick={() => addItemToCart(this.props.product)}
              >
                <img src={emptyCart} alt="cart" className="cart-svg" />
              </ProductItemButton>
            </ItemImageWrapper>
            <p className="product-title">{name}</p>
            <CurrencyContext.Consumer>
              {({ currency }) => (
                <p className="product-price">
                  {this.getPriceByCurrency(currency)}{' '}
                  {getCurrencySymbol(currency)}
                </p>
              )}
            </CurrencyContext.Consumer>
          </ProductItemStyles>
        )}
      </CartContext.Consumer>
    );
  }
}

export default ProductItem;
