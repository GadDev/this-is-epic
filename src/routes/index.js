import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "../pages/Home";
import Article from "../pages/Article";

import "./animation.css";

const routesConfig = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/article",
    component: Article,
  },
];

export default function Routes() {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={3000}>
        <Switch location={location}>
          {routesConfig.map((route, i) => (
            <StandardRoute key={i} {...route} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

function StandardRoute(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}
