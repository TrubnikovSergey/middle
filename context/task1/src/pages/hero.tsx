import { JSX, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import heroesJSON from "../assets/characters.json";
import "./hero.css";
import Card from "../components/card";

interface HeroesItem {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
}

const Hero = () => {
  const { id } = useParams();
  const [data, setData] = useState<HeroesItem | HeroesItem[] | null>(null);

  useEffect(() => {
    if (id) {
      const findHero = heroesJSON.find((item) => item.id === Number(id));
      if (findHero) {
        setData(findHero);
      }
    } else {
      setData(heroesJSON);
    }
  }, [id]);

  let renderJSX: JSX.Element | null = null;

  if (id) {
    if (data && !Array.isArray(data)) {
      renderJSX = (
        <Card>
          <div className="containerImage">
            <img className="image" src={data.image} alt="face" />
          </div>
          <div className="containerInfo">
            <div className="info">
              <li className="liInfo">
                Имя: <span className="valueProps">{data.name}</span>
              </li>
              <li className="liInfo">
                Статус: <span className="valueProps">{data.status}</span>
              </li>
              <li className="liInfo">
                Разновидность: <span className="valueProps">{data.species}</span>
              </li>
              <li className="liInfo">
                Тип: <span className="valueProps">{data.type}</span>
              </li>
              <li className="liInfo">
                Пол: <span className="valueProps">{data.gender}</span>
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
    if (data && Array.isArray(data)) {
      renderJSX = (
        <>
          {data.map((item) => (
            <Link to={`/hero/${item.id}`} key={item.id}>
              {item.name}
            </Link>
          ))}
        </>
      );
    }
  }

  return renderJSX;
};

export default Hero;
