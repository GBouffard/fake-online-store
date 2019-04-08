import React from "react";

const AddButton = ({ cartItem, product, addToCart }) => (
  <button onClick={() => addToCart(product)}>
    Add to cart ({(cartItem && cartItem.quantity) || 0})
  </button>
);
export default AddButton;
