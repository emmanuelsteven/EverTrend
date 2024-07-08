import "./Categories.css";
import SmartwatchImage from "../../assets/imgs/Smartwatch.png";
import headphone from "../../assets/imgs/headphone.png";
import lappy from "../../assets/imgs/laptop.png";

const Categories = () => {
  return (
    <section className="categories">
          <h3>Featured Categories</h3>
      <div className="container ">
        <div className="card-holder flex ">
          <div className="flex1">
            <div className="card">
              <h4>Smart Watch wireless</h4>
              <p>
                <span className="current-price">#300,000</span>
                <span className="original-price">#500,000</span>
              </p>
              <button className="buy-now">Buy Now</button>
              <img
                src={SmartwatchImage}
                alt="smart watch"
                className="category-img"
              />
            </div>
          </div>
          <div className="flex2">
            <div className="card">
              <img src={headphone} alt="smart watch" className="category-img" />
              <h4>Gaming Headset</h4>
              <p>
                <span className="current-price">#50,000</span>
                <span className="original-price">#500,000</span>
              </p>
              <button className="buy-now">Buy Now</button>
            </div>
            <div className="card">
              <img src={lappy} alt="smart watch" className="category-img" />
              <h4>Corei7 Laptop</h4>
              <p>
                <span className="current-price">#300,000</span>
                <span className="original-price">#500,000</span>
              </p>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
