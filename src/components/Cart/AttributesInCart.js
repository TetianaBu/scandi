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
`;

class AttributesInCart extends React.Component {
  render() {
    const { attributes } = this.props;
    const capacity = attributes.find((a) => a.id === 'Capacity')?.items;
    const sizes = attributes.find((a) => a.id === 'Size')?.items;
    console.log(attributes);
    return (
      <Styles>
        {capacity && (
          <div className="tech-attr-wrapper">
            {capacity.map((item, id) => (
              <button key={id}>{item.value}</button>
            ))}
          </div>
        )}
        {sizes && (
          <>
            {sizes.map((item, id) => (
              <button key={id}>{item.value}</button>
            ))}
          </>
        )}
      </Styles>
    );
  }
}

export default AttributesInCart;
