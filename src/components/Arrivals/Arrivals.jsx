import "./Arrivals.css";
import { useStore } from "../../utils/storeContext";
import { useState, useEffect } from "react";

const Arrivals = () => {
  const {
    cartItems,
    addToCart,
    products,
    fetchProducts,
    totalPages,
    // setTotalPages,
  } = useStore();

  const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 9;

  useEffect(() => {
    fetchProducts(currentPage);
    // setTotalPages(Math.ceil(data.total / itemsPerPage));
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="arrivals">
      <div className="arrival-title">
        <h2>New arrivals</h2>
        <p>Currently in store with no shipment fee attached</p>
      </div>
      <div className="products container">
        {products.map((product) => (
          <div className="card1" key={product.id}>
            <img
              src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
              alt="product"
            />
            <div className="cardtext">
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <span>
                <h5>{`₦ ${
                  product?.current_price?.[0]?.NGN?.[0]?.toString() ?? "N/A"
                }`}</h5>
                <button onClick={() => addToCart(product)}>Add to cart</button>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => handlePageChange(number + 1)}
            className={currentPage === number + 1 ? "active" : ""}
          >
            {number + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
    </section>
  );
};

export default Arrivals;
