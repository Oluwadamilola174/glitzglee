import React from "react";
import { Link } from "react-router-dom"; // For navigation
import "./MoneyBouquetPage.css";
import bouquet1 from "../../assets/program_1.jpg";
import bouquet2 from "../../assets/program_2.jpg";
import bouquet3 from "../../assets/program_3.jpg";

const MoneyBouquetPage = () => {
  const bouquetItems = [
    { id: 1, image: bouquet1, price: "₦15,000", content: "Heart-shaped Money Bouquet" },
    { id: 2, image: bouquet2, price: "₦20,000", content: "Deluxe Money Bouquet" },
    { id: 3, image: bouquet3, price: "₦25,000", content: "Luxury Money Bouquet" },
    { id: 1, image: bouquet1, price: "₦15,000", content: "Heart-shaped Money Bouquet" },
    { id: 2, image: bouquet2, price: "₦20,000", content: "Deluxe Money Bouquet" },
    { id: 3, image: bouquet3, price: "₦25,000", content: "Luxury Money Bouquet" },
  ];

  return (
    <div className="bouquet-page">
      <h2>Money Bouquets</h2>
      <p>✨ Wrapped in premium floral design</p>
      <div className="bouquet-grid">
        {bouquetItems.map((item) => (
          <div key={item.id} className="bouquet-item">
            <img src={item.image} alt={item.content} />
            <h3>{item.content}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
            <button>Buy Now</button>
          </div>
        ))}
      </div>

      <Link to="/" className="back-to-home">Go Back to Home</Link>
    </div>
  );
};

export default MoneyBouquetPage;
