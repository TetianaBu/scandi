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
    padding-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--primary-dark);
    padding-left: 1rem;
    padding-right: 1rem;
    text-transform: uppercase;

  }
  .nav-link {
    color: var(--primary-light);
    border-bottom: 2px solid var(--primary-light);
    padding-bottom: 2rem;
  }
`;

export const CartIMg = styled.img`
  width: 20px;
  height: 20px;
`;
