import React from "react";
import { connect } from "react-redux";

import Cart from "../cart";

const Checkout = ({ cart }) => (
  <div style={{ border: "1px solid black" }}>
    <Cart />
  </div>
);

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Checkout);
