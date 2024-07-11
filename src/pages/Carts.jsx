import React from "react";
import "./Cart.css"

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="item-details">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
