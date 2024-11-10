import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { useTranslate } from "../hooks/useTranslate";

/** 
 * This component should render a button that toggles the language when clicked.
 * the text in the component should be in the current language of the website, and the classnames should correspond with the current theme
*/
const ChangeLanguage = () => {

    const { theme } = useTheme();
    const { toggleLanguage } = useLanguage();
    const translate = useTranslate();

    const LANG_NAME = translate("langName");
    
    return (
        <div className={`${theme}-theme-clr`}>
            <button className={`${theme}-theme-button clickable`} onClick={toggleLanguage}>{LANG_NAME}</button>
        </div>
    );
};

export default ChangeLanguage;