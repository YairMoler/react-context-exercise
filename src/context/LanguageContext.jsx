//Make a context called LanguageContext and a context provider component.
//The context should control the language of the website

import { createContext, useContext, useState } from "react";

// The values that are provided to the context should be: language, toggleLanguage
// Create functions in the context provider the toggle the language
// The language should be Hebrew or English

// 1: 👇create the Context
const LanguageContext = createContext();
// 2: 👇create the Provider Component
export default function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(true);

    return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

// (recommended step): create custom hook 🤓
export const useLanguage = () => {
    return useContext(LanguageContext);
};
