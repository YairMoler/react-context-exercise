import { useState } from "react";

/**
 * This component should have an input and a button that changes the username to the input's value
 * the text in the component should be in the current language of the website, and the classnames should correspond with the current theme
 */
const UsernameChanger = () => {
    const [text, setText] = useState("");
    // 1. 👇 Create a function that will change the username

    function changeUsername() {
        // 🔥 Change the username
    }

    // 2. 🌟 Find the current language 

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <span>What is your name?</span>
            <br /><br />
            <input value={text} onChange={handleChange} />
            <br /><br />
            <button className={`${''}-theme-button clickable`} onClick={changeUsername}>change username</button>
        </div>
    );
};

export default UsernameChanger;