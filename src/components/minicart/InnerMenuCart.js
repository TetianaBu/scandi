import React from 'react';
import { getCurrencySymbol } from '../../lib/currency';
import ActionBtns from './ActionBtns';
import ItemInCart from './ItemInCart';

export default class InnerMenuCart extends React.Component {
  onClick = (event) => {
    if (
      this.wrapperRef &&
      this.props.cartToggleButtonRef &&
      !this.wrapperRef.current.contains(event.target) &&
      !this.props.cartToggleButtonRef.current.contains(event.target)
    ) {
      this.props.onClose();
    }
  };

  wrapperRef = React.createRef();

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  totalAmount = (itemsAddedToCart) =>
    itemsAddedToCart.reduce(
      (aggregator, current) => aggregator + current.amount,
      0
    );

  totalPrice = (itemsAddedToCart, currency) =>
    itemsAddedToCart.reduce((aggregator, current) => {
      let currentPrice = current.product.prices.find(
        (price) => price.currency === currency
      )?.amount;
      return aggregator + current.amount * currentPrice;
    }, 0);

  render() {
    const { itemsAddedToCart, currency, addItemToCart, removeItemFromCart } =
      this.props;
    const amount = this.totalAmount(itemsAddedToCart);
    let amountLabel = '';

    switch (amount) {
      case 0:
        amountLabel = ` is empty`;
        break;
      case 1:
        amountLabel = `, ${amount} item`;
        break;
      default:
        amountLabel = `, ${amount} items`;
    }

    return (
      <div ref={this.wrapperRef}>
        <p className="bag-title">
          <b>My Bag</b>
          {amountLabel}
        </p>
        {amount > 0 && (
          <div>
            {itemsAddedToCart.map((item, index) => (
              <ItemInCart
                item={item}
                key={index}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
                currency={currency}
              />
            ))}
            <div className="total-amount-wrapper">
              <p>
                <b>Total</b>
              </p>{' '}
              <p>
                {getCurrencySymbol(currency)}
                {this.totalPrice(itemsAddedToCart, currency).toFixed(2)}
              </p>
            </div>
            <ActionBtns onClose={this.props.onClose} />
          </div>
        )}
      </div>
    );
  }
}
