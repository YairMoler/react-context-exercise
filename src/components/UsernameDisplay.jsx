import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

/**
 *  This component should render the current username
 */
const UsernameDisplay = () => {
  const { user } = useUser();
  const { theme } = useTheme();

  return <div className={`${theme}-theme-clr`}>{user}</div>;
};

export default UsernameDisplay;
