import React from 'react';
import ProductDescriptionPageStyles from './styles/ProductDescriptionPageStyles';
import { Query } from '@apollo/client/react/components';
import PRODUCT_DETAILED_DESCRIPTION from '../apollo/productDetailedDescriptionQuery';

class ProductDescriptionPage extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <ProductDescriptionPageStyles>
        <Query query={PRODUCT_DETAILED_DESCRIPTION} variables={{ productID: id }}>
          {({ loading, data, error }) => {
            if (loading) return 'loading...';
            if (error) return 'error';
            if (data) {
              if (!data.product) {
                return 'Redirect';
              }
              const { name } = data.product;
              return (
                <div>
                    <div key={id}>{name}</div>
                </div>
              );
            }
          }}
        </Query>
      </ProductDescriptionPageStyles>
    );
  }
}

export default ProductDescriptionPage;
