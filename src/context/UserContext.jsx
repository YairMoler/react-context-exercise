import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const changeUsername = (str) => {
    if (typeof str !== "string") return;
    setUser(str);
  };

  return (
    <UserContext.Provider value={{ user, changeUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
