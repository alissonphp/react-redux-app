import React from "react";
import { Link } from "react-router-dom";

import { Button, Toolbar, Grid, Hidden } from "@material-ui/core";
import { Dashboard, List } from "@material-ui/icons";

export default () => {
  return (
    <Toolbar>
      <Grid container direction="row" alignItems="center">
        <Hidden xsDown>
          <Grid item md={6} sm={6} xs={12}>
            <Link to="/">
              <Button href="" variant="contained">Billing Cycles React App</Button>
            </Link>
          </Grid>
        </Hidden>
        <Grid item md={6} sm={6} xs={12}>
          <Grid container direction="row" justify="flex-end">
            <Link to="/">
              <Button startIcon={<Dashboard />}>Dashboard</Button>
            </Link>
            <Link to="/billingCycle">
              <Button startIcon={<List />}>Billing Cycles</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  );
};
