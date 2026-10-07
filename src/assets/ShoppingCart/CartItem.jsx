import { Button } from "antd";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart_item">
      <div>
        <h3>{item.name}</h3>
        <p>₹{item.price} × {item.quantity}</p>
        <strong>₹{item.price * item.quantity}</strong>
      </div>
      <div className="quantity_controls">
        <Button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</Button>
        <span>{item.quantity}</span>
        <Button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</Button>
      </div>
      <Button danger onClick={() => onRemove(item.id)}>Remove</Button>
    </div>
  );
};

export default CartItem;