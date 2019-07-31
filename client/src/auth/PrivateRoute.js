import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "./react-auth0-wrapper";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        await loginWithPopup({
          appState: { targetUrl: path }
        });
      }
    };
    if (window.location.pathname !== '/') fn();
  }, [isAuthenticated, loginWithPopup, path]);

  const render = props => isAuthenticated === true ? <Component {...props} /> : null;

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;