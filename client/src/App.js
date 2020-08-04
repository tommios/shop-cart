import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import CartPage from "./pages/CartPage";
import ShippingPage from "./pages/ShippingPage";

const Fakedata = require("./Fakedata.json");

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <CartPage items={Fakedata.cart} {...props} />}
          />
          <Route
            exact
            path="/cart"
            render={(props) => <CartPage items={Fakedata.cart} {...props} />}
          />
          <Route exact path="/shipping" component={ShippingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
