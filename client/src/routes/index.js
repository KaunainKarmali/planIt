import React from "react";
import Landing from "../pages/Landing";
import Trial from "../pages/Trial";
import Project from "../pages/Project";
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
      </Switch>
    </Router>
  );
}
