import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useLanguage } from "../context/LanguageContext";

/**
 * This component should have an input and a button that changes the username to the input's value
 * the text in the component should be in the current language of the website, and the classnames should correspond with the current theme
 */
const UsernameChanger = () => {
    const [text, setText] = useState("");
    // 1. 👇 Create a function that will change the username
    const user = useUser();

    function changeUsername() {
        // 🔥 Change the username
        user.setUsername(text);
    }

    // 2. 🌟 Find the current language
    const { language } = useLanguage();
    console.log("language: ", language);

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <span>{language ? "What is your name?" : "מה השם שלך"}</span>
            <br />
            <br />
            <input value={text} onChange={handleChange} />
            <br />
            <br />
            <button className={`${""}-theme-button clickable`} onClick={changeUsername}>
                {language ? "change username" : "שנה שם"}
            </button>
        </div>
    );
};

export default UsernameChanger;
