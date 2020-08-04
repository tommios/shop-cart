import React, { Component } from "react";

import "./CartItem.css";

let formatter = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "EUR",
});

console.log(formatter.format(1234.5));

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.item.quantity,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  increase() {
    let item = this.props.item;
    if (item.quantity < 50) {
      item.quantity = +item.quantity + 1;
    }
    this.setQuantity(item.quantity);
  }

  decrease() {
    let item = this.props.item;

    if (item.quantity >= 1) {
      item.quantity = item.quantity - 1;
    }

    this.setQuantity(item.quantity);
  }

  setQuantity(quantity) {
    this.setState({
      quantity: quantity,
    });

    this.props.setItemQuantity(this.props.item._id, quantity);
  }

  deleteItem() {
    this.props.onClose();
  }

  handleChange(event) {
    if (event.target.value < 0) {
      this.setQuantity(0);
    } else if (event.target.value > 50) {
      this.setQuantity(50);
    } else {
      this.setQuantity(event.target.value);
    }
  }

  render() {
    let item = this.props.item;

    return (
      <div className="cart-item">
        <div className="image">
          <img src={item.img} alt={item.title}></img>
        </div>

        <div className="main-info-cell">
          <div className="title">{item.title}</div>
          <div className="description">{item.description}</div>
        </div>

        <div className="bar"></div>

        <div className="quantity-cell">
          <button className="increase" onClick={this.increase}>
            +
          </button>

          <input
            className="quantity-input"
            type="number"
            id="number"
            value={this.state.quantity}
            onChange={this.handleChange}
          />

          <button className="decrease" onClick={this.decrease}>
            -
          </button>
        </div>

        <div className="item-summary-cell">
          <button
            className="trash"
            onClick={this.deleteItem.bind(this)}
          ></button>
          <div className="summary-cell">
            {formatter.format(item.price * item.quantity)}
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
