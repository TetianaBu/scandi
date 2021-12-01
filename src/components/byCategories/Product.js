import React, { Component } from 'react';
import {
  ProductStyles,
  ProductImageWrapper,
  ProductBtn
} from '../styles/ProductStyles';
import emptyCart from '../../assets/icons/emptyWhiteCart.svg';
import { CurrencyContext } from '../currencies/CurrencyContext';
import { getCurrencySymbol } from '../../lib/currency';
import { NavLink } from 'react-router-dom';
import { OutOfStockStyles } from '../styles/OutOfStockStyles';

export class Product extends Component {
  getPriceByCurrency = (currency) => {
    const { prices } = this.props.product;
    return prices.find((price) => price.currency === currency)?.amount;
  };
  render() {
    const { category } = this.props;
    const {
      id,
      name,
      brand,
      inStock,
      gallery: [firstImage]
    } = this.props.product;
    return (
      <ProductStyles>
        <NavLink to={`/${category}/${id}`}>
          <ProductImageWrapper>
            <img src={firstImage} className="product-img" alt={name} />
            <ProductBtn>
              <img src={emptyCart} alt="cart" className="cart-svg" />
            </ProductBtn>
          </ProductImageWrapper>
          <p className="product-title">
            {name} <span>{brand}</span>
          </p>
          <CurrencyContext.Consumer>
            {({ currency }) => (
              <p className="product-price">
                {getCurrencySymbol(currency)}
                {this.getPriceByCurrency(currency)}
              </p>
            )}
          </CurrencyContext.Consumer>
          {!inStock && <OutOfStockStyles>OUT OF STOCK</OutOfStockStyles>}
        </NavLink>
      </ProductStyles>
    );
  }
}

export default Product;
