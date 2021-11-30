import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';


export class Description extends Component {
  render() {
    const { text } = this.props;
    return <div>{ReactHtmlParser(text)}</div>;
  }
}

export default Description;
