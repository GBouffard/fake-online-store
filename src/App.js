import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Router from "./Router";

const countAllCartItems = cart =>
  cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

const Navigation = ({ cart }) => (
  <nav>
    <ul className="top-menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart ({countAllCartItems(cart)})</NavLink>
      </li>
      <li>
        <NavLink to="/checkout">Check out</NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation {...this.props} />
        <Router />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default withRouter(connect(mapStateToProps)(App));
