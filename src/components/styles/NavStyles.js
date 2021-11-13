import styled from 'styled-components';
 
const NavStyles = styled.header`
 margin: 0;
 padding: 0;
 justify-content: space-between;
 align-items: center;
 align-content: center;
 display: flex;
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
 li:hover {
   border-bottom: 1px solid var(--primary-light);
 }
 a:hover {
   color: var(--primary-light);
 
 }
 a {
   text-decoration: none;
   padding: 1rem;
   color: var(--primary-dark);
 }
`;
 
export default NavStyles;