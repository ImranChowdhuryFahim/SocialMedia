import React, { Component } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import MessangerApp from "./Messager/App";
import LoginApp from "./Authentication/LoginApp";
import RegisterApp from "./Authentication/SingUp";
import Auth from "./Auth";

class Router extends Component {
  render() {
    console.log("ami router e");
    console.log(Auth.getAuth());
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          Auth.getAuth() ? ( //Auth.getAuth()
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    );
    return (
      <Switch>
        <Route component={LoginApp} exact path="/"></Route>
        <Route component={RegisterApp} exact path="/register"></Route>
        <PrivateRoute
          component={MessangerApp}
          exact
          path="/messages"
        ></PrivateRoute>
        <Route component={() => "404 Not Found"} path="*"></Route>
      </Switch>
    );
  }
}

export default Router;
