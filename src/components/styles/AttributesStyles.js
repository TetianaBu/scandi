import styled from 'styled-components';

export const AttrStyles = styled.div`
  button {
    width: 63px;
    height: 45px;
    border: 1px solid var(--primary-dark);
    margin-right: 0.5rem;
    margin-bottom: 0.3rem;
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
    margin-bottom: 0.3rem;
  }
  .selected {
    background-color: var(--primary-dark);
    color: white;
  }
  .color {
    border: 1px solid var(--light-grey);
  }
  .color.selected {
    border: 3px solid  var(--primary-dark);
    transform: scale(1.1);
  }
`;

export const AttrInPopUpCartStyles = styled.div`
  display: flex;
  flex-direction: column;
  p {
    display: grid;
    min-width: 45px;
    margin-top: 0.3rem;
    span {
      font-size: 10px;
      padding: 2px 4px;
      color: white;
      text-align: center;
      background-color: var(--primary-dark);
    }
    .width {
    }
  }
`;
