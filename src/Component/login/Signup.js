import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { Formik, Field, Form } from "formik";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Signup = () => {
  const [signIn, toggle] = useState(true);
  const history = useHistory()

  const notify = (message, type = "success") => {
    toast[type](message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  const demo = process.env.REACT_APP_DEMO

  return (
    <div
      className="body1"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <div className="main1">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup1">
          <Formik
            initialValues={{
              username: "",
              email: "",
              mno:"",
              password: "",
            }}
            onSubmit={async (values ,{resetForm}) => {
              axios
                .post(`${demo}signup/signup`, values)
                .then((res) => {
                  console.log(res);
                  resetForm()
                  notify(res.data.status);
                })
                .catch((error) => {
                  console.log(error);
                  notify("Something went wrong!", "error");
                });
              // setSubmitting(false);
            }}
          >
            <Form>
              <label htmlFor="chk" aria-hidden="true" className="signup-label">
                Sign up
              </label>
              <Field
                className="signup-input democlass"
                type="text"
                name="username"
                placeholder="User name"
                required
              />
              <Field
                className="signup-input democlass "
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <Field
                className="signup-input democlass"
                type="tel"
                name="mno"
                placeholder="contact"
                required
              />
              <Field
                className="signup-input democlass"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button className="login-button" type="submit">Sign up</button>
            </Form>
          </Formik>
        </div>

        <div className="login1">
          {/* <h1>hello</h1> */}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              axios
              
                .post(`${demo}signup/login`, values)
                .then((res) => {
                  // console.log();
                  sessionStorage.setItem("emptoken" , res.data.token )
                  sessionStorage.setItem("empid" , res.data.data._id )
                  notify(res.data.status);
                  // history.push("/index")
                  window.location.href = "https://admin-ebon-nine.vercel.app/";
                  

                })
                .catch((error) => {
                  console.log(error);
                  notify("Something went wrong!", "error");
                });
              // setSubmitting(false);
            }}
          >
            <Form>
              <label htmlFor="chk" aria-hidden="true" className="login-label">
                Login
              </label>
              <Field
                className="login-input democlass1"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <Field
                className="login-input democlass1"
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <p onClick={ () => {history.push("/forget")} }  style={{color:"#e5c0c8", paddingLeft:"100px"}}>Forgot Password ?</p>
              <button className="login-button" type="submit">Login</button>
            </Form>
          </Formik>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};