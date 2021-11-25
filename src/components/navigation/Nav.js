import React, { Component } from 'react';
import { NavMenuStyles } from '../styles/NavStyles';
import { NavLink, Redirect } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import CATEGORIES from '../../apollo/categoriesQuery';

export class Nav extends Component {
  render() {
    return (
      <Query query={CATEGORIES}>
        {({ loading, data, error }) => {
          if (loading) return 'loading...';
          if (error) return <Redirect to="/404"/>;
          if (data) {
            const { categories } = data;
            return (
              <NavMenuStyles>
                <ul className="categories-nav-wrapper">
                  {categories.map((category, categoryIndex) => (
                    <li key={categoryIndex} className="categories-nav-item">
                      <NavLink to={`/${category.name}`} activeClassName="nav-link">{category.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </NavMenuStyles>
            );
          }
        }}
      </Query>
    );
  }
}

export default Nav;
