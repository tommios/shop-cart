const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  goods: {
    type: Object,
    default: {},
  },
  customer: {
    name: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    shippingOptions: {
      type: String,
      default: "Free shipping",
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Order = mongoose.model("order", OrderSchema);
