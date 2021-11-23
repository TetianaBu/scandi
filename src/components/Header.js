import React, { Component } from 'react';
import {
  HeaderStyles,
  NavMenuStyles,
  CartCurrencyStyles,
  CartIMg
} from './styles/HeaderStyles';
import logo from '../assets/icons/logo.svg';
import emptyCart from '../assets/icons/emptyCart.svg';
import CurrenciesList from './CurrencySwitcher';
import { NavLink } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import CATEGORIES from '../apollo/categoriesQuery';
import { CartContext } from './cart/CartContext';
import MenuCart from './minicart/MenuCart';

export class Header extends Component {
  static contextType = CartContext;
  state = { isCartOpen: false };
  toggleList = () => {
    this.setState((prevState) => ({ isCartOpen: !prevState.isCartOpen }));
  };
  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  render() {
    const { itemsAddedToCart } = this.context;
    const { isCartOpen } = this.state;
    const itemsAmount = itemsAddedToCart.reduce(
      (aggregator, current) => aggregator + current.amount,
      0
    );
    return (
      <HeaderStyles>
        <Query query={CATEGORIES}>
          {({ loading, data, error }) => {
            if (loading) return 'loading...';
            if (error) return 'error';
            if (data) {
              const { categories } = data;
              return (
                <NavMenuStyles>
                  <ul className="categories-nav-wrapper">
                    {categories.map((category, categoryIndex) => (
                      <li key={categoryIndex} className="categories-nav-item">
                        <NavLink to={category.name} activeClassName="nav-link">
                          {category.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </NavMenuStyles>
              );
            }
          }}
        </Query>
        <NavLink to={`/`}>
          <img src={logo} alt="logo" />
        </NavLink>
        <CartCurrencyStyles>
          <CurrenciesList />
          <button className="cart-wrapper" onClick={this.toggleList}>
            <CartIMg src={emptyCart} alt="cart" />
            {itemsAmount > 0 && (
              <span className="items-amount">{itemsAmount}</span>
            )}
          </button>
          {isCartOpen && <MenuCart onClose={this.closeCart} />}
        </CartCurrencyStyles>
      </HeaderStyles>
    );
  }
}

export default Header;
