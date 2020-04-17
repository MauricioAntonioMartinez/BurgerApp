import React, { Component } from "react";
import CheckOutSummary from "../../components/Order/CheckOutSummary/CheckOutSumary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

export class CheckOut extends Component {
  state = {
    ingridients: {},
    totalPrice: 0,
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let totalPrice = null;
    const ingridients = {};
    for (let param of query.entries()) {
      // ['salad','1']
      if (param[0] === "price") {
        totalPrice = param[1];
      } else {
        ingridients[param[0]] = +param[1];
      }
    }

    this.setState({ ingridients, totalPrice });
  }
  checkoutCancelled = () => {
    this.props.history.goBack();
  };
  checkoutContinue = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <CheckOutSummary
          ingridients={this.state.ingridients}
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinue}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingridients}
              totalPrice={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default CheckOut;
