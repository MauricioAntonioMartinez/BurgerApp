import React, { Component } from "react";
//import classes from "./Orders.css";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

export class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("orders.json")
      .then((orders) => {
        const fetchedOrders = [];
        for (let key in orders.data) {
          fetchedOrders.push({ ...orders.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  }
  render() {
    return this.state.orders.map((order) => {
      return (
        <Order
          key={order.id}
          ingredientes={order.ingredientes}
          price={+order.price}
        />
      );
    });
  }
}

export default withErrorHandler(Orders, axios);
