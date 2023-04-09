import React from "react";
// import banner from "../../img/Hero.png";
import banner from "../../img/Bannerj.png";
import bannerq from "../../img/BannerjD.png";
import "./Banner.css";

function Banner() {
  const handleClick = () => {
    const productElement = document.getElementById("product");
    productElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="Bnr">
      <img src={banner} alt="" />
      <img className="quate" src={bannerq} alt="" />
      <button onClick={handleClick} className="bannerBnt">
        SHOP NOW
      </button>
    </div>
  );
}

export default Banner;
