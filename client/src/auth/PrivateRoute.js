import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, lock, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.token) {
          return <Component />;
        } else {
          return lock.show();
        }
      }}
    />
  );
};

export default PrivateRoute;