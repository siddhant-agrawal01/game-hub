import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";


interface Props {
    children : ReactNode
}
const GameCardContainer = ({children}:Props) => {
  return (
    <>
    {children}
    </>
  );
};

export default GameCardContainer;
