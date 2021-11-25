import React, { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { CurrenciesBtn } from '../styles/CurrencySwitcherStyles';
import { Redirect } from 'react-router-dom';
import CURRENCIES from '../../apollo/currenciesQuery';
import { CurrencyContext } from './CurrencyContext';
import { getCurrencySymbol } from '../../lib/currency';
import arrowDown from '../../assets/icons/arrowDown.svg';
import arrowUp from '../../assets/icons/arrowUp.svg';
import CurrenciesCart from './CurrencyCart';

class CurrenciesList extends Component {
  static contextType = CurrencyContext;
  currenciesToggleBtnRef = React.createRef();

  state = { isOpen: false };

  toggleList = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  onSelect = (currency) => {
    const { setCurrency } = this.context;
    setCurrency(currency);
    this.setState({ isOpen: false });
  };
  onClickOutside = (currency) => {
    this.setState({ isOpen: false });
  };

  render() {
    const { currency: selectedCurrency } = this.context;
    const { isOpen } = this.state;
    return (
      <Query query={CURRENCIES}>
        {({ loading, data, error }) => {
          if (loading) return 'loading...';
          if (error) return <Redirect to="/404" />;
          if (data) {
            const { currencies } = data;
            return (
              <div>
                <CurrenciesBtn
                  onClick={this.toggleList}
                  ref={this.currenciesToggleBtnRef}
                >
                  {' '}
                  {getCurrencySymbol(selectedCurrency)}{' '}
                  {!isOpen && <img src={arrowDown} alt="arrow" />}
                  {isOpen && <img src={arrowUp} alt="arrow" />}
                </CurrenciesBtn>
                {isOpen && (
                  <CurrenciesCart
                    isOpen={this.state}
                    currencies={currencies}
                    selectedCurrency={selectedCurrency}
                    onSelect={this.onSelect}
                    onClickOutside={this.onClickOutside}
                    currenciesToggleBtnRef={this.currenciesToggleBtnRef}
                  />
                )}
              </div>
            );
          }
        }}
      </Query>
    );
  }
}

export default CurrenciesList;
