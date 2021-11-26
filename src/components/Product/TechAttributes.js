import React, { Component } from 'react';
import { TechAttrStyles } from '../styles/AttributesStyles';

export class TechAttributes extends Component {
  render() {
    const { attributes } = this.props;
    const capacity = attributes.find((a) => a.id === 'Capacity')?.items;
    const usbPorts = attributes.find((a) => a.id === 'With USB 3 ports')?.items;
    const touchID = attributes.find(
      (a) => a.id === 'Touch ID in keyboard'
    )?.items;

    return (
      <TechAttrStyles>
        {capacity && (
          <div className="tech-attr-wrapper">
            <p>Capacity:</p>
            {capacity.map((item, id) => (
              <button key={id}>{item.value}</button>
            ))}
          </div>
        )}
        {usbPorts && (
          <div className="tech-attr-wrapper">
            <p>With USB 3 ports:</p>
            {usbPorts.map((item, id) => (
              <button key={id}>{item.value}</button>
            ))}
          </div>
        )}
        {touchID && (
          <div className="tech-attr-wrapper">
            <p>Touch ID in keyboard:</p>
            {touchID.map((item, id) => (
              <button key={id}>{item.value}</button>
            ))}
          </div>
        )}
      </TechAttrStyles>
    );
  }
}

export default TechAttributes;
