import React from 'react';
import {
  ProductDescriptionPageStyles,
  ProductDescription
} from '../styles/ProductDescriptionPageStyles';
import { Query } from '@apollo/client/react/components';
import PRODUCT_DETAILED_DESCRIPTION from '../../apollo/productDetailedDescriptionQuery';
import { CurrencyContext } from '../currencies/CurrencyContext';
import { CartContext } from '../cart/CartContext';
import { getCurrencySymbol } from '../../lib/currency';
import ProductDescriptionImg from './ProductDescriptionImg';
import Description from './Description';
import { Redirect } from 'react-router-dom';
import Attributes from './Attributes';

class ProductDescriptionPage extends React.Component {
  state = {
    selectedAttributes: {}
  };

  onAttributeSelect = ({ attribute, value }) => {
    this.setState(({ selectedAttributes }) => ({
      selectedAttributes: {
        ...selectedAttributes,
        [attribute.id]: { attribute, value }
      }
    }));
  };

  render() {
    const { id } = this.props;
    return (
      <Query query={PRODUCT_DETAILED_DESCRIPTION} variables={{ productID: id }}>
        {({ loading, data, error }) => {
          if (loading) return 'loading...';
          if (error) return <Redirect to="/404" />;
          if (data) {
            if (!data.product) {
              return <Redirect to="/404" />;
            }
            const {
              name,
              brand,
              description,
              prices,
              gallery,
              inStock,
              attributes
            } = data.product;

            return (
              <ProductDescriptionPageStyles>
                <ProductDescriptionImg
                  gallery={gallery}
                  name={name}
                  inStock={inStock}
                ></ProductDescriptionImg>
                <ProductDescription>
                  <div className="titles-wrapper">
                    <h1> {brand}</h1>
                    <h2> {name}</h2>
                  </div>

                  <Attributes
                    attributes={attributes}
                    onAttributeSelect={this.onAttributeSelect}
                    selectedAttributes={this.state.selectedAttributes}
                  />

                  <div className="price-wrapper">
                    <p className="price-title">Price:</p>
                    <CurrencyContext.Consumer>
                      {({ currency }) => (
                        <p className="price">
                          {getCurrencySymbol(currency)}
                          {
                            prices.find((price) => price.currency === currency)
                              ?.amount
                          }
                        </p>
                      )}
                    </CurrencyContext.Consumer>
                  </div>
                  <CartContext.Consumer>
                    {({ addItemToCart }) => (
                      <button
                        className="add-btn"
                        onClick={() =>
                          addItemToCart(
                            data.product,
                            this.state.selectedAttributes
                          )
                        }
                        disabled={!inStock}
                      >
                        {inStock ? ' Add to cart' : 'Sold Out!'}
                      </button>
                    )}
                  </CartContext.Consumer>
                  {{ description } && <Description text={description} />}
                </ProductDescription>
              </ProductDescriptionPageStyles>
            );
          }
        }}
      </Query>
    );
  }
}

export default ProductDescriptionPage;
