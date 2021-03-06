import styled from 'styled-components';

export const CurrenctSwitcherStyles = styled.div`
  position: fixed;
  padding-top: 10px;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 3;
  background-color: white;
  top: 60px;
  right: 3rem;
  width: 114px;
  font-size: 18px;
  font-weight: 500;
  line-height: 28.8px;
  box-shadow: 0px -1px 13px -1px rgba(196, 197, 199, 1);
  input[type='radio'] {
    clip-path: polygon(0 0);
    margin-left: 0;
  }
  label {
    padding: 5px 5px 5px 0;
    cursor: pointer;
  }
  label:hover {
    background-color: var(--primary-dark);
    color: var(--white);
  }
`;

export const CurrenciesBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--white);
  border: none;
  font-size: 18px;
  line-height: 28.8px;
  font-weight: 500;
  padding-right: 1rem;
  img {
    padding-left: 0.4rem;
  }
`;
