export const setDefaultAttr = (attributes) => {
  return Object.fromEntries(
    attributes.map((attribute) => [
      attribute.id,
      {
        attribute,
        value: attribute.items[0]?.value,
        displayValue: attribute.items[0]?.displayValue
      }
    ])
  );
};
