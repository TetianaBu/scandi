import { gql } from '@apollo/client';

const CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export default CATEGORIES;