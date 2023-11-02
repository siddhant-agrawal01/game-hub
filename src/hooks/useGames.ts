import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import { CanceledError } from "axios";


// interface named platform to represent our platform objects
export interface Platform {
  id:number;
  name:string;
  slug:string;

}
export  interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform:Platform}[]
  metacritic:number;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setLoading] = useState(false);

  useEffect(() => {
    //now when making GET request,you pass an object as a second argument and set the signal property to a controller that signal
    const controller = new AbortController();
    setLoading(true)
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results)
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false) 
      });

    return () => controller.abort(); // calling the cleanup fn
  }, []); // an array dependencies,without this bcoz sending a req to our backend,something that we never want to happen

  return {
    games,
    error,
    isLoading
  };
};

export default useGames;
