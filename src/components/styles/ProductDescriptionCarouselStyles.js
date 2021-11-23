import styled from 'styled-components';

export const ProductDescriptionCarouselStyles = styled.div`
  display: grid;
  grid-template-columns: 80px 75%;
  column-gap: 10%;
  height: 560px;
  .gallery {
    overflow: scroll;
    img {
      height: 80px;
      width: 80px;
      margin-bottom: 2rem;
      object-fit: cover;
    }
  }
  .main-img-wrapper {
    position: relative;
  }
`;
