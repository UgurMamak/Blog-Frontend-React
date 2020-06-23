import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Admin } from "../../helpers/role";
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          localStorage.getItem("role") === Admin ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/NotFound", state: { from: props.location } }}
            />
          )
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
