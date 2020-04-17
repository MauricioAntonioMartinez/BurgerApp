import React from "react";
import classes from "./Order.css";

const Order = (props) => {
  const ingridients = [];
  for (let ingridientName in props.ingredientes) {
    ingridients.push({
      name: ingridientName,
      amount: props.ingredientes[ingridientName],
    });
  }

  const ingridientsOutput = ingridients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount}){" "}
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingridients: {ingridientsOutput} </p>
      <p>
        Price:<strong> USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
