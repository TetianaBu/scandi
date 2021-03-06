import React, { Component } from 'react';
import {
  HeaderStyles,
  CartCurrencyStyles,
  CartImg
} from '../styles/HeaderStyles';
import logo from '../../assets/icons/logo.svg';
import emptyCart from '../../assets/icons/emptyCart.svg';
import CurrenciesList from '../currencies/CurrencySwitcher';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import PopUpCart from '../popupcart/PopUpCart';
import Nav from './Nav';

export class Header extends Component {
  static contextType = CartContext;

  cartToggleButtonRef = React.createRef();

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
        <Nav />
        <NavLink to={`/`}>
          <img src={logo} alt="logo" />
        </NavLink>
        <CartCurrencyStyles>
          <CurrenciesList />
          <button
            ref={this.cartToggleButtonRef}
            className="cart-wrapper"
            onClick={this.toggleList}
          >
            <CartImg src={emptyCart} alt="cart" />
            {itemsAmount > 0 && (
              <span className="items-amount">{itemsAmount}</span>
            )}
          </button>
          {isCartOpen && (
            <PopUpCart
              onClose={this.closeCart}
              cartToggleButtonRef={this.cartToggleButtonRef}
            />
          )}
        </CartCurrencyStyles>
      </HeaderStyles>
    );
  }
}

export default Header;
