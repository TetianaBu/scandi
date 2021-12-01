import styled from 'styled-components';

export const OuterWrapper = styled.div`
  position: absolute;
  top: 80px;
  background: rgba(57, 55, 72, 0.22);
  width: 100%;
  min-height: 150vh;
  right: 0;
  z-index: 3;
`;
export const PopUpCartStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  position: absolute;
  background-color: var(--white);
  top: 0;
  right: 3rem;
  padding: 0 16px;
  z-index: 4;
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
  .bag-title {
    padding: 20px 0;
    text-align: start;
  }
`;

export const ActionBtnStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  .btn-view-bag,
  .btn-check-out {
    height: 43px;
    width: 140px;
    text-transform: uppercase;
  }
  .btn-view-bag {
    background-color: var(--white);
    border: 1px solid var(--primary-dark);
  }
  .btn-check-out {
    background-color: var(--primary-light);
    border: none;
    color: var(--white);
  }
`;

export const ProductInCartStyles = styled.div`
  display: grid;
  grid-template-columns: 146px 140px;
  min-height: 177px;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
  padding: 20px 0;
  margin-bottom: 20px;
  .img-cart {
    object-fit: cover;
    object-position: center;
    width: 105px;
    min-height: 137px;
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
    min-height: 137px;
  }
  .titles-wrapper {
    text-align: start;
    h5,
    h4 {
      font-weight: 300;
      font-size: 16px;
    }
    h4 {
      margin-bottom: 5px;
    }
  }
`;
export const SizesButtonStyles = styled.div`
  display: flex;
  flex-direction: row;
  button {
    background-color: var(--white);
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
    background-color: var(--white);
    height: 24px;
    width: 24px;
    font-size: 14px;
    font-weight: 200;
    border: 1px solid var(--primary-dark);
  }
`;
