import { Navigate } from "react-router-dom";
import { useAuthContext } from "../components/authProvider";
import { useEffect } from "react";

const Logout = () => {
  const auth = useAuthContext();

  useEffect(() => {
    return () => auth.logout();
  });

  return <Navigate to="/" />;
};

export default Logout;
