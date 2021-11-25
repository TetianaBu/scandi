import { gql } from '@apollo/client';

const CATEGORIES = gql`
  query getCategories {
    categories {
      name
    }
  }
`;

export default CATEGORIES;