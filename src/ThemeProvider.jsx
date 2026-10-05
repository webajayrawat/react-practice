import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === "light" ? "dark" : "light"
        );
        console.log(
            theme,
            toggleTheme
        )
    };

    const value = {
        theme,
        toggleTheme,
        isDark: theme === "dark",
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;