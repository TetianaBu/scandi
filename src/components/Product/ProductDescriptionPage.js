import React from 'react';
import {ProductDescriptionPageStyles, ProductDescription} from '../styles/ProductDescriptionPageStyles';
import { Query } from '@apollo/client/react/components';
import PRODUCT_DETAILED_DESCRIPTION from '../../apollo/productDetailedDescriptionQuery';
import { CurrencyContext } from '../currencies/CurrencyContext';
import { CartContext } from '../cart/CartContext';
import { getCurrencySymbol } from '../../lib/currency';
import Size from './Size';
import ProductDescriptionImg from './ProductDescriptionImg';
import Description from './Description';
import { Redirect } from 'react-router-dom';
import Color from './Color';
import TechAttributes from './TechAttributes';

class ProductDescriptionPage extends React.Component {
  render() {
    const { id, category } = this.props;
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
            const sizes = attributes.find((a) => a.id === 'Size');
            const colors = attributes.find((a) => a.id === 'Color');

            return (
              <ProductDescriptionPageStyles>
                <ProductDescriptionImg
                  gallery={gallery}
                  name={name}
                  inStock={inStock}
                ></ProductDescriptionImg>
                <ProductDescription key={id}>
                  <div className="titles-wrapper">
                    <h1> {brand}</h1>
                    <h2> {name}</h2>
                  </div>
                  {sizes && <Size sizes={sizes.items} />}
                  {colors && <Color colors={colors.items} />}
                  {category === 'tech' && (
                    <TechAttributes attributes={attributes} />
                  )}
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
                        onClick={() => addItemToCart(data.product)}
                        disabled={!inStock}
                      >
                        Add to cart
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
