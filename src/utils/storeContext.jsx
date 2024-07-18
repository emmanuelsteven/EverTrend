import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setTotalCartItems(cartItems.reduce((acc, item) => acc + item.quantity, 0));
    calculateTotalPrice();
  }, [cartItems]);

  const fetchProducts = (page) => {
    fetch(
      `/api/products?organization_id=e8464762ed974522901916e19534bbc4&reverse_sort=false&page=${page}&size=${9}&Appid=P8YBKXYR5Q3ZBBI&Apikey=e5bc75a2d1cf414c80cfb6cde20f091720240714131238325221`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.items);
        console.log(data);
        setTotalPages(Math.ceil(data.total / 9));
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  const addToCart = (product) => {
    console.log("adding to cart", product);
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.current_price?.[0]?.NGN?.[0] * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
  };

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        totalCartItems,
        fetchProducts,
        products,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
        calculateTotalPrice,
        totalPages,
        setTotalPages,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
