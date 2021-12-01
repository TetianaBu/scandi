import React, { Component } from 'react';
import {
  ProductStyles,
  ProductImageWrapper,
  ProductBtn
} from '../styles/ProductStyles';
import emptyCart from '../../assets/icons/emptyWhiteCart.svg';
import { CurrencyContext } from '../currencies/CurrencyContext';
import { CartContext } from '../cart/CartContext';
import { getCurrencySymbol } from '../../lib/currency';
import { setDefaultAttr } from '../../lib/setDefaultAttr';
import { NavLink } from 'react-router-dom';
import { OutOfStockStyles } from '../styles/OutOfStockStyles';

export class ProductOnCategoryPage extends Component {
  state = {
    selectedAttributes: {}
  };
  getPriceByCurrency = (currency) => {
    const { prices } = this.props.product;
    return prices.find((price) => price.currency === currency)?.amount;
  };

  componentDidMount() {
    const attributes = this.props.product?.attributes;
    if (attributes) {
      this.setState({
        selectedAttributes: setDefaultAttr(attributes)
      });
    }
  }

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
        <ProductImageWrapper>
          <NavLink to={`/${category}/${id}`}>
            <img src={firstImage} className="product-img" alt={name} />
          </NavLink>

          <CartContext.Consumer>
            {({ addItemToCart }) => (
              <ProductBtn
                onClick={() =>
                  addItemToCart(
                    this.props.product,
                    this.state.selectedAttributes
                  )
                }
                disabled={!inStock}
              >
                <img src={emptyCart} alt="cart" className="cart-svg" />
              </ProductBtn>
            )}
          </CartContext.Consumer>
        </ProductImageWrapper>
        <NavLink to={`/${category}/${id}`}>
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
        </NavLink>

        {!inStock && (
          <NavLink to={`/${category}/${id}`}>
            <OutOfStockStyles>OUT OF STOCK</OutOfStockStyles>{' '}
          </NavLink>
        )}
      </ProductStyles>
    );
  }
}

export default ProductOnCategoryPage;
