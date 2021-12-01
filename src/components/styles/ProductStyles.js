import styled from 'styled-components';

export const ProductStyles = styled.article`
  display: grid;
  width: 386px;
  max-height: 444px;
  padding: 2rem 1rem;
  position: relative;
  &:hover,
  &:focus {
    box-shadow: 2px 2px 41px -7px rgba(181, 181, 185, 1);
  }
  &:hover button {
    visibility: visible;
  }
  .product-title,
  .product-price {
    margin: 0;
    font-size: 18px;
  }
  .product-title {
    font-weight: 300;
  }
  .product-price {
    font-weight: 500;
  }
`;

export const ProductImageWrapper = styled.div`
  margin-bottom: 0.5rem;
  position: relative;
  .product-img {
    height: 330px;
    width: 354px;
    object-fit: cover;
  }
`;

export const ProductBtn = styled.button`
  background-color: var(--primary-light);
  border-radius: 50%;
  height: 52px;
  width: 52px;
  border: none;
  position: absolute;
  top: 90%;
  left: 82%;
  cursor: pointer;
  visibility: hidden;
  .cart-svg {
    height: 24px;
    width: 24px;
  }
`;
