const express = require("express");
const router = express.Router();

// Load input validation
const validateOrderInput = require("../validation/orderInput");

// Load Order model
const Order = require("../models/Order");

// @route POST orderRoute/shipping
// @desc Shipping goods
// @access Public
router.post("/shipping", async (req, res) => {
  // Form validation
  const { errors, isValid } = validateOrderInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const order = new Order({
    goods: req.body.goods,
    customer: {
      name: req.body.customer.name,
      address: req.body.customer.address,
      phone: req.body.customer.phone,
      email: req.body.customer.email,
      shippingOptions: req.body.customer.shippingOptions,
    },
  });

  await order
    .save()
    .then((order) => res.json(order))
    .catch((err) => console.log(err));
});

module.exports = router;
