import React, { Component } from 'react';
import _ from 'lodash';

export const CartContext = React.createContext();

export class CartContextProvider extends Component {
  state = {
    itemsAddedToCart: [],
    selectedSizeIndex: 0
  };

  addItemToCart = (productToAdd, attributes) => {
    this.setState((previousState) => {
      const existingItem = previousState.itemsAddedToCart.find(
        (item) =>
          item.product.id === productToAdd.id &&
          _.isEqual(item.attributes, attributes)
      );
      if (existingItem) {
        const newCartItems = [...previousState.itemsAddedToCart];
        const newItem = {
          ...existingItem,
          amount: existingItem.amount + 1,
          attributes
        };
        const index = newCartItems.indexOf(existingItem);
        newCartItems.splice(index, 1, newItem);
        return {
          itemsAddedToCart: newCartItems
        };
      } else {
        return {
          itemsAddedToCart: [
            ...previousState.itemsAddedToCart,
            { product: productToAdd, amount: 1, attributes }
          ]
        };
      }
    });
  };

  removeItemFromCart = (productToRemove) => {
    this.setState((previousState) => {
      const existingItem = previousState.itemsAddedToCart.find(
        (item) => item.product.id === productToRemove.id
      );
      const newCartItems = [...previousState.itemsAddedToCart];
      const newItem = { ...existingItem, amount: existingItem.amount - 1 };
      const index = newCartItems.indexOf(existingItem);
      if (newItem.amount === 0) {
        newCartItems.splice(index, 1);
      } else {
        newCartItems.splice(index, 1, newItem);
      }
      return {
        itemsAddedToCart: newCartItems
      };
    });
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          itemsAddedToCart: this.state.itemsAddedToCart,
          addItemToCart: this.addItemToCart,
          removeItemFromCart: this.removeItemFromCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
