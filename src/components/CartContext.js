import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartContextProvider extends Component {
  state = {
    itemsAddedToCart: []
  };

  addItemToCart = (productToAdd) => {
    this.setState((previousState) => {
      const existingItem = previousState.itemsAddedToCart.find(
        (item) => item.product.id === productToAdd.id
      );
      if (existingItem) {
        const newCartItems = [...previousState.itemsAddedToCart];
        const newItem = { ...existingItem, amount: existingItem.amount + 1 };
        const index = newCartItems.indexOf(existingItem);
        newCartItems.splice(index, 1, newItem);
        return {
          itemsAddedToCart: newCartItems
        };
      } else {
        return {
          itemsAddedToCart: [
            ...previousState.itemsAddedToCart,
            { product: productToAdd, amount: 1 }
          ]
        };
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <CartContext.Provider
        value={{
          itemsAddedToCart: this.state.itemsAddedToCart,
          addItemToCart: this.addItemToCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
