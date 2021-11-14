import { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { CurrenctSwitcherStyles } from './styles/CurrencySwitcherStyles';
import CURRENCIES from '../apollo/currenciesQuery';
import { CurrencyContext } from './CurrencyContext';
import { getCurrencyName, getCurrencySymbol } from '../lib/currency';

class CurrenciesList extends Component {
  static contextType = CurrencyContext;

  state = { isOpen: false };
  toggleList = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };
  onSelect = (currency) => {
    const { setCurrency } = this.context;
    setCurrency(currency);
    this.setState({ isOpen: false });
  };
  render() {
    const { currency: selectedCurrency } = this.context;
    const { isOpen } = this.state;

    return (
      <Query query={CURRENCIES}>
        {({ loading, data, error }) => {
          if (loading) return 'loading...';
          if (error) return 'error';
          if (data) {
            const { currencies } = data;
            return (
              <div>
                <button onClick={this.toggleList}>
                  {' '}
                  {getCurrencySymbol(selectedCurrency)} d{' '}
                </button>
                {isOpen && (
                  <CurrenctSwitcherStyles>
                    {currencies.map((currency) => (
                      <span key={currency}>
                        <input
                          checked={currency === selectedCurrency}
                          type="radio"
                          name="currency"
                          id={currency}
                          value={currency}
                          onChange={() => this.onSelect(currency)}
                        />
                        <label htmlFor={currency}>
                          {' '}
                          {getCurrencyName(currency)}
                        </label>
                      </span>
                    ))}
                  </CurrenctSwitcherStyles>
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
