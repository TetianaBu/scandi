import React from 'react';
import styled from 'styled-components';

export const Styles = styled.div`
  button {
    width: 40px;
    height: 30px;
    font-size: 10px;
    padding: 0.1rem;
    background-color: white;
    border: 1px solid var(--primary-dark);
    margin-right: 0.2rem;
  }
  button:hover {
    background-color: var(--primary-dark);
    color: white;
  }
  div {
    p {
      display: none;
    }
    button {
      max-width: 35px;
      height: 25px;
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
        <pre>
          {attributeArray.map(({ attribute, value }) => (
            <div key={attribute.id}>
              {attribute.name}: {value}
            </div>
          ))}
        </pre>
      </Styles>
    );
  }
}

export default AttributesInCart;
