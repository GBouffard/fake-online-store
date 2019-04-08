import React from "react";
import { connect } from "react-redux";

import ProductListItem from "./product-list-item";

const ProductListing = ({ products, addToCart, removeFromCart, cart }) => (
  <div className="product-listing">
    {products.map(product => (
      <ProductListItem
        product={product}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => {
    dispatch({ type: "ADD", payload: item });
  },
  removeFromCart: item => {
    dispatch({ type: "REMOVE", payload: item });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
