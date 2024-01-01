import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, ButtonGroup, Grid, Show } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform,setSelectedPlatform] = useState<Platform | null > (null);
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
        <PlatformSelector selectedPlatform = {selectedPlatform} onSelectPlatform = {(platform) => setSelectedPlatform(platform)}/>
        <GameGrid SelectedPlatform = {selectedPlatform} selectedGenre={selectedGenre} /> // Fix: Import the GameGrid component and ensure it is properly exported as a JSX component.
      </GridItem>
    </Grid>
  );
}

export default App;
