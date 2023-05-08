import heroes from "../assets/characters.json";
import "./home.css";

const Home = () => {
  return (
    <>
      {heroes.map((item) => {
        const { image: src, name, status, species, type, gender, created } = item;

        const dateCreated = new Date(created);

        return (
          <div className="wrapperHero">
            <div className="containerImage">
              <img className="image" src={src} alt="face" />
            </div>
            <div className="containerInfo">
              <div className="info">
                <li className="liInfo">
                  Имя: <span className="valueProps">{name}</span>
                </li>
                <li className="liInfo">
                  Статус: <span className="valueProps">{status}</span>
                </li>
                <li className="liInfo">
                  Разновидность: <span className="valueProps">{species}</span>
                </li>
                <li className="liInfo">
                  Тип: <span className="valueProps">{type}</span>
                </li>
                <li className="liInfo">
                  Пол: <span className="valueProps">{gender}</span>
                </li>
                <li className="liInfo">
                  Создан: <span className="valueProps">{dateCreated.toLocaleString()}</span>
                </li>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
