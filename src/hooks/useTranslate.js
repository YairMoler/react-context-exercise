import { useLanguage } from "../context/LanguageContext";
import { en } from "../lib/118n/en";
import { he } from "../lib/118n/he";

/**
 * This hook should return a function that takes a key and returns the translated text
 * @returns a function that takes a key and returns the translated text
 */
export const useTranslate = () => {
    const { language } = useLanguage();
    const translate = (key) => {
        const langDict = language === 'English' ?  en : he;
        return langDict[key];
    };
    return translate;
};