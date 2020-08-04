import React, { Component } from "react";
import axios from "axios";
import "./ShippingPage.css";

class ShippingPage extends Component {
  constructor(props) {
    super(props);

    this.order = props.location.order;
    this.state = {
      name: "",
      address: "",
      phone: "",
      email: "",
      shippingOptions: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    let data = {
      goods: {},
      customer: {},
    };
    data.customer.name = this.state.name;
    data.customer.address = this.state.address;
    data.customer.phone = this.state.phone;
    data.customer.email = this.state.email;
    data.customer.shippingOptions = this.state.shippingOptions;
    data.goods = this.order;

    let order = async (data) => {
      return await axios
        .post("orderRoute/shipping", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };

    order(data);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-25">
              <label>Name*</label>
            </div>
            <div className="col-50">
              <input
                type="text"
                id="name"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Address*</label>
            </div>
            <div className="col-50">
              <input
                type="text"
                id="address"
                onChange={this.onChange}
                value={this.state.address}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Phone</label>
            </div>
            <div className="col-50">
              <input
                type="text"
                id="phone"
                onChange={this.onChange}
                value={this.state.phone}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>E-mail</label>
            </div>
            <div className="col-50">
              <input
                type="email"
                id="email"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Shipping options</label>
            </div>
            <div className="col-50">
              <select
                id="shippingOptions"
                onChange={this.onChange}
                value={this.state.shippingOptions}
              >
                <option value="Free Shipping">Free Shipping</option>
                <option value="Express Shipping">Express Shipping</option>
                <option value="Courier Shipping">Courier Shipping</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-75">
              <input type="submit" value="PAY" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ShippingPage;
