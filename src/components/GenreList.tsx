import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GeneresSkeleton from "./GeneresSkeleton";
import GameCardContainer from "./GameCardContainer"; // Import the GameCardContainer component
import { Button } from "@chakra-ui/react"; // Import the Button component


interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}:Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1,2,3,4,5,6];


  if (error) return null;
  // if (isLoading) return <Spinner />

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GeneresSkeleton  />
          // </GameCardContainer>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          {" "}
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={()=> onSelectGenre(genre)} fontSize="lg" variant = 'link' >{genre.name}</Button>
          </HStack>
        </ListItem>
      ))
}
    </List>
  );
};

export default GenreList;
