import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, onUpdateQuantity, onRemove, total, }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart_list">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}

          </div>

          <div className="cart_total">
            <h3>Total: ₹{total}</h3>
          </div>
        </>
      )}

    </div>
  );
};

export default Cart;