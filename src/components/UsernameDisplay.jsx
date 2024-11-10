import { useUser } from "../context/UserContext";

/**
 *  This component should render the current username
 */
const UsernameDisplay = () => {
    // 👇 Find the current username and then show it

    const { username } = useUser();

    return <div>{username}</div>;
};

export default UsernameDisplay;
