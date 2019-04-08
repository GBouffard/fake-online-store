import React from "react";
import AddButton from "./add-button";
import RemoveButton from "./remove-button";

const ProductListItem = ({ product, addToCart, removeFromCart, cartItem }) => {
  return (
    <div className="product-list-item">
      <h3>{product.name}</h3>
      <img
        height={100}
        title={product.name}
        src={product.image}
        alt={product.name}
      />
      <div>{product.description}</div>
      <div>${product.price}</div>

      <div>
        <AddButton
          cartItem={cartItem}
          product={product}
          addToCart={addToCart}
        />

        {cartItem ? (
          <RemoveButton
            cartItem={cartItem}
            product={product}
            removeFromCart={removeFromCart}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProductListItem;
