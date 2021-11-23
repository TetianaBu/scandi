import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const DescriptionStyles = styled.div`
  max-height: 200px;
  overflow-y: scroll;
`;

export class Description extends Component {
  render() {
    const { text } = this.props;
    return <DescriptionStyles>{ReactHtmlParser(text)}</DescriptionStyles>;
  }
}

export default Description;
