import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Appointment = () => {
  // start code for a error page
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);
  // end code for a error page
  
  const [getservices, setservices] = useState();
  const [getbeautician, setbeautician] = useState();

  const services = (e) => {
    setservices(e.target.value);
  };
  const beautician = (e) => {
    setbeautician(e.target.value);
  };

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
      <Navbar />
      {isOnline ? (
        <div>
          {/* Page Header Start */}
          <div className="page-header aimage">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Appointment</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header End */}
          {/* Appointment Start */}
          <div className="container-fluid appointment py-10 d-flex">
            <div className="container py-5">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                  <div className="appointment-form p-5">
                    <h1 className="display-4 mb-4 text-white">
                      Book Appointment
                    </h1>

                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        services: "",
                        beautician: "",
                        date: "",
                        desc: "",
                      }}
                      onSubmit={async (values,{resetForm}) => {
                        values.services = getservices;
                        values.beautician = getbeautician;
                        console.log(values);
                        axios
                          .post(
                            "https://backend-rust-eta.vercel.app/appoinment/create",
                            values
                          )
                          .then((res) => {
                            console.log(res);
                            notify(res.data.status);
                            resetForm()
                          })
                          .catch((error) => {
                            console.log(error);
                            notify("Something went wrong!", "error");
                          });
                      }}
                    >
                      <Form>
                        <div className="row gy-3 gx-4">
                          <div className="col-lg-6 appointment-input">
                            <Field
                              type="text"
                              name="name"
                              id="name"
                              className="form-control py-3 border-white text-black democlass1"
                              style={{ backgroundColor: "#ddb9c8" }}
                              placeholder="First Name"
                            />
                          </div>
                          <div className="col-lg-6">
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              className="form-control py-3 border-white text-black democlass1"
                              style={{ backgroundColor: "#ddb9c8" }}
                              placeholder="Email"
                            />
                          </div>

                          <div className="col-lg-6">
                            <select
                              name="services"
                              id="services"
                              className="form-select py-3 border-white democlass1"
                              style={{ backgroundColor: "#ddb9c8" }}
                              aria-label="Default select example"
                              onChange={services}
                            >
                              <option selected="">Select Service</option>
                              <option value="Hair">Hair</option>
                              <option value="Nail Art">Nail Art</option>
                              <option value="MakeUp">MakeUp</option>
                              <option value="Skin Care">Skin Care</option>
                              <option value="Massage">Massage</option>
                              <option value="Mahendi">Mahendi</option>
                            </select>
                          </div>

                          <div className="col-lg-6">
                            <select
                              name="beautician"
                              id="beautician"
                              className="form-select py-3 border-white democlass1"
                              style={{ backgroundColor: "#ddb9c8" }}
                              aria-label="Default select example"
                              onChange={beautician}
                            >
                              <option selected="">Select Beautation</option>
                              <option value="Ami">Ami</option>
                              <option value="Jay">Jay</option>
                              <option value="Nirali">Nirali</option>
                              <option value="Jenish">Jenish</option>
                              <option value="Rusvita">Rusvita</option>
                              <option value="Raj">Raj</option>
                              <option value="Shruti">Shruti</option>
                              <option value="Gaytri">Gaytri</option>
                              <option value="Nirva">Nirva</option>
                            </select>
                          </div>

                          <div className="col-lg-12">
                            <Field
                              name="date"
                              id="date"
                              type="datetime-local"
                              className="form-control py-3 border-white democlass1"
                              style={{ backgroundColor: "#ddb9c8" }}
                            />
                          </div>
                          <div className="col-lg-12">
                            <Field
                              as="textarea"
                              className="form-control border-white  text-black democlass1"
                              style={{ backgroundColor: "#ddb9c8" }}
                              name="desc"
                              id="desc"
                              cols={30}
                              rows={5}
                              placeholder="Write Comments"
                              defaultValue={""}
                            />
                          </div>
                          <div className="col-lg-12">
                            <button
                              className="btn w-100 py-3 px-5 app-btn"
                              style={{ backgroundColor: "#ddb9c8" }}
                              type="submit"
                            >
                              SUBMIT NOW
                            </button>
                          </div>
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="appointment-time p-2">
                    <div className="d-flex justify-content-between fs-5 text-black">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7431317577625!2d72.87271257503765!3d21.242032180461198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f49d536eadf%3A0x612978efa6ab659f!2sSudama%20chowk%2C%20Mota%20Varachha%2C%20Surat%2C%20Gujarat%20394101!5e0!3m2!1sen!2sin!4v1707053306528!5m2!1sen!2sin"
                        width={540}
                        height={613}
                        style={{ border: 0, borderRadius: 10 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Appointment End */}
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
      ) : (
        <NetworkErrorcompo />
      )}
      <Footer />
    </div>
  );
};