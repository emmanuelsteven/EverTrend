import React, { useState } from "react";
import { useStore } from "../utils/storeContext";
import { IoIosMegaphone } from "react-icons/io";
import "./Checkoutpage.css";

const CheckoutPage = () => {
  const { cartItems, totalPrice } = useStore();
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handlePayment = () => {
    // Simulate payment processing
    setIsPaymentSuccessful(true);
  };

  const closeModal = () => {
    setIsPaymentSuccessful(false);
  };

  return (
    <>
      <section className="otp">
        <div className="speakericon">
          <IoIosMegaphone />
        </div>
        <p>
          To complete the payment process a one-time (OTP) would be sent to your
          phone
        </p>
      </section>

      <div className="checkout-container">
        <div className="product-review">
          <h2>Product review</h2>
          {cartItems.map((item) => (
            <div className="product-item" key={item.id}>
              <div className="productcard">
                <img
                  src={`https://api.timbu.cloud/images/${item?.photos[0]?.url}`}
                  alt={item.name}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    Color: {item.color} | Seller: {item.seller}
                  </p>
                  <p>Price: ₦{item.current_price?.[0]?.NGN?.[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="payment-details">
          <h2>Payment Details</h2>
          <div className="address">
            <h3>Billing address</h3>
            <input type="text" placeholder="Enter address" />
          </div>
          <div className="delivery-option">
            <h3>Choose delivery option</h3>
            <div>
              <input type="radio" name="delivery" id="delivery1" />
              <label htmlFor="delivery1">Deliver to My Order</label>
              <span>₦ 7000</span>
            </div>
            <div>
              <input type="radio" name="delivery" id="delivery2" />
              <label htmlFor="delivery2">Pick up at a delivery station</label>
              <span>₦ 1000</span>
            </div>
          </div>
          <div className="card-details">
            <h3>Card details</h3>
            <input type="text" placeholder="Card number" />
            <input type="text" placeholder="Card holder" />
          </div>
          <button className="pay-button" onClick={handlePayment}>
            Pay ₦{totalPrice + 7000}
          </button>
        </div>
      </div>

      {isPaymentSuccessful && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <p>Payment Successful!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
