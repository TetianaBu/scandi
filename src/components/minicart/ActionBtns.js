import React from 'react';
import { NavLink } from 'react-router-dom';
import { ActionBtnStyles } from '../styles/MiniCartStyles';

export default class ActionBtns extends React.Component {
  render() {
    return (
      <ActionBtnStyles>
        <button className="btn-view-bag" onClick={this.props.onClose}>
          <NavLink to={`/cart`}>View bag</NavLink>
        </button>
        <button className="btn-check-out">Check Out</button>
      </ActionBtnStyles>
    );
  }
}
