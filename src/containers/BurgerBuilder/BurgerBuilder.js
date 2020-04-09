import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    purchaseable: false,
    purchasing: false,
  };

  updatePurchaseState(newState) {
    const sum = Object.keys(newState)
      .map((igKey) => {
        return newState[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addIngridientHandler = (type) => {
    const updateIngridients = { ...this.state.ingridients };
    updateIngridients[type] = this.state.ingridients[type] + 1;
    this.setState({
      totalPrice: this.state.totalPrice + INGRIDIENTE_PRICES[type],
      ingridients: updateIngridients,
    });
    this.updatePurchaseState(updateIngridients);
  };
  removeIngridientHandler = (type) => {
    if (this.state.ingridients[type] <= 0) return;
    const updateIngridients = { ...this.state.ingridients };
    updateIngridients[type] = this.state.ingridients[type] - 1;
    this.setState({
      totalPrice: this.state.totalPrice - INGRIDIENTE_PRICES[type],
      ingridients: updateIngridients,
    });
    this.updatePurchaseState(updateIngridients);
  };

  purchaseHandler() {
    this.setState({ purchasing: true });
  }
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  render() {
    const disabledInfo = { ...this.state.ingridients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary ingridients={this.state.ingridients} />
        </Modal>
        <Burger ingridients={this.state.ingridients} />
        <BurgerControls
          ingridientAdded={this.addIngridientHandler}
          ingridientRemove={this.removeIngridientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler.bind(this)}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
