import React from "react";
import Aux from "../../../hoc/Auxiliary";
const OrderSummary = (props) => {
  const ingridientSummart = Object.keys(props.ingridients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingridients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingridientes:</p>
      <ul>{ingridientSummart}</ul>
      <p>Continue to CheckOut</p>
    </Aux>
  );
};

export default OrderSummary;
