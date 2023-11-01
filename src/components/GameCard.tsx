import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

// we will pass a game obj as prop to this component so for this we use interface to define the shape of the props
interface Props {
  game: Game; //we define a game property of type game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl ">{game.name}</Heading>
       <PlatformIconList platforms = {game.parent_platforms.map(p => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
