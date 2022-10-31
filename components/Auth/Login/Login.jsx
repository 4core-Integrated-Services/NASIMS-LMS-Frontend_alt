import React from "react";
import Link from "next/link";
import { Formik, formik, useFormik } from "formik";
import { LoginSchema } from "../../../schemas";

function Login() {
  const onSubmit = () => {
    console.log("Submitted");
  };
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: LoginSchema,
      onSubmit,
    });

  return (
    <div className="parent">
      <div className="loginpage">
        <h1 className="loginpage--heading">Welcome back</h1>
        <p className="loginpage--subheading">
          {" "}
          Log in to continue using Nasims Lms
        </p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="loginpage--input"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <small className="loginpage--small">
            {errors.email && touched ? errors.email : ""}
          </small>

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="loginpage--input"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <small className="loginpage--small">
            {errors.password && touched ? errors.password : ""}
          </small>
          <button type="submit" className="loginpage--btn">
            Login
          </button>
        </form>
        <p className="loginpage--forgot">
          Or
          <span className="loginpage--forgot--span">
            <Link href="/forgot-password">
              <a className="loginpage--forgot--span--item"> Forgot password</a>
            </Link>
          </span>
        </p>
        <br />
        <p className="loginpage--create">
          {" Don't have an account?"}
          <span className="loginpage--create--span">
            <Link href="/register">
              <a className="loginpage--create--span--item">Sign up</a>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
