import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useTranslate } from "../hooks/useTranslate";
import { useTheme } from "../context/ThemeContext";

/**
 * This component should have an input and a button that changes the username to the input's value
 * the text in the component should be in the current language of the website, and the classnames should correspond with the current theme
 */
const UsernameChanger = () => {
    const [text, setText] = useState("");

    const { changeUsername } = useUser();
    const { theme } = useTheme();
    const translate = useTranslate();

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleSubmit(event) {
        changeUsername(text);
    }

    const WHATS_YOUR_NAME = translate('whatYourName');
    const CHANGE_USERNAME = translate("changeUsername");

    return (
        <div>
            <span>{WHATS_YOUR_NAME}</span>
            <br /><br />
            <input value={text} onChange={handleChange} />
            <br /><br />
            <button className={`${theme}-theme-button clickable`} onClick={handleSubmit}>{CHANGE_USERNAME}</button>
        </div>
    );
};

export default UsernameChanger;