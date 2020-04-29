import React, { Component } from "react";
import CheckOutSummary from "../../components/Order/CheckOutSummary/CheckOutSumary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

export class CheckOut extends Component {
  checkoutCancelled = () => this.props.history.goBack();
  checkoutContinue = () => this.props.history.replace("/checkout/contact-data");

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchaseRedirect = this.props.purchase ? <Redirect to="/" /> : null;
      summary = (
        <div>
          {purchaseRedirect}
          <CheckOutSummary
            ingridients={this.props.ings}
            checkoutCancelled={this.checkoutCancelled}
            checkoutContinued={this.checkoutContinue}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.BurgerBuilder.ingredients,
    purchase: state.order.purchased,
  };
};

export default connect(mapStateToProps)(CheckOut);
