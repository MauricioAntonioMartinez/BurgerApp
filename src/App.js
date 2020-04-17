import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayOut from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./containers/CheckOut/CheckOut";
import Orders from "./containers/Orders/Orders";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <LayOut>
            <Switch>
              <Route path="/checkout" component={CheckOut} />
              <Route path="/orders" component={Orders} />
              <Route path="/" component={BurgerBuilder} />
            </Switch>
          </LayOut>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
