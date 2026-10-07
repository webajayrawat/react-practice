import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ThemeContext from "../../ThemeContext";
import { AiFillMoon, AiFillSun } from "react-icons/ai";

import { Button, Col, Row } from "antd";

const App = () => {
  const { toggleTheme, isDark } =
    useContext(ThemeContext);

  const [posts, setPosts] = useState([]);

  const API = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
      .get(API)
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  }, [])
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
          <Row>
             {posts.map((post) => (
              <Col span={24} key={post.id}>
                <div className="card_item">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default App;