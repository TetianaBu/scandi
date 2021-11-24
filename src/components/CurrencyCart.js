import React, { Component } from 'react';
import { CurrenctSwitcherStyles } from './styles/CurrencySwitcherStyles';
import { getCurrencyName } from '../lib/currency';

class CurrenciesCart extends Component {
  wrapperRef = React.createRef();

  onClick = (event) => {
    if (
      this.wrapperRef &&
      this.props.currenciesToggleBtnRef &&
      !this.wrapperRef.current.contains(event.target) &&
      !this.props.currenciesToggleBtnRef.current.contains(event.target)
    ) {
      this.props.onClickOutside();
    }
  };

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  render() {
    const { currencies, selectedCurrency, onSelect } = this.props;
    return (
      <CurrenctSwitcherStyles ref={this.wrapperRef}>
        {currencies.map((currency) => (
          <span key={currency}>
            <input
              checked={currency === selectedCurrency}
              type="radio"
              name="currency"
              id={currency}
              value={currency}
              onChange={() => onSelect(currency)}
            />
            <label htmlFor={currency}> {getCurrencyName(currency)}</label>
          </span>
        ))}
      </CurrenctSwitcherStyles>
    );
  }
}

export default CurrenciesCart;
