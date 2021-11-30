import React from 'react';
import { AttrInPopUpCartStyles } from '../styles/AttributesStyles';

class AttributesInCart extends React.Component {
  render() {
    const { attributes } = this.props;
    const attributeArray = Object.values(attributes);

    return (
      <AttrInPopUpCartStyles>
        {attributeArray.map(({ attribute, value, displayValue }) => (
          <p key={attribute.id}>
            {attribute.id === 'Touch ID in keyboard' && value === 'Yes' && (
              <span className="with">{attribute.name}</span>
            )}
            {attribute.id === 'With USB 3 ports' && value === 'Yes' && (
              <span>{attribute.name}</span>
            )}
            {attribute.id !== 'Touch ID in keyboard' &&
              attribute.id !== 'With USB 3 ports' &&
              attribute.id !== 'Color' && <span>{value}</span>}
            {attribute.id === 'Color' && (
              <span className="width" style={{ background: `${value}`, color: `${value}` }}>
                {displayValue}
              </span>
            )}
          </p>
        ))}
      </AttrInPopUpCartStyles>
    );
  }
}

export default AttributesInCart;
