import React, { Component } from 'react';
import {SizeStyles} from './styles/SizeStyles'

export class Size extends Component {
  render() {
    return (
      <SizeStyles>
        <button disabled>XS</button>
        <button>S</button>
        <button>M</button>
        <button>L</button>
      </SizeStyles>
    );
  }
}

export default Size;
