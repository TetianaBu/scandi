import styled from 'styled-components';

export const ProductDescriptionCarouselStyles = styled.div`
  display: grid;
  grid-template-columns: 80px 75%;
  column-gap: 10%;
  height: 560px;
  overflow: scroll;
  .gallery {
    img {
      height: 80px;
      width: 80px;
      padding-bottom: 2rem;
      object-fit: contain;
    }
  }
`;

export const SinglePhotoStyles = styled.div`
  display: block;
`;
