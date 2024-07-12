import "./Heropage.css";

const Heropage = () => {
  return (
    <section className="hero">
      <div className="container flex">
        <div className="content">
          <p className="spaced-words">
            <span className="spaced-letters">EXPLORE</span>
            <span className="word-gap"></span>
            <span className="spaced-letters">OUR</span>
          </p>
          <p>DIVERSE COLLECTION</p>
          <div className="buttons">
            <button className="btn">Shop Now</button>
            <button className="btn2">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heropage;
