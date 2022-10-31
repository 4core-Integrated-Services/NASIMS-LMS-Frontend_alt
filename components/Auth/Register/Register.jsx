import React from "react";

import Link from "next/link";

import { Formik, formik, useFormik } from "formik";
import { RegisterSchema } from "../../../schemas";

function Register() {
  const onSubmit = () => {
    console.log("Submitted");
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: RegisterSchema,
      onSubmit,
    });
  console.log(errors);
  return (
    <div className="parent">
      <div className="registerpage">
        <h1 className="registerpage--heading">Create an account</h1>
        <p className="registerpage--subheading">
          {" "}
          Create an account to explore a wide range of courses.
        </p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="registerpage--input"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <small className="registerpage--small">
            {errors.email && touched ? errors.email : ""}
          </small>

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="registerpage--input"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <small className="registerpage--small">
            {errors.password && touched ? errors.password : ""}
          </small>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="registerpage--input"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <small className="registerpage--small">
            {errors.confirmPassword && touched ? errors.confirmPassword : ""}
          </small>
          <button type="submit" className="registerpage--btn">
            Sign up
          </button>
        </form>
        <br />
        <p className="registerpage--create">
          Already have an account?{" "}
          <span className="registerpage--create--span">
            <Link href="/login">
              <a className="registerpage--create--span--item">Sign in</a>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
