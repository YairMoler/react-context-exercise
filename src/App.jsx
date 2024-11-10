import UsernameChanger from "./components/UsernameChanger";
import UsernameDisplay from "./components/UsernameDisplay";
import Buttons from "./components/Buttons";

import "./App.css";
import UserProvider from "./context/UserContext";
import LanguageProvider from "./context/LanguageContext";

function App() {
    return (
        <>
            <LanguageProvider>
                <UserProvider>
                    <UsernameChanger />
                    <UsernameDisplay />
                </UserProvider>
                <Buttons />
            </LanguageProvider>
        </>
    );
}

export default App;
