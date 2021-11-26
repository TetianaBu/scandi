import styled from 'styled-components';

export const SizeStyles = styled.div`
  display: flex;
  flex-direction: column;
  .sizes-btn-wrapper {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
  }
  .sizes-title {
    text-transform: uppercase;
  }
  button {
    background-color: white;
    width: 63px;
    height: 45px;
    border: 1px solid var(--primary-dark);
    transition: all 0.5s;
    &[disabled] {
      opacity: 0.5;
      cursor: auto;
    }
    :hover {
      background-color: var(--primary-dark);
      color: white;
    }
  }
  .selected {
    background-color: var(--primary-dark);
    color: white;
  }
`;

export const ColorStyles = styled.div`
  p {
    margin-bottom: 0.2rem;
  }
  button {
    width: 63px;
    height: 45px;
    margin-right: 0.5rem;
    border: 1px solid var(--primary-dark);
  }
`;

export const TechAttrStyles = styled.div`
  button {
    width: 63px;
    height: 45px;
    border: 1px solid var(--primary-dark);
    margin-right: 0.5rem;
    background-color: white;
    color: var(--primary-dark);
    :hover {
      background-color: var(--primary-dark);
      color: white;
    }
  }
  .tech-attr-wrapper p {
    margin-bottom: 0.2rem;
  }

`;
