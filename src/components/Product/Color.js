import React, { Component } from 'react';
import { ColorStyles } from '../styles/AttributesStyles';

export class Color extends Component {
  render() {
    const { colors } = this.props;
    return (
      <ColorStyles>
        <p className="color-title">Available colors:</p>
        <div>
          {colors.map((item, id) => (
            <button key={id} style={{ background: `${item.value}` }}></button>
          ))}
          </div>
      </ColorStyles>
    );
  }
}

export default Color;
