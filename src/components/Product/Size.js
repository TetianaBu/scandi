import React, { Component } from 'react';
import { SizeStyles } from '../styles/AttributesStyles';

export class Size extends Component {
  render() {
    const { sizes } = this.props;
    return (
      <SizeStyles>
        <p className="sizes-title">Size:</p>
        <div className="sizes-btn-wrapper">
          {sizes.map((item, id) => (
            <button key={id}>{item.value}</button>
          ))}
        </div>
      </SizeStyles>
    );
  }
}

export default Size;

//<button disabled>XS</button>
