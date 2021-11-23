import styled from 'styled-components';

export const MenuCartStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  max-height: 700px;
  position: absolute;
  background-color: white;
  top: 100%;
  right: 5%;
  padding: 0 16px;
  z-index: 2;
  h4,
  h5,
  p {
    margin: 0;
    padding-bottom: 0;
  }
  .total-amount-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
  .action-btn-wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    button {
      height: 43px;
      width: 140px;
      text-transform: uppercase;
    }
    .btn-view-bag {
      background-color: white;
      border: 1px solid var(--primary-dark);
    }
    .btn-check-out {
      background-color: var(--primary-light);
      border: none;
      color: white;
    }
  }
  .bag-title {
    padding: 20px 0;
    text-align: start;
  }
`;
export const ItemInCartStyles = styled.div`
  display: grid;
  grid-template-columns: 146px 140px;
  height: 177px;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
  padding: 20px 0;
  margin-bottom: 20px;
  .img-cart {
    object-fit: cover;
    width: 105px;
    height: 137px;
  }
  .row-with-gallery {
    display: flex;
    flex-direction: row;
  }
  .item-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: space-between;
    height: 137px;
  }
  .titles-wrapper {
    text-align: start;
    h5,
    h4 {
      font-weight: 300;
      font-size: 16px;
    }
    h4 {
      margin-bottom: 10px;
    }
  }
`;
export const SizesButtonStyles = styled.div`
  display: flex;
  flex-direction: row;
  button {
    background-color: white;
    height: 24px;
    width: 24px;
    font-size: 14px;
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
  margin-right: 10px;
  button {
    background-color: white;
    height: 24px;
    width: 24px;
    font-size: 14px;
    font-weight: 200;
    border: 1px solid var(--primary-dark);
  }
`;
