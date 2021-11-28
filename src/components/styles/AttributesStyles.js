import styled from 'styled-components';

export const AttrStyles = styled.div`
  button {
    width: 63px;
    height: 45px;
    border: 1px solid var(--primary-dark);
    margin-right: 0.5rem;
    margin-bottom: 0.2rem;
    background-color: white;
    color: var(--primary-dark);
    :hover {
      background-color: var(--primary-dark);
      color: white;
    }
    &[disabled] {
      opacity: 0.5;
      cursor: auto;
    }
  }
  .attr-wrapper p {
    margin-bottom: 0.2rem;
  }
  .selected {
    background-color: var(--primary-dark);
    color: white;
  }
`;
