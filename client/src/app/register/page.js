"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../../styles/register.css";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  password2: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const register = () => {
  const router = useRouter();
  const handleRegister = async (values) => {
    try {
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (res.status == 200) router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="authForm">
      <Image src="/logs.png" width={100} height={85} alt="Logo" />

      <h1>Signup</h1>

      <Formik
        initialValues={{
          fullName: "",

          email: "",
          password: "",
          password2: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleRegister(values);
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="formField">
            <Field name="fullName" placeholder="fullname" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="email" type="email" placeholder="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" type="password" placeholder="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <Field
              name="password2"
              type="password"
              placeholder="re-type password"
            />
            {errors.password2 && touched.password2 ? (
              <div>{errors.password2}</div>
            ) : null}
            <br />
            Already have an account? <Link href="/login">Signin</Link>
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default register;
