import "./Arrivals.css";

const Arrivals = () => {
  const projects = [
    {
      id: 1,
      image: "mic",
      title: "Microphone",
      description: "Noise cancellation & bass",
      price: "₦ 15,000",
    },
    {
      id: 2,
      image: "earpod",
      title: "EarPod",
      description: "Noise cancellation & thick bass",
      price: "₦ 20,000",
    },
    {
      id: 3,
      image: "smart2",
      title: "Smartwatch",
      description: "iPhone black smart",
      price: "₦ 200,000",
    },
    {
      id: 4,
      image: "laptop",
      title: "Laptop",
      description: "Corei7 15GB RAM",
      price: "₦ 250,000",
    },
    {
      id: 5,
      image: "watch",
      title: "Smart watch",
      description: "iPhone two sim card watch",
      price: "₦ 100,000",
    },

    {
      id: 6,
      image: "watch2",
      title: "Smart watch",
      description: "iPhone two sim card watch",
      price: "₦ 100,000",
    },
  ];

  return (
    <section className="arrivals ">
      <div className="arrival-title">
        <h2>New arrivals</h2>
        <p>Currently in store with no shipment fee attached</p>
      </div>
      <div className="products container ">
        {projects.map((project) => (
          <div className="card1" key={project.id}>
            <div className={`cardimage ${project.image}`}>
              {/* <img src={project.image} alt={project.title} /> */}
            </div>
            <div className="cardtext">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              <span>
                <h5>{project.price}</h5>
                <button>Add to cart</button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Arrivals;
