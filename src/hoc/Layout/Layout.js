import React, { Component } from "react";
import Aux from "../Auxiliary";
import classes from "./Layout.css";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrwer from "../../components/Navigation/SideDrawer/SideDrawer";

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
        <ToolBar btnClick={this.SideDrawerOpenHandles} />
        <SideDrwer
          closed={this.SideDrawerCloseHandles}
          open={this.state.showSideDrawer}
        />
        <div>Toolbar,SideDrawer,Backdrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
