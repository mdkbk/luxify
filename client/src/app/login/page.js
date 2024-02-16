"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Image from "next/image";
import "../../styles/register.css";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const login = () => {
  const handleLogin = async (values) => {
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    dispatch(userLogin(data));
  };
  return (
    <div className="authForm">
      <Image src="/logs.png" width={90} height={90} alt="Logo" />
      <h1>Signin</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          handleLogin(values);
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off" className="formField">
            <Field name="email" type="email" placeholder="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" type="password" placeholder="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <br />
            Don't have an account? <Link href="/register">Signup</Link>
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default login;
