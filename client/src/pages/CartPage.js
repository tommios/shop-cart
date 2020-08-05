import React, { Component } from "react";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import "./CartPage.css";

const Fakedata = require("../Fakedata.json");

let formatter = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "EUR",
});

let fakedata = Fakedata.cart.map((cartItem) => {
  let product = Fakedata.goods.find(
    (goodsItem) => cartItem._id === goodsItem._id
  );

  if (product) {
    cartItem.title = product.title;
    cartItem.description = product.description;
    cartItem.price = product.price;
    cartItem.img = product.img;
  }

  return cartItem;
});

class CartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPrice: 0,
      cartItems: fakedata,
    };

    this.setItemQuantity = this.setItemQuantity.bind(this);
  }

  componentDidMount() {
    this.setTotalPrice();
  }

  setTotalPrice() {
    let totalPrice = 0;

    this.state.cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });

    this.setState({
      totalPrice: totalPrice,
    });
  }

  setItemQuantity(id, quantity) {
    let item = this.state.cartItems.find((item) => item._id === id);

    item.quantity = quantity;

    this.setTotalPrice();
  }

  deleteItem(item) {
    console.log(item);
    let newItems = this.state.cartItems;

    if (newItems.indexOf(item) > -1) {
      newItems.splice(newItems.indexOf(item), 1);
      this.setState({ cartItems: newItems });
    }
    this.setTotalPrice();
  }

  render() {
    let isActive = this.state.totalPrice > 0 ? "" : "disabled";
    return (
      <div className="cart-page">
        <div>
          {this.state.cartItems.map((cartItem) => {
            return (
              <CartItem
                setItemQuantity={this.setItemQuantity}
                onClose={this.deleteItem.bind(this, cartItem)}
                item={cartItem}
                key={cartItem._id}
              />
            );
          })}
        </div>

        <div className="total">{formatter.format(this.state.totalPrice)}</div>
        <div className="order">
          <Link
            to={{
              pathname: "../shipping",
              order: this.state.cartItems,
              totalPrice: this.state.totalPrice,
            }}
          >
            <button className="btn" disabled={isActive}>
              BUY
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CartPage;
