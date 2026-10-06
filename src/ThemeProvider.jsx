import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === "dark" ? "light" : "dark"
        );
        console.log(
            theme,
            toggleTheme
        )
    };

    const valueData = {
        theme,
        toggleTheme,
        isDark: theme === "dark",
    };

    return (
        <ThemeContext.Provider value={valueData}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;