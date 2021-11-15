import styled from 'styled-components';

export const CartStyles = styled.div`
  display: grid;
  padding: 3rem 2rem;
  h4,
  h5,
  p {
    margin: 0;
  }
`;
export const ItemInCartStyles = styled.div`
  display: grid;
  grid-template-columns: 300px 200px;
  height: 225px;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px 0;
  margin-bottom: 20px;
  border-top: 1px solid var(--primary-dark);
  .row-with-gallery {
    display: flex;
    flex-direction: row;
  }
  .item-description {
    display: grid;
    height: 100%;
    align-content: space-between;
  }
  h4,
  h5 {
    font-size: 30px;
    line-height: 27px;
  }
  h4 {
    font-weight: 600;
  }
  h5 {
    font-weight: 400;
  }
  .price {
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
  }
`;
export const SizesButtonStyles = styled.div`
  display: flex;
  flex-direction: row;
  button {
    background-color: white;
    height: 45px;
    width: 63px;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid var(--primary-dark);
    font-family: 'Source Sans Pro', sans-serif;
    margin-right: 12px;
  }
`;
export const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  button {
    background-color: white;
    height: 45px;
    width: 45px;
    font-size: 24px;
    font-weight: 200;
    border: 1px solid var(--primary-dark);
  }
`;
