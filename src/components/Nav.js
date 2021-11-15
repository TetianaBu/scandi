import React, { Component } from 'react';
import { NavStyles, CartIMg } from './styles/NavStyles';
import logo from '../assets/icons/logo.svg';
import emptyCart from '../assets/icons/emptyCart.svg';
import CurrenciesList from './CurrencySwitcher';
import { NavLink } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import CATEGORIES from '../apollo/categoriesQuery';
import { CartContext } from './CartContext';

export class Nav extends Component {
  static contextType = CartContext;

  render() {
    const { itemsAddedToCart } = this.context;

    const itemsAmount = itemsAddedToCart.reduce(
      (aggregator, current) => aggregator + current.amount,
      0
    );
    return (
      <NavStyles>
        <Query query={CATEGORIES}>
          {({ loading, data, error }) => {
            if (loading) return 'loading...';
            if (error) return 'error';
            if (data) {
              const { categories } = data;
              return (
                <ul>
                  {categories.map((category, categoryIndex) => (
                    <li key={categoryIndex} className="categories-nav">
                      <NavLink to={category.name} activeClassName="nav-link">
                        {category.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              );
            }
          }}
        </Query>
        <NavLink to={`/`}>
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="cart-currency-wrapper">
          <CurrenciesList />
          <span className="cart-wrapper">
            <NavLink to={`/cart`}>
              <CartIMg src={emptyCart} alt="cart" />
              {itemsAmount > 0 && (
                <span className="items-amount">{itemsAmount}</span>
              )}
            </NavLink>
          </span>
        </div>
      </NavStyles>
    );
  }
}

export default Nav;
