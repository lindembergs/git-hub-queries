import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  return (
    <UserContext.Provider
      value={{ userData, setUserData, isLogged, setIsLogged }}
    >
      {children}
    </UserContext.Provider>
  );
};
