import React from "react";
import FooterCard from "../FooterCard/FooterCard";
import "./Footer.css";
import { BottomData } from "../../Assist/Assist";
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import { RiVisaFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="mFoot">
      <div className="Footer">
        {BottomData.map((value) => (
          <FooterCard value={value} />
        ))}
      </div>
      <hr className="hr" />
      <div className="footrft">
        <div className="ft">
          <div>
            <strong>2022 Explore Clothing</strong>
          </div>
          <div style={{ marginTop: "5px" }}>
            <strong>Privacy Policy Terms & Condition</strong>
          </div>
        </div>
        <div className="icic">
          <div>
            <RiVisaLine />
          </div>
          <div>
            <FaCcPaypal />
          </div>
          <div>
            <RiMastercardFill />
          </div>
          <div>
            <RiVisaFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
