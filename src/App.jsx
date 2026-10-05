import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { Button } from "antd";

const App = () => {
  const { theme, toggleTheme, isDark } =
    useContext(ThemeContext);

  return (
    <div
      className={`wrapper ${isDark ? 'dark' : 'light'}`}
    >
      <h1>Theme Context</h1>
      <p>Current Theme: {theme}</p>
      <Button onClick={toggleTheme}>
        Change to {isDark ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default App;