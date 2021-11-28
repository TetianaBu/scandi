import React from 'react';
import { Query } from '@apollo/client/react/components';
import PRODUCT_DETAILED_DESCRIPTION from '../../apollo/productDetailedDescriptionQuery';
import { Redirect } from 'react-router-dom';
import Product from './Product';

class ProductMain extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <Query query={PRODUCT_DETAILED_DESCRIPTION} variables={{ productID: id }}>
        {({ loading, data, error }) => {
          if (loading) return 'loading...';
          if (error) return <Redirect to="/404" />;
          if (data) {
            if (!data.product) {
              return <Redirect to="/404"/>;
            }
            return <Product product={data.product} />;
          }
        }}
      </Query>
    );
  }
}

export default ProductMain;
