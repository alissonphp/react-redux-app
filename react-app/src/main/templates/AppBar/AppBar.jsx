import React from "react";

import { AppBar, Container } from "@material-ui/core";

import Toolbar from "./ToolBar";

export default () => (
  <AppBar position="static">
    <Container>
      <Toolbar />
    </Container>
  </AppBar>
);
