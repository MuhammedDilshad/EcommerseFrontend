import React from "react";

import { logout } from "../../actions/AuthActions";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

import "./Header.css";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const navigate = useNavigate();
  return (
    <div className="mainheader">
      <div>
        <h1>ECloths</h1>
      </div>
      <div className="mainContent">
        <strong
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => navigate("/home")}
        >
          HOME
        </strong>
        <strong>ABOUT</strong>
        <strong>CONTACT US</strong>
      </div>
      <div className="mainContent">
        <button className="hbtnOne">ORDER HISTORY</button>
        <FiUser className="iconss" />
        <FiShoppingBag className="iconss" />
        <GiHamburgerMenu className="iconss" />
        <button onClick={handleLogout} className="hbtnTwo">
          SIGN OUT
        </button>
      </div>
    </div>
  );
}
