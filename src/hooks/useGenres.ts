import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

 interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}


  const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      //now when making GET request,you pass an object as a second argument and set the signal property to a controller that signal
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", { signal: controller.signal })
        .then((res) => {
          setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort(); // calling the cleanup fn
    }, []); // an array dependencies,without this bcoz sending a req to our backend,something that we never want to happen

    return {
      genres,
      error,
      isLoading,
    };
  };

export default useGenres;
