import React, { Component } from 'react';
import { SizeStyles } from '../styles/AttributesStyles';

export class Size extends Component {
  state = {
    selectedSizeIndex: 0,
  }

  onSel = (id) => {
      this.setState({ selectedSizeIndex: id });
  }
  render() {
    const {selectedSizeIndex } = this.state
    console.log(selectedSizeIndex)
    const { sizes } = this.props;
    return (
      <SizeStyles>
        <p className="sizes-title">Size:</p>
        <div className="sizes-btn-wrapper">
          {sizes.map((item, id) => (
            <button key={id} 
            onClick={() => this.onSel(id)} className={`${id === selectedSizeIndex ? "selected" : ""}`}
            >{item.value}</button>
          ))}
        </div>
      </SizeStyles>
    );
  }
}

export default Size;
