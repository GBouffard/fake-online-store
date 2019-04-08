import React from "react";
import { connect } from "react-redux";

import Cart from "../cart";
import CheckoutForm from "./form";
import fetchApi from "../../modules/fetch-api";

const APIUrl = "https://student-example-api.herokuapp.com/v1";

const submitOrder = (values, cart) => {
  const { email, name } = values.order;

  fetchApi("post", `${APIUrl}/orders.json`, {
    order: {
      name,
      email,
      order_items_attributes: cart.map(item => ({
        product_id: item.id,
        qty: item.quantity
      }))
    }
  }).then(json => {
    if (json.errors) {
      alert("something went wrong!");
      return;
    }
    document.location.href = `/orders/${json.id}`;
  });
};

const Checkout = ({ cart }) => (
  <div>
    <div style={{ border: "1px solid black" }}>
      <Cart />
    </div>

    <CheckoutForm onSubmit={values => submitOrder(values, cart)} />
  </div>
);

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Checkout);
