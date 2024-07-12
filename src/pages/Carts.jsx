import React from "react";
import "./Carts.css";
import { FaTruck } from "react-icons/fa";
import { useStore } from "../utils/storeContext";
import { MdDelete } from "react-icons/md";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useStore();

  return (
    <div className="container2 cart-page">
      <div className="cart-text">
        <h1>Shopping Cart</h1>
        <p>Buy 10 items and get free shipment</p>
        <FaTruck />
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="table-container">
            <table className="tab">
              <thead className="tab2">
                <tr className="tab3">
                  <th>Product</th>
                  <th>Variation</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        className="item-image"
                        alt={item.title}
                      />
                    </td>
                    <td>
                      <div className="txt">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <a href="#">Add to favourite</a>
                      </div>
                    </td>
                    <td>
                      <div className="quantity-controls">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <p>{`₦ ${item.price}`}</p>
                    </td>
                    <td>
                      {`₦ ${item.price * item.quantity} `}
                      <MdDelete
                        className="delete-icon"
                        onClick={() => removeFromCart(item.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart-summary-section">
            <div className="coupon">
              <h3>Have a coupon?</h3>
              <p>Add your code below for an instant discount</p>
              <input type="text" placeholder="Input" />
              <button>Apply</button>
            </div>
            <div className="summary">
              <h3>Cart Summary</h3>
              <p>Subtotal: ₦ {totalPrice}</p>
              <p>Discount: -₦ 10,000.00</p>
              <p>Tax: ₦ 0.00</p>
              <p>Shipping: ₦ 5,000.00</p>
              <p>Total: ₦ {totalPrice - 10000 + 5000}</p>
              <button>Proceed to checkout page</button>
              <p>
                Estimated delivery by <strong>20 March, 2024</strong>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
