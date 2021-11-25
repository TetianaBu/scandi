import { gql } from '@apollo/client';

const CURRENCIES = gql`
  query getCurrencies {
    currencies
  }
`;

export default CURRENCIES;