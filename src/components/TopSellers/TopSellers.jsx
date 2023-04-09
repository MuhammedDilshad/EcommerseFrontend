import React from "react";
import TopSellersCard from "../TopSellersCard/TopSellersCard";
import "./TopSellers.css";
import { TopSellersData } from "../../Assist/Assist";
// import { useNavigate } from "react-router-dom";

function TopSellers() {
  // const navigate = useNavigate();
  const handleClick = () => {
    const productElement = document.getElementById("product");
    productElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="Top">
      <h1>Top Sellers</h1>
      <p>Browse our top-selling products</p>
      <div className="TopSellers">
        {TopSellersData.map((value) => (
          <TopSellersCard value={value} />
        ))}
      </div>
      <button onClick={handleClick} className="shopnowbt">
        SHOP NOW
      </button>
    </div>
  );
}

export default TopSellers;
