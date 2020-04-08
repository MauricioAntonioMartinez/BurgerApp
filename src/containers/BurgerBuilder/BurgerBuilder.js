import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";

const INGRIDIENTE_PRICES = {
  Salad: 0.5,
  Cheese: 0.4,
  meat: 1.3,
  Bacon: 0.6,
};

class BurgerBuilder extends Component {
  state = {
    ingridients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };
  addIngridientHandler = (type) => {
    const oldCount = this.state.ingridients[type];
    const updatedCounted = oldCount + 1;
    const updateIngridients = {
      ...this.state.ingridients,
    };
    updateIngridients[type] = updatedCounted;

    this.setState({
      totalPrice: this.state.totalPrice + INGRIDIENTE_PRICES[type],
      ingridients: updateIngridients,
    });
  };
  removeIngridientHandler = (type) => {
    const oldCount = this.state.ingridients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCounted = oldCount - 1;
    const updateIngridients = {
      ...this.state.ingridients,
    };
    updateIngridients[type] = updatedCounted;

    this.setState({
      totalPrice: this.state.totalPrice - INGRIDIENTE_PRICES[type],
      ingridients: updateIngridients,
    });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingridients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    console.log(this.props.totalPrice);
    return (
      <Aux>
        <Burger ingridients={this.state.ingridients} />
        <BurgerControls
          ingridientAdded={this.addIngridientHandler}
          ingridientRemove={this.removeIngridientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
