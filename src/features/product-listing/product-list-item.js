import React from "react";

const ProductListItem = ({ product, addToCart, cart }) => {
  const thisItemInCart = cart.filter(item => item.id === product.id)[0];
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
        Add to cart ({(thisItemInCart && thisItemInCart.quantity) || 0})
      </button>
    </div>
  );
};

export default ProductListItem;
