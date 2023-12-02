import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import getAllUser, { CreateUser } from "../redux/thunk/userThunk";

const FormikForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{ name: "", email: "", mobileNumber: "", password: "" }}
        validate={(values) => {
          const errors = {};

          // Name validation
          if (!values.name) {
            errors.name = "Required";
          }

          // Email validation
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          // Mobile number validation
          if (!values.mobileNumber) {
            errors.mobileNumber = "Required";
          } else if (!/^[0-9]{10}$/i.test(values.mobileNumber)) {
            errors.mobileNumber = "Invalid mobile number";
          }

          // Password validation
          if (!values.password) {
            errors.password = "Required";
          }

          return errors;
        }}
        onSubmit={async (values) => {
          console.log("values", values);
          await dispatch(CreateUser(values));
          // reset form
          values.name = "";
          values.email = "";
          values.mobileNumber = "";
          values.password = "";
          await dispatch(getAllUser());
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            {/* Name input */}
            <div>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Name"
                style={{
                  border:
                    touched.name && errors.name
                      ? "1px solid red"
                      : "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "8px",
                  marginBottom: "10px",
                }}
              />
              {errors.name && touched.name && (
                <div style={{ color: "red" }}>{errors.name}</div>
              )}
            </div>

            {/* Email input */}
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
                style={{
                  border:
                    touched.email && errors.email
                      ? "1px solid red"
                      : "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "8px",
                  marginBottom: "10px",
                }}
              />
              {errors.email && touched.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>

            {/* Mobile number input */}
            <div>
              <input
                type="tel"
                name="mobileNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobileNumber}
                placeholder="Mobile Number"
                style={{
                  border:
                    touched.mobileNumber && errors.mobileNumber
                      ? "1px solid red"
                      : "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "8px",
                  marginBottom: "10px",
                }}
              />
              {errors.mobileNumber && touched.mobileNumber && (
                <div style={{ color: "red" }}>{errors.mobileNumber}</div>
              )}
            </div>

            {/* Password input */}
            <div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                style={{
                  border:
                    touched.password && errors.password
                      ? "1px solid red"
                      : "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "8px",
                  marginBottom: "10px",
                }}
              />
              {errors.password && touched.password && (
                <div style={{ color: "red" }}>{errors.password}</div>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 15px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
