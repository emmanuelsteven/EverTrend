import "./Arrivals.css";
import { useStore } from "../../utils/storeContext";
import { useState, useEffect } from "react";

const Arrivals = () => {
  const { cartItems, addToCart } = useStore();
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9;

  const fetchProducts = (page) => {
    fetch(
      `/api/products?organization_id=e8464762ed974522901916e19534bbc4&reverse_sort=false&page=${page}&size=${itemsPerPage}&Appid=P8YBKXYR5Q3ZBBI&Apikey=e5bc75a2d1cf414c80cfb6cde20f091720240714131238325221`
    )
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.items);
        setTotalPages(Math.ceil(data.total / itemsPerPage)); // assuming `data.total` gives the total number of items
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    fetchProducts(currentPage);
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
        {projects.map((project) => (
          <div className="card1" key={project.id}>
            <img
              src={`https://api.timbu.cloud/images/${project?.photos[0]?.url}`}
              alt="product"
            />
            <div className="cardtext">
              <h5>{project.name}</h5>
              <p>{project.description}</p>
              <span>
                <h5>{`₦ ${
                  project?.current_price?.[0]?.NGN?.[0]?.toString() ?? "N/A"
                }`}</h5>
                <button onClick={() => addToCart(project)}>Add to cart</button>
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
