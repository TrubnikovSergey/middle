import { Outlet } from "react-router-dom";
import NavPanel from "./navPanel";

const Layout = () => {
  return (
    <>
      <NavPanel />
      <Outlet />
    </>
  );
};

export default Layout;
