import сategoryList from "../assets/location.json";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Card from "../components/card";
import { useGetNextPage } from "../hooks/useGetNextPage";

interface CategoryProps {
  id: number;
  name: string;
  dimension: string;
  type: string;
  created: string;
}

const Category = () => {
  const { id } = useParams();
  const [data, setData] = useState<CategoryProps | null>(null);
  const [dataList, setDataList] = useState<CategoryProps[]>([]);
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver>();

  const { loading, error, respons } = useGetNextPage("https://rickandmortyapi.com/api/location", page);

  useEffect(() => {
    if (respons && respons?.data.results.length > 0) {
      setDataList((prev) => [
        ...new Set([
          ...prev,
          ...respons.data.results.filter((item: CategoryProps) => {
            const find = prev.find((el) => el.id === item.id);
            const isNeedElemetn = !Boolean(find);

            return isNeedElemetn;
          }),
        ]),
      ]);
    }
  }, [respons]);

  useEffect(() => {
    if (id) {
      const findCategory = dataList.find((item) => item.id === Number(id));

      if (findCategory) {
        setData(findCategory);
      }
    }
  }, [id]);

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
                Измерение: <span className="valueProps">{data.dimension}</span>
              </li>
              <li className="liInfo">
                Тип: <span className="valueProps">{data.type}</span>
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
            if (idx + 20 === dataList.length) {
              return (
                <Link ref={lastNode} to={`/category/${item.id}`} key={item.id}>
                  {item.name}
                </Link>
              );
            }
            return (
              <Link to={`/category/${item.id}`} key={item.id}>
                {item.name}
              </Link>
            );
          })}
        </>
      );
    }
  }

  return renderJSX;
};

export default Category;