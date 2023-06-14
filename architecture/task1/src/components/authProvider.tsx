import React, { createContext, useState, useContext } from "react";

interface authContext {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
}
interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthContext = createContext<authContext>({ isAuth: false, login: () => {}, logout: () => {} });

export function useAuthContext() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<boolean>(false);

  const handleLogin = () => {
    setAuth(true);
  };
  const handleLogout = () => {
    setAuth(false);
  };

  return <AuthContext.Provider value={{ isAuth: auth, login: handleLogin, logout: handleLogout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
