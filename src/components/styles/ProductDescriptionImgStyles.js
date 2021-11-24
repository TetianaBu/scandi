import styled from 'styled-components';

export const ProductDescriptionImgStyles = styled.div`
  display: grid;
  grid-template-columns: 80px 75%;
  column-gap: 10%;
  max-height: 510px;
  .gallery {
    overflow-y: scroll;
    overflow-x: hidden;
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
    display: grid;
    place-items: center;
    img {
      max-height: 500px;
      object-fit: contain;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 300px 80px;
    row-gap: 20px;
    .gallery {
      grid-row: 2;
      overflow-x: scroll;
      overflow-y: hidden;
      img {
        margin-right: 2rem;
      }
    }
    .main-img-wrapper {
      grid-row: 1;
      img {
        max-height: 300px;
      }
    }
  }
`;
