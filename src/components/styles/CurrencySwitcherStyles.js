import styled from 'styled-components';

export const CurrenctSwitcherStyles = styled.div`
  position: fixed;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: white;
  top: 10%;
  right: 2.5rem;
  width: 114px;
  font-size: 18px;
  font-weight: 500;
  line-height: 28.8px;
  -webkit-box-shadow: 0px -1px 13px -1px rgba(196, 197, 199, 1);
  -moz-box-shadow: 0px -1px 13px -1px rgba(196, 197, 199, 1);
  box-shadow: 0px -1px 13px -1px rgba(196, 197, 199, 1);
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
