import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../actions/AuthActions.js";
import Logos from "../../img/login-illustrator.png";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiSmartphone } from "react-icons/fi";
import { BiCurrentLocation } from "react-icons/bi";
import * as Yup from "yup";

import "./Signup.css";

function Signup() {
  const [error, setErr] = useState("");
  const [initialValues, setInitValue] = useState({
    email: "",
    password: "",
    mobile: "",
    address: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(5).required(),
    mobile: Yup.string().min(10).required(),
    address: Yup.string().min(4).required(),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(initialValues, { abortEarly: false });
      dispatch(signUp(initialValues));
    } catch (error) {
      setErr(error.errors);
      console.log("Validation error:", error.errors);
    }
  };
  const handleChange = (e) => {
    setInitValue({ ...initialValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="main">
      <div>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div>
            <h4>Create your new account</h4>
            <label htmlFor="">Email Address</label>
            <div className="pswd">
              <input
                type="email"
                placeholder="Enter Email Address"
                name="email"
                onChange={handleChange}
                value={initialValues.email}
              />
              <HiOutlineMail className="icon" />
            </div>
            <label htmlFor="">Password</label>
            <div className="pswd">
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={handleChange}
                value={initialValues.password}
              />
              <RiLockPasswordLine className="icon" />
            </div>

            <label htmlFor="">Mobile Number</label>
            <div className="pswd">
              <input
                type="text"
                name="mobile"
                placeholder="Enter Number"
                onChange={handleChange}
                value={initialValues.mobile}
              />
              <FiSmartphone className="icon" />
            </div>
            <label htmlFor="">Shipping Address</label>
            <div className="pswd">
              <input
                type="text"
                placeholder="Enter your Address"
                name="address"
                onChange={handleChange}
                value={initialValues.address}
              />
              <BiCurrentLocation className="icon" />
            </div>

            <button className="sinupNow">Signup Now</button>
            {error ? <small style={{ color: "red" }}>{error[0]}</small> : null}
            <div class="hror">
              <hr />
              <span>or</span>
              <hr />
            </div>
            <button className="loginButton" onClick={() => navigate("/")}>
              Login Now
            </button>
          </div>
        </form>
      </div>
      <div className="signuplogo">
        <img src={Logos} alt="" />
      </div>
    </div>
  );
}

export default Signup;
