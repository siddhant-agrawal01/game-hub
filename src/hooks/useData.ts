import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";



interface FetchResponse<T> {
  count: number;
  results: T[];
}


  const useData = <T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      //now when making GET request,you pass an object as a second argument and set the signal property to a controller that signal
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
        .then((res) => {
          setData(res.data.results);
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
      data,
      error,
      isLoading,
    };
  };

export default useData;
