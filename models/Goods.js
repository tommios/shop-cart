const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoodsSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title field is required!"],
  },
  description: {
    type: String,
    required: [true, "Description field is required!"],
  },
  price: {
    type: Number,
    required: [true, "Price field is required!"],
  },
  img: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Goods = mongoose.model("goods", GoodsSchema);
