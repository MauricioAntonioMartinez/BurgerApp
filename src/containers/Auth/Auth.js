import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.css";
import * as actions from "../../Store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import withError from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import { Redirect } from "react-router-dom";

export class Auth extends Component {
  state = {
    formAuth: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignup: true,
  };

  inputChangedHandler = (event, id) => {
    const formAuth = {
      ...this.state.formAuth,
      [id]: {
        ...this.state.formAuth[id],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.formAuth[id].validation
        ),
        touched: true,
      },
    };
    this.setState({ formAuth });
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isSignup: !prevState.isSignup };
    });
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.formAuth.email.value,
      this.state.formAuth.password.value,
      this.state.isSignup
    );
  };
  render() {
    const arrayInputs = [];
    for (let key in this.state.formAuth) {
      arrayInputs.push({ id: key, config: this.state.formAuth[key] });
    }
    let form = <Spinner />;
    if (!this.props.loading)
      form = arrayInputs.map((formElement) => {
        return (
          <Input
            key={formElement.id}
            elementName={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            Changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        );
      });

    let errorMessage = null;
    if (this.props.error) errorMessage = <p>{this.props.error.message}</p>;
    console.log(this.props.isAuthenticated, this.props.isPreBurgerBuild);
    if (this.props.isAuthenticated && this.props.isPreBurgerBuild)
      return <Redirect to="/checkout" />;
    if (this.props.isAuthenticated) return <Redirect to="/" />;
    return (
      <div className={classes.Auth}>
        {errorMessage}
        <form onSubmit={this.submitForm}>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
        <Button btnType="Danger" clicked={this.switchAuthModeHandler}>
          Switch to {this.state.isSignup ? "Sign In" : "Sign Up"}
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isPreBurgerBuild: state.BurgerBuilder.ingredients !== null,
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withError(Auth, axios));
