import React from 'react';
import styled from 'styled-components';

export const Styles = styled.div`
  display: flex;
  flex-direction: row;
  ul {
    list-style: none;
    padding: 0;
    font-size: 10px;
    margin: 0.2rem 0.2rem 0.2rem 0;
    li {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.2rem;
    }
    span {
      border: 1px solid var(--primary-dark);
      padding: 0.2rem;
    }
  }
`;

class AttributesInCart extends React.Component {
  render() {
    const { attributes } = this.props;
    console.log('AttributesInCart', { attributes });
    const attributeArray = Object.values(attributes);
    return (
      <Styles>
        {attributeArray.map(({ attribute, value }) => (
          <ul key={attribute.name}>
            <li key={attribute.id}>
              {' '}
              {(attribute.id === 'Touch ID in keyboard' ||
                attribute.id === 'With USB 3 ports') && (
                <span>{attribute.name}</span>
              )}
              <span> {value}</span>
            </li>
          </ul>
        ))}
      </Styles>
    );
  }
}

export default AttributesInCart;
