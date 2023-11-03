import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, ButtonGroup, Grid, Show } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

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
        <GridItem area="aside" >
          <GenreList />
          Nav
        </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
