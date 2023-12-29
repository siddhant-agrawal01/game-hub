import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, ButtonGroup, Grid, Show } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" 'aside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
          Nav
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} /> // Fix: Import the GameGrid component and ensure it is properly exported as a JSX component.
      </GridItem>
    </Grid>
  );
}

export default App;
