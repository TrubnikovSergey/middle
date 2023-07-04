import { Navigate } from "react-router-dom";
import { useAuthContext } from "./authProvider";
import React from "react";

interface PrivateRouteProps {
  children: React.JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const auth = useAuthContext();

  if (!auth.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
