import axios from "axios";
import { useEffect, useState } from "react";

const http = axios.create();

const useFetch = (url) => {
  // data, isLoading, error, refetch
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(Boolean(url));
  const [error, setError] = useState(null);

  const refetch = (arg) => {
    if (arg?.params?._limit) {
      http
        .get(url, { params: arg.params })
        .then((resp) => {
          setIsLoading(false);
          setData(resp.data);
        })
        .catch((error) => setError(error));
    }
  };

  useEffect(() => {
    http
      .get(url)
      .then((resp) => {
        setIsLoading(false);
        setData(resp.data);
      })
      .catch((error) => setError(error));
  }, []);

  return { data, isLoading, error, refetch };
};

export default useFetch;
