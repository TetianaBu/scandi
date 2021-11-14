import React, { Component } from 'react';

export const CurrencyContext = React.createContext();

export class CurrencyContextProvider extends Component {
  state = {
    currency: 'USD'
  };

  setCurrency = (currency) => {
    this.setState({
      currency
    });
  };

  render() {
    return (
      <CurrencyContext.Provider
        value={{
          currency: this.state.currency,
          setCurrency: this.setCurrency
        }}
      >
        {this.props.children}
      </CurrencyContext.Provider>
    );
  }
}
