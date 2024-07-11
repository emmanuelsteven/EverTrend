// // Inside Categories.js
// import React from "react";
// import "./Categories.css";
// import Products from "./Products"; // Import your Products array

// const Categories = ({ addToCart }) => {
//   return (
//     <section className="categories">
//       {/* Your existing component code */}
//       {Products.map((product, index) => (
//         <div key={index} className="slide">
//           <div
//             className={`card ${activeIndex === index ? "slider-active" : ""}`}
//           >
//             <h4>{product.title}</h4>
//             <p>
//               <span className="current-price">{product.currentPrice}</span>
//               <span className="original-price">{product.originalPrice}</span>
//             </p>
//             <button className="buy-now" onClick={() => addToCart(product)}>
//               Buy Now
//             </button>
//             <img
//               src={product.img}
//               alt={product.title}
//               className={`category-img ${product.class}`}
//             />
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Categories;
