import episodeList from "../assets/episode.json";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Card from "../components/card";
import { useGetNextPage } from "../hooks/useGetNextPage";

interface EpisodeProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

const Episode = () => {
  const { id } = useParams();
  const [data, setData] = useState<EpisodeProps | null>(null);
  const [dataList, setDataList] = useState<EpisodeProps[]>([]);
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver>();

  const { loading, error, respons } = useGetNextPage("https://rickandmortyapi.com/api/episode", page);

  useEffect(() => {
    if (respons && respons?.data.results.length > 0) {
      setDataList((prev) => [
        ...new Set([
          ...prev,
          ...respons.data.results.filter((item: EpisodeProps) => {
            const find = prev.find((el) => el.id === item.id);
            const isNeedElemetn = !Boolean(find);

            return isNeedElemetn;
          }),
        ]),
      ]);
    }
  }, [respons]);

  const lastNode = useCallback(
    (node: HTMLAnchorElement) => {
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (page < respons?.data.info.pages) {
            setPage((prev) => prev + 1);
          }
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, respons]
  );

  useEffect(() => {
    const findEpisode = dataList.find((item) => item.id === Number(id));

    if (findEpisode) {
      setData(findEpisode);
    }
  }, [id]);

  let renderJSX: React.JSX.Element | null = null;

  if (id) {
    if (data) {
      renderJSX = (
        <Card>
          <div className="containerInfo">
            <div className="info">
              <li className="liInfo">
                Имя: <span className="valueProps">{data.name}</span>
              </li>
              <li className="liInfo">
                air_date: <span className="valueProps">{data.air_date}</span>
              </li>
              <li className="liInfo">
                Эпизод: <span className="valueProps">{data.episode}</span>
              </li>
              <li className="liInfo">
                Создан: <span className="valueProps">{new Date(data.created).toLocaleString()}</span>
              </li>
            </div>
          </div>
        </Card>
      );
    }
  } else {
    if (dataList) {
      renderJSX = (
        <>
          {dataList.map((item, idx) => {
            if (idx + 10 === dataList.length) {
              return (
                <Link ref={lastNode} to={`/episode/${item.id}`} key={item.id}>
                  {item.name}
                </Link>
              );
            }

            return (
              <Link to={`/episode/${item.id}`} key={item.id}>
                {item.name}
              </Link>
            );
          })}
          {loading && <h1>...Loading...</h1>}
        </>
      );
    }
  }

  return renderJSX;
};

export default Episode;
