import React, { Component } from "react";
import CheckOutSummary from "../../components/Order/CheckOutSummary/CheckOutSumary";

export class CheckOut extends Component {
  state = {
    ingridients: {},
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);

    const ingridients = {};
    for (let param of query.entries()) {
      // ['salad','1']
      ingridients[param[0]] = +param[1];
    }

    this.setState({ ingridients });
  }
  checkoutCancelled = () => {
    this.props.history.goBack();
  };
  checkoutContinue = () => {
    this.props.history.replace("/Checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckOutSummary
          ingridients={this.state.ingridients}
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinue}
        />
      </div>
    );
  }
}

export default CheckOut;
