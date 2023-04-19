import { useState } from "react";

export const useLocalStorage = (token) => {
  const [storageToken, setStorageToken] = useState(token);

  const setItem = (newToken) => {
    localStorage.setItem(newToken, newToken);
    setStorageToken(newToken);
  };
  const removeItem = () => {
    localStorage.removeItem(storageToken);
    setStorageToken("");
  };

  return [storageToken, { setItem, removeItem }];
};
