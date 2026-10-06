import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { Button } from "antd";

const App = () => {


  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used witin Themeprovider")
  }
  console.log(context)

  // const { theme, toggleTheme, isDark } =
  //   useContext(ThemeContext);

  return (
    <div
      className={`wrapper ${context.isDark ? 'dark' : 'light'}`}
    >
      <h1>Theme Context</h1>
      <p>Current Theme: {context.theme}</p>
      <Button onClick={context.toggleTheme}>
        Change to {context.isDark ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default App;