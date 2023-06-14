import React, { JSX, useEffect, useState, useCallback, useRef } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import { useParams, Link } from "react-router-dom";
import heroesJSON from "../assets/characters.json";
import Card from "../components/card";
import { useGetNextPage } from "../hooks/useGetNextPage";
import "./hero.css";

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
  const [hero, setHero] = useState<HeroesItem | null>(null);
  const [heroList, setHeroList] = useState<HeroesItem[]>([]);
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver>();
  const [opened, { open, close }] = useDisclosure(false);

  const { loading, error, respons } = useGetNextPage("https://rickandmortyapi.com/api/character", page);

  useEffect(() => {
    if (respons && respons?.data.results.length > 0) {
      setHeroList((prev) => {
        return [
          ...new Set([
            ...prev,
            ...respons.data.results.filter((item: HeroesItem) => {
              const find = prev.find((el) => el.id === item.id);
              const isNeedElemetn = !Boolean(find);

              return isNeedElemetn;
            }),
          ]),
        ];
      });
    }
  }, [respons]);
  throw new Error("test");
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

  let renderJSX: JSX.Element | null = null;

  if (heroList) {
    const hero = heroList.find((item) => item.id === Number(id));

    renderJSX = (
      <>
        {hero && (
          <Modal opened={opened} onClose={close} withCloseButton={false} size={500}>
            <Card withoutWrapp={true}>
              <div className="containerImage">
                <img className="image" src={hero.image} alt="face" />
              </div>
              <div className="containerInfo">
                <div className="info">
                  <li className="liInfo">
                    Имя: <span className="valueProps">{hero.name}</span>
                  </li>
                  <li className="liInfo">
                    Статус: <span className="valueProps">{hero.status}</span>
                  </li>
                  <li className="liInfo">
                    Разновидность: <span className="valueProps">{hero.species}</span>
                  </li>
                  <li className="liInfo">
                    Тип: <span className="valueProps">{hero.type}</span>
                  </li>
                  <li className="liInfo">
                    Пол: <span className="valueProps">{hero.gender}</span>
                  </li>
                  <li className="liInfo">
                    Создан: <span className="valueProps">{new Date(hero.created).toLocaleString()}</span>
                  </li>
                </div>
              </div>
            </Card>
          </Modal>
        )}
        {heroList.map((item, idx) => {
          if (idx + 10 === heroList.length) {
            return (
              <Link key={item.id} ref={lastNode} to={`/hero/${item.id}`} onClick={open}>
                {item.name}
              </Link>
            );
          }

          return (
            <Link key={item.id} to={`/hero/${item.id}`} onClick={open}>
              {item.name}
            </Link>
          );
        })}
        {loading && <h1>...Loading...</h1>}
      </>
    );
  }

  return renderJSX;
};

export default Hero;
