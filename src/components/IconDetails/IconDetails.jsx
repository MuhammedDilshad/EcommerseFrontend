import React from "react";
import IconCard from "../IconCard/IconCard";
import { iconDetails } from "../../Assist/Assist";
import "./IconDetails.css";

function IconDetails() {
  return (
    <div className="IconDetails">
      {iconDetails.map((value) => (
        <IconCard value={value} />
      ))}
    </div>
  );
}

export default IconDetails;
