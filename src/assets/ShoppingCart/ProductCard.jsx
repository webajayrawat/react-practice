import { Button } from "antd";
import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product_card">
      <h3 className="heading">{product.name}</h3>

      <p className="price_text">
        ₹{product.price}
      </p>

      <Button
        type="primary"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;