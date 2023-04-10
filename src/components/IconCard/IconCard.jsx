import React from "react";
import "./IconCard.css";

function IconCard(props) {
  return (
    <div>
      <div className="IconCard">
        <img src={props.value.iconOne} alt="" />
        <div>{props.value.Name}</div>
      </div>

      <small className="iconContent">{props.value.content}</small>
    </div>
  );
}

export default IconCard;
