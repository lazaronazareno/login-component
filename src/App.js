import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const initialValues = {
  email: "",
  password: ""
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(5, "Must have at least 6 characters")
    .max(12, "Must be less than 12 characters")
    .required("Required")
});

function Login() {
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="container d-flex flex-column text-dark roseIntense border border-dark mt-2 p-5">
        <h1>Login</h1>
        <div className="form-floating m-3">
          <Field
            type="text"
            className="form-control"
            id="floatingEmail"
            name="email"
            placeholder="Email"
          />
          <label htmlFor="floatingEmail">Email</label>
          <span className="text-danger d-flex fs-4">
            <ErrorMessage name="email" />
          </span>
        </div>
        <div className="form-floating m-3">
          <Field
            type="password"
            className="form-control"
            id="floatingPassword"
            name="password"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
          <span className="text-danger d-flex fs-4">
            <ErrorMessage name="password" />
          </span>
        </div>
        <button className="btn btn-dark btn-lg" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default Login;
