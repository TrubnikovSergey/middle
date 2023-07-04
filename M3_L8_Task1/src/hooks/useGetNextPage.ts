import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export const useGetNextPage = (url: string, page: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [respons, setRespons] = useState<AxiosResponse>();

  useEffect(() => {
    setLoading(true);
    axios({ method: "GET", url: `${url}`, params: { page } })
      .then((res) => {
        setLoading(false);
        setRespons(res);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
        console.log(e);
      });
  }, [page]);

  return { loading, error, respons };
};
