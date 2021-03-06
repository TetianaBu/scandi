import styled from 'styled-components';

export const ProductDescriptionPageStyles = styled.article`
  display: grid;
  grid-template-columns: 55% 292px;
  column-gap: 5%;
  padding: 3rem;
`;

export const ProductDescriptionStyles = styled.div`
  .add-btn {
    background-color: var(--primary-light);
    border: none;
    color: var(--white);
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    width: 292px;
    height: 52px;
    margin-bottom: 2rem;
    &:hover {
      background-color: var(--primary-light-btn);
    }
    &:disabled {
      background-color: var(--light-grey);
      &:hover {
        background-color: var(--light-grey);
      }
    }
  }
  .price-title {
    text-transform: uppercase;
    margin-bottom: 0.2rem;
  }
  .price {
    margin-top: 0;
    font-weight: 700;
    font-size: 24px;
  }
`;
