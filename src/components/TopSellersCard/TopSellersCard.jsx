import React from "react";
import "./TopSellersCard.css";

function TopSellersCard(props) {
  return (
    <div>
      <div className="grp">
        <img className="imgs" src={props.value.ImageOne} alt="" />
        <div className="TopCmp">
          <h3>{props.value.Name}</h3>
          <h4>{props.value.Price}</h4>
        </div>
      </div>
    </div>
  );
}

export default TopSellersCard;
