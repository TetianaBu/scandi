import styled from 'styled-components';

export const ProductDescriptionImgStyles = styled.div`
  display: grid;
  grid-template-columns: 80px 75%;
  column-gap: 10%;
  .gallery {
    img {
      height: 80px;
      width: 80px;
      margin-bottom: 2rem;
      object-fit: cover;
      cursor: pointer;
    }
  }
  .main-img-wrapper {
    position: relative;
    display: flex;
    img {
      object-fit: contain;
    }
  }
`;
