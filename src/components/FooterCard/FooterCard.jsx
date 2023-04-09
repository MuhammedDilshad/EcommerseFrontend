import React from "react";
import "./FooterCard.css";

const FooterCard = (props) => {
  let info = props.value.data;
  return (
    <div className="">
      <strong>{props.value.header}</strong>
      <div>
        {info.map((value) => (
          <p>{value}</p>
        ))}
      </div>
    </div>
  );
};

export default FooterCard;
