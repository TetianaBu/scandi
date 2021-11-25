import styled from 'styled-components';

export const HeaderStyles = styled.header`
  margin: 0;
  height: 80px;
  padding: 0 3rem 0 3rem;
  position: relative;
  display: grid;
  grid-template-columns: 114px 1fr 114px;
  justify-items: center;
  align-items: center;
`;

export const CartCurrencyStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .cart-wrapper {
    position: relative;
    padding-right: 1rem;
    background-color: white;
    border: none;
  }
  .items-amount {
    position: absolute;
    background-color: var(--primary-dark);
    color: white;
    font-weight: 700;
    font-size: 12px;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -20%;
    left: 40%;
  }
`;

export const CartIMg = styled.img`
  width: 20px;
  height: 20px;
`;
