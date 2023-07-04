import episodeList from "../assets/episode.json";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Card from "../components/card";
import { useGetNextPage } from "../hooks/useGetNextPage";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";

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
  const [opened, { open, close }] = useDisclosure(false);

  const { loading, error, respons } = useGetNextPage("https://rickandmortyapi.com/api/episode", page);
  const isArrayWithLength = typeof respons?.data === "object" && respons?.data.results.length > 0;
  const is404 = !isArrayWithLength && respons?.request?.responseURL?.includes("offline.html");

  useEffect(() => {
    if (respons && isArrayWithLength) {
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
          if (respons?.data?.info?.pages && page < respons.data.info.pages) {
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

  let renderJSX: React.JSX.Element | null = null;

  if (dataList) {
    const episode = dataList.find((item) => item.id === Number(id));

    renderJSX = (
      <>
        {episode && (
          <Modal opened={opened} onClose={close} withCloseButton={false} size={500}>
            <Card withoutWrapp={true}>
              <div className="containerInfo">
                <div className="info">
                  <li className="liInfo">
                    Имя: <span className="valueProps">{episode.name}</span>
                  </li>
                  <li className="liInfo">
                    air_date: <span className="valueProps">{episode.air_date}</span>
                  </li>
                  <li className="liInfo">
                    Эпизод: <span className="valueProps">{episode.episode}</span>
                  </li>
                  <li className="liInfo">
                    Создан: <span className="valueProps">{new Date(episode.created).toLocaleString()}</span>
                  </li>
                </div>
              </div>
            </Card>
          </Modal>
        )}
        {dataList.map((item, idx) => {
          if (idx + 10 === dataList.length) {
            return (
              <Link ref={lastNode} to={`/episode/${item.id}`} key={item.id} onClick={open}>
                {item.name}
              </Link>
            );
          }

          return (
            <Link to={`/episode/${item.id}`} key={item.id} onClick={open}>
              {item.name}
            </Link>
          );
        })}
        {loading && <h1>...Loading...</h1>}
        {is404 && <h1>404 Not Found</h1>}
      </>
    );
    // }
  }

  return renderJSX;
};

export default Episode;
