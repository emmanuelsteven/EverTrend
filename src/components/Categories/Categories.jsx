import React, { useEffect, useState } from "react";
import "./Categories.css";
import Mainwatch from "../../assets/imgs/Smart3.png";
import headphone from "../../assets/imgs/headphone.png";
import lappy from "../../assets/imgs/Laptop1.png";
import mic from "../../assets/imgs/microphone.jpg";
import Tv from "../../assets/imgs/tv.png";
import mixer from "../../assets/imgs/Iron.png";

const Products = [
  {
    title: "Smart Watch wireless",
    currentPrice: "#300,000",
    originalPrice: "#500,000",
    img: Mainwatch,
    class: "resize3",
  },
  {
    title: "Gaming Headset",
    currentPrice: "#50,000",
    originalPrice: "#500,000",
    img: headphone,
    class: "resize3",
  },
  {
    title: "Corei7 Laptop",
    currentPrice: "#300,000",
    originalPrice: "#500,000",
    img: lappy,
    class: "resize3",
  },
  {
    title: "binatone mixer",
    currentPrice: "#300,000",
    originalPrice: "#500,000",
    img: mixer,
    class: "resize3",
  },
  {
    title: "samsung tv",
    currentPrice: "#300,000",
    originalPrice: "#500,000",
    img: Tv,
    class: "resize3",
  },
  {
    title: "Studio Mic",
    currentPrice: "#300,000",
    originalPrice: "#500,000",
    img: mic,
    class: "resize3",
  },
];

const Categories = ({ addToCart }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === Products.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  console.log("Categories component rendered");

  return (
    <section className="categories">
      <h3>Featured Categories</h3>
      <div className="slider-container">
        <div className="slider">
          <div
            className="slides"
            style={{
              transform: `translateX(-${
                activeIndex * (100 / Products.length)
              }%)`,
            }}
          >
            {Products.map((product, index) => (
              <div key={index} className="slide">
                <div
                  className={`card ${
                    activeIndex === index ? "slider-active" : ""
                  }`}
                >
                  <h4>{product.title}</h4>
                  <p>
                    <span className="current-price">
                      {product.currentPrice}
                    </span>
                    <span className="original-price">
                      {product.originalPrice}
                    </span>
                  </p>
                  <button
                    className="buy-now"
                    onClick={() => addToCart(product)}
                  >
                    Buy Now
                  </button>
                  <img
                    src={product.img}
                    alt={product.title}
                    className={`category-img ${product.class}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="navigation-manual">
          {Products.map((product, index) => (
            <label
              key={index}
              htmlFor={`radio${index + 1}`}
              className={`manual-btn ${
                activeIndex === index ? "manual-btn-active" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
