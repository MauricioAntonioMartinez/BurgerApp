import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import Btn from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("[Order Sumary] Updated");
  }

  render() {
    const ingredientsummart = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingridientes:</p>
        <ul>{ingredientsummart}</ul>
        <p>Continue to CheckOut</p>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <Btn btnType="Success" clicked={this.props.purchaseContinue}>
          Continue
        </Btn>
        <Btn btnType="Danger" clicked={this.props.purchaseCancel}>
          Cancel
        </Btn>
      </Aux>
    );
  }
}

export default OrderSummary;
