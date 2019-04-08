import React from "react";
import Order from "../features/order";

const OrdersPage = ({ match }) => (
  <div>
    <h2>My order</h2>
    <Order id={match.params.id} />
  </div>
);

export default OrdersPage;
