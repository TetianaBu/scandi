import styled from 'styled-components';

export const NavStyles = styled.header`
  margin: 0;
  padding: 0 2rem 0 2rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: row;
  text-transform: uppercase;
  height: 80px;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 134px;
  }
  .cart-currency-wrapper {
    width: 114px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
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
  .categories-nav {
    padding-left: 2rem;
    padding-right: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--primary-dark);
  }
  .nav-link {
    color: var(--primary-light);
    text-decoration: var(--primary-light);
  }
`;

export const CartIMg = styled.img`
  width: 20px;
  height: 20px;
`;
