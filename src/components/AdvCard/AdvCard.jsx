import React from "react";
import "./AdvCard.css";

function AdvCard(props) {
  const handleClick = () => {
    const productElement = document.getElementById("product");
    productElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="AdvCard">
      <h1>{props.value.Name}</h1>
      <p>{props.value.content}</p>
      <button onClick={handleClick} className="AdBt">
        {props.value.buttonName}
      </button>
    </div>
  );
}

export default AdvCard;
