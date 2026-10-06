import { Button, Col, Row } from "antd";
import { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";
import { AiFillMoon, AiFillSun } from "react-icons/ai";
import products from "../src/assets/data/products";

import ProductCard from "./assets/ShoppingCart/ProductCard";
import Cart from "./assets/ShoppingCart/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {

      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity,
          }
          : item
      )
    );
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );



  const { toggleTheme, isDark } =
    useContext(ThemeContext);
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
            <Col span={12}>
              <h2 className="main_heading">Products list</h2>
              <div className="products">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
              {/* <ProductCard /> */}
            </Col>
            <Col span={12}>
              <h2 className="main_heading">Shopping Cart</h2>
              <Cart
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
                total={total}
              />
            </Col>

          </Row>
        </div>
      </div>
    </>
  );
};

export default App;