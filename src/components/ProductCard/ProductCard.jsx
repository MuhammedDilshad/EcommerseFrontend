import React from "react";
import { useNavigate } from "react-router-dom";

import "./productCard.css";

function ProductCard(props) {
  const navigate = useNavigate();
  const productId = props.value.dataId;
  console.log(productId, "productId");
  return (
    <div>
      <div className="grp">
        <img
          onClick={() => navigate(`/ProductView/${productId}`)}
          className="imgs"
          src={props.value.ImageOne}
          alt=""
        />
        <div className="TopCmp">
          <h3>{props.value.Name}</h3>
          <h4>{props.value.Price}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
