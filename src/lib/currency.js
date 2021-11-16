const currencySymbols = {
  USD: { symbol: '$', name: '$ USD' },
  GBP: { symbol: '£', name: '£ GBP' },
  AUD: { symbol: '$AUD', name: '$ AUD' },
  JPY: { symbol: '¥', name: '¥ JPY' },
  RUB: { symbol: '₽', name: '₽ RUB' }
};

export const getCurrencySymbol = (currency) =>
  currencySymbols[currency]?.symbol ?? currency;

export const getCurrencyName = (currency) =>
  currencySymbols[currency]?.name ?? currency;
