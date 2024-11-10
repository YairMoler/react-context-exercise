import { createContext, useContext, useState } from "react";

//make a context called LanguageContext and a context provider component.
//the context should control the language of the website

//the values that are provided to the context should be: language, toggleLanguage
// create functions in the context provider the toggle the language
// the language should be Hebrew or English

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("Hebrew");
  const toggleLanguage = () => {
    setLanguage(language === "Hebrew" ? "English" : "Hebrew");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);