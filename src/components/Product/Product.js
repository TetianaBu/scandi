import React from 'react';
import {
  ProductDescriptionPageStyles,
  ProductDescriptionStyles
} from '../styles/ProductDescriptionPageStyles';
import { CurrencyContext } from '../currencies/CurrencyContext';
import { CartContext } from '../cart/CartContext';
import { getCurrencySymbol } from '../../lib/currency';
import { setDefaultAttr } from '../../lib/setDefaultAttr';
import ProductDescriptionImg from './ProductDescriptionImg';
import Description from './Description';
import Attributes from './Attributes';

class Product extends React.Component {
  state = {
    selectedAttributes: {}
  };

  onAttributeSelect = ({ attribute, value, displayValue }) => {
    this.setState(({ selectedAttributes }) => ({
      selectedAttributes: {
        ...selectedAttributes,
        [attribute.id]: { attribute, value, displayValue }
      }
    }));
  };

  componentDidMount() {
    const attributes = this.props.product?.attributes;
    if (attributes) {
      this.setState({
        selectedAttributes: setDefaultAttr(attributes)
      });
    }
  }

  render() {
    const { name, brand, description, prices, gallery, inStock, attributes } =
      this.props.product;
    return (
      <ProductDescriptionPageStyles>
        <ProductDescriptionImg
          gallery={gallery}
          name={name}
          inStock={inStock}
        ></ProductDescriptionImg>
        <ProductDescriptionStyles>
          <div className="titles-wrapper">
            <h1> {brand}</h1>
            <h2> {name}</h2>
          </div>
          {attributes.length > 0 && (
            <Attributes
              attributes={attributes}
              onAttributeSelect={this.onAttributeSelect}
              selectedAttributes={this.state.selectedAttributes}
            />
          )}
          <div className="price-wrapper">
            <p className="price-title">Price:</p>
            <CurrencyContext.Consumer>
              {({ currency }) => (
                <p className="price">
                  {getCurrencySymbol(currency)}
                  {prices.find((price) => price.currency === currency)?.amount}
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
                    this.props.product,
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
        </ProductDescriptionStyles>
      </ProductDescriptionPageStyles>
    );
  }
}

export default Product;
