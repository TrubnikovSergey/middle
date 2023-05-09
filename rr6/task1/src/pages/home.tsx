import { Outlet } from "react-router-dom";
import NavPanel from "../components/navPanel";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="hello">
        Добро пожаловать во вселенную
        <br />
        Рика и Морти.
      </div>
      <NavPanel />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};
export default Home;
