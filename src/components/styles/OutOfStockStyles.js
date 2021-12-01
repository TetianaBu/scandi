import styled from 'styled-components';

export const OutOfStockStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: var(--white);
  opacity: 0.5;
  display: grid;
  place-items: center;
  color: var(--light-grey);
  font-size: 24px;
`;
