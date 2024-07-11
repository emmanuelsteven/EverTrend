import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Heropage from "./components/Heropage/Heropage";
import Categories from "./components/Categories/Categories";
import Arrivals from "./components/Arrivals/Arrivals";
// import CartItem from "./pages/Carts";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    // Get cart items from local storage if they exist, otherwise initialize with an empty array
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Heropage />} />
        <Route
          path="/categories"
          element={<Categories addToCart={addToCart} />}
        />
        <Route path="/arrivals" element={<Arrivals addToCart={addToCart} />} />
      </Routes>

      <Categories addToCart={addToCart} />
      <Arrivals addToCart={addToCart} />
      {/* <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div> */}
      <Footer />
    </Router>
  );
};

export default App;
