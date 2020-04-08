import React from "react";
import classes from "./BurgeControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "Salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Cheese", type: "Cheese" },
  { label: "meat", type: "meat" },
];

const BurgerControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price : <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            Added={() => props.ingridientAdded(control.label)}
            Remove={() => props.ingridientRemove(control.label)}
            disabled={props.disabled[control.type]}
          />
        );
      })}
    </div>
  );
};

export default BurgerControls;
