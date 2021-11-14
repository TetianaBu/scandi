import styled from 'styled-components';

const NavStyles = styled.header`
  margin: 0;
  padding: 0 2rem 0 2rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: row;
  text-transform: uppercase;
  height: 80px;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 134px;
  }
  div {
    width: 134px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  li {
    padding-bottom: 1rem;
  }
  a {
    text-decoration: none;
    padding: 2rem;
    color: var(--primary-dark);
  }
  .nav-link {
    color: var(--primary-light);
    text-decoration: var(--primary-light);
  }
`;

export default NavStyles;
