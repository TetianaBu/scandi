import { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import CURRENCIES from '../apollo/currenciesQuery';

class CurrenciesList extends Component {
  render() {
    return (
      <Query query={CURRENCIES}>
        {({ loading, data, error }) => {
          if (loading) return 'loading...';
          if (error) return 'error';
          if (data) {
            const { currencies } = data;
            return (
              <div>
                {currencies.map((currency, currencyIndex) => (
                  <div key={currencyIndex}>
                    <input
                      type="radio"
                      name="currency"
                      id={currency}
                      value={currency}
                    />
                    <label htmlFor={currency}>{currency}</label>
                  </div>
                ))}
              </div>
            );
          }
        }}
      </Query>
    );
  }
}

export default CurrenciesList;