import React from "react";
import { connect } from "react-redux";

const sort = items => items.sort((a, b) => a.id - b.id);

const Cart = ({ cart, addToCart, removeFromCart, removeAllFromCart }) => (
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th />
        <th />
      </tr>
    </thead>
    <tbody>
      {sort(cart).map(item => (
        <tr>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>
            <button onClick={e => addToCart(item)}>+</button>
            <button onClick={e => removeFromCart(item)}>-</button>
          </td>
          <td>
            <button onClick={e => removeAllFromCart(item)}>
              Remove from cart
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
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
  },
  removeAllFromCart: item => {
    dispatch({ type: "REMOVE_ALL", payload: item });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
