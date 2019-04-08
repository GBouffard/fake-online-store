import React, { Component } from "react";
import { connect } from "react-redux";

import ProductListItem from "./product-list-item";

import fetchApi from "../../modules/fetch-api";

const APIUrl = "https://student-example-api.herokuapp.com/v1";

class ProductListing extends Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    fetchApi("get", `${APIUrl}/products.json`).then(json => {
      loadProducts(json);
    });
  }

  render() {
    const { products, addToCart, removeFromCart, cart } = this.props;

    return (
      <div className="product-listing">
        {products.map(product => (
          <ProductListItem
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
            key={product.id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  loadProducts: products => {
    dispatch({ type: "LOAD", payload: products });
  },
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
