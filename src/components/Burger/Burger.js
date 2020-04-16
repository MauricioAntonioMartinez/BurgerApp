import React from "react";
import classes from "./Burger.css";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";
import { withRouter } from "react-router-dom";

const Burger = (props) => {
  let transformedingredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngridient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedingredients.length === 0) {
    transformedingredients = <p>Please Introduce ingridientes</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {transformedingredients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default withRouter(Burger);
