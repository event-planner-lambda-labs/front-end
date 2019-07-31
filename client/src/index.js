import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.sass";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Auth0Provider } from "./auth/react-auth0-wrapper";
import config from "./auth/auth_config.json";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import logger from "redux-logger";
import reducer from "./reducers/index";

const devTool = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const store = createStore(reducer, devTool(applyMiddleware(thunk, logger)));

const AppRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <AppRouter />
      </Auth0Provider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
