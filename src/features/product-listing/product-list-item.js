import React from "react";

const ProductListItem = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <img
        height={100}
        title={product.name}
        src={`/products/${product.image}`}
        alt={product.name}
      />
      <div>{product.description}</div>
      <div>${product.price}</div>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductListItem;
