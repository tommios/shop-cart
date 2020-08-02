const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const orderRoute = require("./routes/orderRoute");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

// DB Config
const db = require("./config").MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// simple route to check server operation
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Shop-Cart application.",
  });
});

// Routes
app.use("/orderRoute", orderRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
