import * as actions from "./actionsTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actions.AUTH_START,
  };
};
export const authSuccess = (authData) => {
  return {
    type: actions.AUTH_SUCCESS,
    authData,
  };
};
export const authFail = (error) => {
  return {
    type: actions.AUTH_FAIL,
    error,
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    const authData = {
      email,
      password,
      returnSecureToke: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2Y7x_VPQjEuqssyDyyBc3wqJdNuilWPQ";
    if (!isSignUp)
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2Y7x_VPQjEuqssyDyyBc3wqJdNuilWPQ";
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFail(error.response.data.error));
      });
    dispatch(authStart());
  };
};

export const logout = () => {
  return {
    type: actions.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};
