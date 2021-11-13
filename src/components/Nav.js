import React, { Component } from 'react';
import NavStyles from './styles/NavStyles';
import logo from '../assets/logo.svg';
import emptyCart from '../assets/emptyCart.svg';
import CurrenciesList from './CurrecySwitcher'
import { NavLink } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import CATEGORIES from '../apollo/categoriesQuery';

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
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
                    <li key={categoryIndex}>
                      <NavLink
                        to={category.name}
                        activeStyle={{
                          color: 'green'
                        }}
                      >
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
        <div>
          <CurrenciesList />
          <select>
          </select>
          <NavLink to={`/cart`}>
            <img src={emptyCart} alt="logo" />
          </NavLink>
        </div>
      </NavStyles>
    );
  }
}

export default Nav;
