import * as actions from "../actions/actionsTypes";
import { updatedObject } from "../utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START:
      return updatedObject(state, { error: null, loading: true });
    case actions.AUTH_SUCCESS:
      return updatedObject(state, {
        error: null,
        loading: false,
        token: action.authData.idToken,
        userId: action.authData.localId,
      });
    case actions.AUTH_FAIL:
      return updatedObject(state, { error: action.error, loading: false });
    case actions.AUTH_LOGOUT:
      return updatedObject(state, { token: null, userId: null });
    default:
      return state;
  }
};

export default reducer;
