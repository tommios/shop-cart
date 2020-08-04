const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateOrderInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.customer.name = !isEmpty(data.customer.name) ? data.customer.name : "";

  data.customer.address = !isEmpty(data.customer.address)
    ? data.customer.address
    : "";

  data.customer.phone = !isEmpty(data.customer.phone)
    ? data.customer.phone
    : "";

  data.customer.email = !isEmpty(data.customer.email)
    ? data.customer.email
    : "";

  data.customer.shippingOptions = !isEmpty(data.customer.shippingOptions)
    ? data.customer.shippingOptions
    : "";

  // Name checks
  if (Validator.isEmpty(data.customer.name)) {
    errors.name = "Name field is required";
  }

  // Address checks
  if (Validator.isEmpty(data.customer.address)) {
    errors.address = "Address field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.customer.email)) {
  } else if (!Validator.isEmail(data.customer.email)) {
    errors.email = "Email is invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
