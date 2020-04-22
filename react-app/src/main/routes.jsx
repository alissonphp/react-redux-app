import React from "react";
import { Route, Redirect } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import BillingCycle from "./billingCycle/BillingCycle";

export default () => (
  <React.Fragment>
    <Route exact path="/">
      <Dashboard />
    </Route>
    <Route path="/billingCycle">
      <BillingCycle />
    </Route>
    <Redirect from="*" to="/" />
  </React.Fragment>
);
