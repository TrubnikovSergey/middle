import axios from "axios";
import { useEffect, useState } from "react";

const http = axios.create();

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(Boolean(url));
  const [error, setError] = useState(null);

  function catchError(error) {
    setIsLoading(false);
    setData(null);
    setError(error);
  }

  function getRespons(data) {
    setIsLoading(false);
    setData(data);
    setError(null);
  }

  function resetData() {
    setIsLoading(true);
    setError(null);
    setData(null);
  }

  const refetch = (arg) => {
    resetData();

    if (arg?.params?._limit) {
      http
        .get(url, { params: arg.params })
        .then((resp) => {
          getRespons(resp.data);
        })
        .catch((error) => {
          catchError(error);
        });
    }
  };

  useEffect(() => {
    resetData();
    http
      .get(url)
      .then((resp) => {
        getRespons(resp.data);
      })
      .catch((error) => {
        catchError(error);
      });
  }, []);

  return { data, isLoading, error, refetch };
};

export default useFetch;
