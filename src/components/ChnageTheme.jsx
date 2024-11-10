import { useTheme } from "../context/ThemeContext";
import React from "react";
import { useTranslate } from "../hooks/useTranslate";

/**
 * This component should render a button that toggles the theme when clicked.
 * the text in the component should be in the current language of the website, and the classnames should correspond with the current theme
 * 
 */
const ChangeTheme = () => {

  const { theme, toggleTheme } = useTheme();
  const translate = useTranslate();

  const THEME = translate(theme === "dark" ? "light" : "dark")
  
  return (
    <div className={`${theme}-theme-clr`}>
      <button
        className={`${theme}-theme-button clickable`}
        onClick={toggleTheme}
      >
        {THEME}
      </button>
    </div>
  );
};
export default ChangeTheme;
