import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, ButtonGroup, Grid, Show } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" 'aside main'`,
      }}
    >
      <GridItem area="nav" >
        <Navbar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Nav
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Nav
      </GridItem>
    </Grid>
  );
}

export default App;
