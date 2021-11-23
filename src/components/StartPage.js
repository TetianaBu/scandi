import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  place-items: center;
  margin-top: 5rem;
`;

class Start extends React.Component {
  render() {
    return <Main>Hey there!</Main>;
  }
}

export default Start;
