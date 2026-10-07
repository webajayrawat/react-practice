import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { AiFillMoon, AiFillSun } from "react-icons/ai";

import { Button, Col, Row } from "antd";

const App = () => {
  const { toggleTheme, isDark } =   useContext(ThemeContext);

  return (
    <>
      <div
        className={`wrapper ${isDark ? 'dark' : 'light'}`}
      >
        <div className="w-100">
          <Row>
            <Col span={24}>
              <Button className={`theme_btn ${isDark ? '--light' : '--dark'}`} onClick={toggleTheme}>
                {isDark ? <AiFillSun /> : <AiFillMoon />}
              </Button>
            </Col>
          </Row>

        </div>
      </div>
    </>
  );
};

export default App;