import React, { Component } from 'react';
import {SizeStyles} from './styles/SizeStyles'

export class Size extends Component {
  render() {
    return (
      <SizeStyles>
        <p className="sizes-title">Size:</p>
        <div className="sizes-btn-wrapper">
        <button disabled>XS</button>
        <button>S</button>
        <button>M</button>
        <button>L</button>
        </div>
      </SizeStyles>
    );
  }
}

export default Size;
