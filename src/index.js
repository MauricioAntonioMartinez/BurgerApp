import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import burgerBuilderReducer from "./Store/reducers/burgerBuilder";
import orderReducer from "./Store/reducers/order";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  BurgerBuilder: burgerBuilderReducer,
  order: orderReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
