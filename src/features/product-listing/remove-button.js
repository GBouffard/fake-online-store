import React from "react";

const RemoveButton = ({ cartItem, removeFromCart }) => (
  <button onClick={() => removeFromCart(cartItem)}>Remove</button>
);

export default RemoveButton;
