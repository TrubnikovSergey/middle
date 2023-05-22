import сategoryList from "../assets/location.json";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

interface CategoryProps {
  id: number;
  name: string;
  dimension: string;
  type: string;
  created: string;
}

const Category = () => {
  const { id } = useParams();
  const [data, setData] = useState<CategoryProps | CategoryProps[] | null>(null);

  useEffect(() => {
    if (id) {
      const findCategory = сategoryList.find((item) => item.id === Number(id));

      if (findCategory) {
        setData(findCategory);
      }
    } else {
      setData(сategoryList);
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
        </div>
      );
    }
  } else {
    if (data && Array.isArray(data)) {
      renderJSX = (
        <>
          {data.map((item) => (
            <Link to={`/category/${item.id}`} key={item.id}>
              {item.name}
            </Link>
          ))}
        </>
      );
    }
  }

  return renderJSX;
};

export default Category;

// const Category = () => {
//   return <h1>Category</h1>;
// };

// export default Category;
