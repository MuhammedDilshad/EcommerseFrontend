import React from "react";
import "./IconCard.css";

function IconCard(props) {
  console.log(props.value.iconOne);
  return (
    <div>
      <div className="IconCard">
        <img src={props.value.iconOne} alt="" />
        <div>{props.value.Name}</div>
      </div>

      <p>{props.value.content}</p>
    </div>
  );
}

export default IconCard;
