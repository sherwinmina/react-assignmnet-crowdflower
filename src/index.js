import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import promise from "redux-promise";
import reducers from "./reducers";
import App from "./components/app";
import thunk from "redux-thunk"

const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, enhancer)}>
    <App/>
  </Provider>,
  document.querySelector(".main")
);
