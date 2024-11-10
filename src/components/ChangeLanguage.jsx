
/** 
 * This component should render a button that toggles the language when clicked.
 * the text in the component should be in the current language of the website, and the classnames should correspond with the current theme
*/
const ChangeLanguage = () => {
    // 🔥 Crate a function to toggle the language and the current text in the button should be in the current language

    function toggleLanguage() {
        // 🔥 Toggle the language
    }

    return (
        <div>
            <button className={`clickable`} onClick={toggleLanguage}>English</button>
        </div>
    );
};

export default ChangeLanguage;