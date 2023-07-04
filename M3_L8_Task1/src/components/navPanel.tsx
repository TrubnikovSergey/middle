import { NavLink } from "react-router-dom";
import "./navPanel.css";
import { useAuthContext } from "../components/authProvider";

const NavPanel = () => {
  const auth = useAuthContext();

  return (
    <ul className="navPanel">
      <li>
        <NavLink to="/hero">Герои</NavLink>
      </li>
      <li>
        <NavLink to="/category">Локации</NavLink>
      </li>
      <li>
        <NavLink to="/episode">Эпизоды</NavLink>
      </li>
      <li>{auth.isAuth ? <NavLink to="/logout">logout</NavLink> : <NavLink to="/login">login</NavLink>}</li>
    </ul>
  );
};

export default NavPanel;
