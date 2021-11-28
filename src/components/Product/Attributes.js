import React, { Component } from 'react';
import { AttrStyles } from '../styles/AttributesStyles';

export class Attributes extends Component {
  renderAttributeButton({ attributeItem, attribute, selected }) {
    let style = {};
    if (attribute.id === 'Color') {
      style = { background: attributeItem.value, color: attributeItem.value };
    }

    return (
      <button
        key={attributeItem.value}
        className={selected ? 'selected' : ''}
        style={style}
        onClick={() =>
          this.props.onAttributeSelect({
            attribute,
            value: attributeItem.value
          })
        }
      >
        {attributeItem.displayValue}
      </button>
    );
  }

  render() {
    const { attributes, selectedAttributes } = this.props;
    if (attributes.length === 0) return;
    return (
      <AttrStyles>
        {attributes.map((attribute) => {
          return (
            <div key={attribute.id} className="attr-wrapper">
              <p>{attribute.name}:</p>
              {attribute.items.map((item) =>
                this.renderAttributeButton({
                  attributeItem: item,
                  attribute,
                  selected:
                    selectedAttributes[attribute.id]?.value === item.value
                })
              )}
            </div>
          );
        })}
      </AttrStyles>
    );
  }
}

export default Attributes;
