import React, { Component } from 'react';
import { AttrStyles } from '../styles/AttributesStyles';

export class Attributes extends Component {
  renderAttributeButton({ attributeItem, attribute, selected }) {
    let style = {};
    let text = attributeItem.value;
    if (attribute.id === 'Color') {
      style = { background: attributeItem.value, color: attributeItem.value };
      text = attributeItem.displayValue;
    }

    return (
      <button
        key={attributeItem.value}
        className={selected ? 'selected' : ''}
        style={style}
        onClick={() =>
          this.props.onAttributeSelect({
            attribute,
            value: attributeItem.value,
            displayValue: attributeItem.displayValue
          })
        }
      >
        {text}
      </button>
    );
  }

  render() {
    const { attributes, selectedAttributes } = this.props;
    if (attributes.length === 0) {
      return
    }
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
                    selectedAttributes[attribute.id]?.value === item.value,
                  selectedDisplay:
                    selectedAttributes[attribute.id]?.displayValue ===
                    item.displayValue
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
