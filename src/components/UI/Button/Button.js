import React from "react";
import classes from "./Button.css";
import { withRouter } from "react-router-dom";

const Button = (props) => {
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default withRouter(Button);
