import React from "react";
import AdvCard from "../AdvCard/AdvCard";
import { ByNow } from "../../Assist/Assist";
import "./Advertmnt.css";

function Advertmnt() {
  return (
    <div className="Advertmnt">
      {ByNow.map((value) => (
        <AdvCard value={value} />
      ))}
    </div>
  );
}

export default Advertmnt;
