import { IoIosMegaphone } from "react-icons/io";
import "./Checkoutpage.css";

const Checkoutpage = () => {
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
      <section className="payout">
        <div className="product-review">
          <h3>Product Review</h3>
          <div className="product-card">
            <div className="product-details">
              <h4>Product Name</h4>
              <p>Product Name</p>
              <p>Product Name</p>
            </div>
            <div className="product-price">
              <p>Price</p>
              <p>Price</p>
              <p>Price</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkoutpage;
