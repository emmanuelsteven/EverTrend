import "./Categories.css";
// import Smart3 from "../../assets/imgs/Smart3.png";
import Mainwatch from "../../assets/imgs/Smart3.png";
import headphone from "../../assets/imgs/headphone.png";
import lappy from "../../assets/imgs/Laptop1.png";

const Categories = () => {
  return (
    <section className="categories ">
      <h3>Featured Categories</h3>
      <div className="container flex">
        <div className="card">
          <h4>Smart Watch wireless</h4>
          <p>
            <span className="current-price">#300,000</span>
            <span className="original-price">#500,000</span>
          </p>
          <button className="buy-now">Buy Now</button>
          <img
            src={Mainwatch}
            alt="smart watch"
            className="category-img resize1"
          />
        </div>

        <div className="card">
          <h4>Gaming Headset</h4>
          <p>
            <span className="current-price">#50,000</span>
            <span className="original-price">#500,000</span>
          </p>
          <button className="buy-now">Buy Now</button>
          <img
            src={headphone}
            alt="smart watch"
            className="category-img resize2"
          />
        </div>

        <div className="card">
          <h4>Corei7 Laptop</h4>
          <p>
            <span className="current-price">#300,000</span>
            <span className="original-price">#500,000</span>
          </p>
          <button className="buy-now">Buy Now</button>
          <img src={lappy} alt="smart watch" className="category-img resize3" />
        </div>
      </div>
    </section>
  );
};

export default Categories;
