import { gql } from '@apollo/client';

const CURRENCIES = gql`
  query {
    currencies
  }
`;

export default CURRENCIES;