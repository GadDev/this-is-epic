import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Content from "../pages/Content";

const routesConfig = [
  {
    path: "/",
    exact: "true",
    component: Home,
  },
  {
    path: "/content",
    exact: "true",
    component: Content,
  },
];

export default function Routes() {
  return (
    <Switch>
      {routesConfig.map((route, i) => (
        <StandardRoute key={i} {...route} />
      ))}
    </Switch>
  );
}

function StandardRoute(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
