import styled from 'styled-components';

export const CurrenctSwitcherStyles = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: white;
  top: 10%;
  right: 1rem;
  width: 114px;
  font-size: 18px;
  font-weight: 500;
  line-height: 28.8px;
  input[type='radio'] {
    clip-path: polygon(0 0);
  }
`;

export const CurrenciesBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  font-size: 18px;
  line-height: 28.8px;
  font-weight: 500;
  padding-right: 1rem;
  img {
    padding-left: 0.4rem;
  }
`;
