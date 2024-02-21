import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tenary = () => {
  const URL = "http://localhost:8000/login";
  const navigate = useNavigate();
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(URL, values)
        .then((response) => {
          if (response.status === 200 && response.data.token) {
            console.log(response);
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
          } else if (response.status === 404) {
            console.error("Invalid email and password");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });

  return (
    <div>
      <h2>Login</h2>

      <form className="form" onSubmit={loginFormik.handleSubmit}>
        <div className="flex-column">
          <label>Email </label>
        </div>
        <div className="inputForm">
          <svg
            height="20"
            viewBox="0 0 32 32"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            ...
          </svg>
          <input
            name="email"
            onChange={loginFormik.handleChange}
            value={loginFormik.values.email}
            type="email"
            className="input"
            placeholder="Enter your Email"
          />
        </div>

        <div className="flex-column">
          <label>Password </label>
        </div>
        <div className="inputForm">
          <svg
            height="20"
            viewBox="-64 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            ...
          </svg>
          <input
            type="password"
            onChange={loginFormik.handleChange}
            value={loginFormik.values.password}
            name="password"
            className="input"
            placeholder="Enter your Password"
          />
          <svg
            viewBox="0 0 576 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            ...
          </svg>
        </div>

        <div className="flex-row">
          <div>
            <input type="checkbox" />
            <label>Remember me </label>
          </div>
          <span className="span">Forgot password?</span>
        </div>
        <button type="submit" className="button-submit">
          Sign In
        </button>
        <p className="p">
          Don't have an account? <span className="span">Sign Up</span>
        </p>
        <p className="p line">Or With</p>

        <div className="flex-row">
          <button className="btn google">...</button>
          <button className="btn apple">...</button>
        </div>
      </form>
    </div>
  );
};

export default Tenary;
