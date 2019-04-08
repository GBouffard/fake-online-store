import React from "react";

const ProductListItem = ({ product, addToCart, cartItem }) => {
  return (
    <div className="product-list-item">
      <h3>{product.name}</h3>
      <img
        height={100}
        title={product.name}
        src={`/products/${product.image}`}
        alt={product.name}
      />
      <div>{product.description}</div>
      <div>${product.price}</div>
      <button
        onClick={() => {
          addToCart(product);
        }}
      >
        Add to cart ({(cartItem && cartItem.quantity) || 0})
      </button>
    </div>
  );
};

export default ProductListItem;
