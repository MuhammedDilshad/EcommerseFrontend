import React, { useState } from "react";
import Logo from "../../img/Frame.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../actions/AuthActions";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import * as Yup from "yup";

import "./Login.css";

function Login() {
  const [error, setErr] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(5).required(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(values, { abortEarly: false });
      dispatch(logIn(values));
    } catch (error) {
      setErr(error.errors);
      console.log("Validation error:", error.errors);
    }

    // dispatch(logIn(values));
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="main">
      <div>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <h4>Login into your account</h4>
            <label htmlFor="">Email Address</label>
            <div className="pswd">
              <input
                onChange={handleChange}
                placeholder="email"
                required="true"
                name="email"
                type="email"
              />
              <HiOutlineMail className="icon" />
            </div>
            <label htmlFor="">Password</label>
            <div className="pswd">
              <input
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="password"
                required="true"
              />
              <RiLockPasswordLine className="icon" />
            </div>
            <p className="forgot-password">Forgot Password?</p>

            <button className="loginButton">Login Now</button>
            {error ? <small style={{ color: "red" }}>{error[0]}</small> : null}
            <div class="hror">
              <hr />
              <span>or</span>
              <hr />
            </div>
            <button
              className="SignupButton"
              onClick={() => navigate("/signup")}
            >
              Signup Now
            </button>
          </div>
        </form>
      </div>
      <div className="loginlogo">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Login;
