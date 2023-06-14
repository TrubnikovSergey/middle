import episodeList from "../assets/episode.json";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

interface EpisodeProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

const Episode = () => {
  const { id } = useParams();
  const [data, setData] = useState<EpisodeProps | EpisodeProps[] | null>(null);

  useEffect(() => {
    if (id) {
      const findEpisode = episodeList.find((item) => item.id === Number(id));

      if (findEpisode) {
        setData(findEpisode);
      }
    } else {
      setData(episodeList);
    }
  }, [id]);

  let renderJSX: React.JSX.Element | null = null;

  if (id) {
    if (data && !Array.isArray(data)) {
      renderJSX = (
        <div className="wrapperCard">
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
        </div>
      );
    }
  } else {
    if (data && Array.isArray(data)) {
      renderJSX = (
        <>
          {data.map((item) => (
            <Link to={`/episode/${item.id}`} key={item.id}>
              {item.name}
            </Link>
          ))}
        </>
      );
    }
  }

  return renderJSX;
};

export default Episode;
