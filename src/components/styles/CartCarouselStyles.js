import styled from 'styled-components';

export const CartCarouselStyles = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: 185px;
  padding: 0 0.5rem;
  position: relative;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const ArrowBtn = styled.div`
  background: none;
  cursor: pointer;
  display: flex;
  border: none;
  z-index: 2;
  position: absolute;
  top: 50%;
  :first-of-type {
    left: 15%;
  }
  :last-of-type {
    left: 85%;
  }
`;
