import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../Auxiliary";
import classes from "./Layout.css";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  SideDrawerCloseHandles = () => {
    this.setState({ showSideDrawer: false });
  };
  SideDrawerOpenHandles = () => {
    this.setState({ showSideDrawer: true });
  };

  render() {
    return (
      <Aux>
        <ToolBar
          isAuth={this.props.isAuthenticated}
          btnClick={this.SideDrawerOpenHandles}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          closed={this.SideDrawerCloseHandles}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
