import { NavLink } from "react-router-dom";
import "./navPanel.css";

const NavPanel = () => {
  return (
    <ul className="navPanel">
      <li>
        <NavLink to="/">Герои</NavLink>
      </li>
      <li>
        <NavLink to="/category">Локации</NavLink>
      </li>
      <li>
        <NavLink to="/episode">Эпизоды</NavLink>
      </li>
    </ul>
  );
};

export default NavPanel;
