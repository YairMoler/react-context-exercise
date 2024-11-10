import UsernameChanger from "./components/UsernameChanger";
import UsernameDisplay from "./components/UsernameDisplay";
import Buttons from "./components/Buttons";

import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { UserProvider } from "./context/UserContext";

import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <UserProvider>
            <UsernameChanger />
            <UsernameDisplay />
            <Buttons />
          </UserProvider>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;



