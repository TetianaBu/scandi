import React, { Component } from 'react';
import update from 'react-addons-update';

export const Context = React.createContext();

export class AppContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsAddedToCart: [],
      currency: ['USD', 0],
    };
  }

  setCurrency = (currency, index) => {
    this.setState({
      currency: [currency, index],
    });
  };

  setCurrencySign = (currency) => {
    switch (currency[0]) {
      case 'USD':
        return '$'
      case 'GBP':
        return '£';
      case 'AUD':
        return '$';
      case 'JPY':
        return '¥';
      case 'RUB':
        return '₽';
      default:
        return '$';
    }
  };

  addItemToCart = (item) => {
    this.setState((previousState) => {
      return {
        itemsAddedToCart: [...previousState.itemsAddedToCart, item],
      };
    });
  };

  setCounter = (counter, index) => {
    this.setState(
      update(this.state, {
        itemsAddedToCart: {
          [index]: {
            [this.state.itemsAddedToCart[index].length - 2]: {
              $set: counter,
            },
          },
        },
      })
    );
  };

  render() {
    return (
      <Context.Provider
        value={{
          itemsAddedToCart: this.state.itemsAddedToCart,
          currency: this.state.currency,
          setCurrency: this.setCurrency,
          setCurrencySign: this.setCurrencySign,
          addItemToCart: this.addItemToCart,
          setCounter: this.setCounter,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

