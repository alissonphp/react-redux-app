import React from "react";

import { Box, Grid, Container } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

import AppBar from "./templates/AppBar/AppBar";
import Routes from "./routes";

export default class App extends React.Component {
  render() {
    return (
      <Box>
        <Router>
          <AppBar />
          <Grid container spacing={3}>
            <Container>
              <Routes />
            </Container>
          </Grid>
        </Router>
      </Box>
    );
  }
}
