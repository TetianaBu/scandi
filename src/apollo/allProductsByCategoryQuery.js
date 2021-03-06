import { gql } from '@apollo/client';

const ALL_PRODUCTS_BY_CATEGORY = gql`
  query category($category: String!) {
    category(input: { title: $category }) {
      name
      products {
        gallery
        id
        name
        prices {
          currency
          amount
        }
        inStock
        brand
        attributes {
          name
          type
          id
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;

export default ALL_PRODUCTS_BY_CATEGORY;
