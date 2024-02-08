import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

// we will pass a game obj as prop to this component so for this we use interface to define the shape of the props
interface Props {
  game: Game; //we define a game property of type game
}

const GameCard = ({ game }: Props) => {
  return (
  <Card padding ='2px' borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>

          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl ">{game.name}<Emoji rating = {game.rating_top} /> </Heading>

      </CardBody>
    </Card>
  );
};

export default GameCard;
