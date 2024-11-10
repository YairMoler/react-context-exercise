//Make a context called UserContext and a context provider component.
//The context should control the username
//The values that are provided to the context should be: username, setUsername

import { useContext, useState } from "react";
import { createContext } from "react";

// 1: 👇create the Context
const userContext = createContext();
// 2: 👇create the Provider Component
export default function UserProvider({ children }) {
    const [username, setUsername] = useState("yair");

    return <userContext.Provider value={{ username, setUsername }}>{children}</userContext.Provider>;
}

// (recommended step): create custom hook 🤓
export const useUser = () => {
    return useContext(userContext);
};
