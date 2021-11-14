import styled from 'styled-components';

const CategoryPageStyles = styled.main`
  display: grid;
  h1 {
    font-weight: normal;
    text-transform: capitalize;
  }
  .category-page-inner-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 4.5rem;
    column-gap: 2rem;
    margin-top: 2rem;
  }
  @media (max-width: 1000px) {
    .category-page-inner-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
`;

export default CategoryPageStyles;