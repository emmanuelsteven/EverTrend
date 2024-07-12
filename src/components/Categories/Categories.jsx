import React, { useEffect, useState } from "react";
import "./Categories.css";
import { Products } from "../../Products";

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
    <section id="categories" className="categories">
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
