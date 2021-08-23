import React from "react";
import Landing from "../pages/Landing";
import Project from "../pages/Project";
import Trial from "../pages/Trial";
import Dashboard from "../pages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/trial" exact component={Trial} />
        <Route
          path="/trial/project/:projectId"
          exact
          render={(props) => <Project {...props} />}
        />
        <Route
          path="/trial/dashboard"
          exact
          component={Dashboard}
        />
      </Switch>
    </Router>
  );
}
