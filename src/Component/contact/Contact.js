import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
// import React, { useState, useRef, useEffect } from "react";

export const Contact = () => {

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

  return (
    <div>
      <Navbar/>

      {/* Page Header Start */}
      <div className="page-header Aimage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Contact</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      <div className="section-header text-center" style={{ marginTop: 90 }}>
        {/* <p>Get In Touch</p> */}
        <h2>If You Have Any Query, Please Contact Us</h2>
      </div>
      <div className="contact" style={{ marginBottom: 90 }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4" />
              <div className="col-md-8">
                <div className="contact-form">
                  <div id="success" />

                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    }}
                    onSubmit={async (values , {resetForm}) => {
            
                      // values.services = getservices;
                      // values.beautician = getbeautician;
                      // console.log(values);
                      axios
                        .post("https://backend-rust-eta.vercel.app/contact/create", values)
                        .then((res) => {
                          console.log(res);
                          resetForm()
                          notify(res.data.status);
                        })
                        .catch((error) => {
                          console.log(error);
                          notify("Something went wrong!", "error");
                        });
                    }}
                  >
                    <Form
                      name="sentMessage"
                      id="contactForm"
                      noValidate="novalidate"
                    >
                      <div className="control-group">
                        <Field
                          type="text"
                          className="form-control democlass3"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required="required"
                          data-validation-required-message="Please enter your name"
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="control-group">
                        <Field
                          type="email"
                          name="email"
                          className="form-control democlass3"
                          id="email"
                          placeholder="Your Email"
                          required="required"
                          data-validation-required-message="Please enter your email"
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="control-group">
                        <Field
                          type="text"
                          name="subject"
                          className="form-control democlass3"
                          id="subject"
                          placeholder="Subject"
                          required="required"
                          data-validation-required-message="Please enter a subject"
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="control-group">
                        <Field
                          as="textarea"
                          className="form-control democlass3"
                          id="message"
                          name="message"
                          placeholder="Message"
                          required="required"
                          data-validation-required-message="Please enter your message"
                          defaultValue={""}
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div>
                        <button
                          className="btn"
                          type="submit"
                          id="sendMessageButton"
                        >
                          Send Message
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
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
      <Footer/>
    </div>
  );
};