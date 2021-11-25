import styled from 'styled-components';

export const NavMenuStyles = styled.nav`
  .categories-nav-wrapper {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 134px;
  }
  .categories-nav-item:not(:first-of-type) {
    padding-left: 0.5rem;
  }
  .categories-nav-item {
    text-transform: uppercase;
  }
  .categories-nav-item a {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .nav-link {
    color: var(--primary-light);
    border-bottom: 2px solid var(--primary-light);
    padding-bottom: 2rem;
  }
`;
