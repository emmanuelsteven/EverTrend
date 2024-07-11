import React from "react";
import "./Arrivals.css";

import micImage from "../../assets/imgs/microphone.jpg";
import earpodImage from "../../assets/imgs/earpod2.png";
import smartwatchImage from "../../assets/imgs/smart2.png";
import laptopImage from "../../assets/imgs/laptop2.jpg";
import smartwatch2Image from "../../assets/imgs/smart1.png";
import smartwatch3Image from "../../assets/imgs/Smart3.png";

const Arrivals = ({ addToCart }) => {
  const projects = [
    {
      id: 1,
      image: micImage,
      title: "Microphone",
      description: "Noise cancellation & bass",
      price: "₦ 15,000",
    },
    {
      id: 2,
      image: earpodImage,
      title: "EarPod",
      description: "Noise cancellation & thick bass",
      price: "₦ 20,000",
    },
    {
      id: 3,
      image: smartwatchImage,
      title: "Smartwatch",
      description: "iPhone black smart",
      price: "₦ 200,000",
    },
    {
      id: 4,
      image: laptopImage,
      title: "Laptop",
      description: "Corei7 15GB RAM",
      price: "₦ 250,000",
    },
    {
      id: 5,
      image: smartwatch2Image,
      title: "Smart watch",
      description: "iPhone two sim card watch",
      price: "₦ 100,000",
    },
    {
      id: 6,
      image: smartwatch3Image,
      title: "Smart watch",
      description: "iPhone two sim card watch",
      price: "₦ 100,000",
    },
  ];

  return (
    <section className="arrivals">
      <div className="arrival-title">
        <h2>New arrivals</h2>
        <p>Currently in store with no shipment fee attached</p>
      </div>
      <div className="products container">
        {projects.map((project) => (
          <div className="card1" key={project.id}>
            <div className="cardimage">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="cardtext">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              <span>
                <h5>{project.price}</h5>
                <button onClick={() => addToCart(project)}>Add to cart</button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Arrivals;
