import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.sass";
import * as Sentry from "@sentry/browser";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import logger from "redux-logger";
import reducer from "./store/index";

const devTool = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducer, devTool(applyMiddleware(thunk, logger)));

const AppRouter = withRouter(App);

Sentry.init({ dsn: "https://bde76cfac53648c89daea04b23aa0678@sentry.io/1543382" });

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
