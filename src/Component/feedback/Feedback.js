import React, { useEffect, useState } from "react";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
import { Carousel } from "antd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import axios, { Axios } from "axios";

const clintcontentStyle = {
  height: "200px",
  color: "#673046bb",
  // background: "#c0869d",
  padding: "14px",
};

export const Feedback = () => {
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

  const history = useHistory();
  const [dotPosition, setDotPosition] = useState("right");
  const[image,setImage]=useState([null])

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
      {isOnline ? (
        <div>
          {/* Page Header Start */}
          <div className="page-header Cimage">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Feedback</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header End */}
          {/* feedback Start */}
          {/* FeedBack Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              {/* <h6 className="section-title text-center text-color text-uppercase">
                Feedback
              </h6> */}
              <h3 className="mb-5">
                Give  Your{" "}
                <span className="text-color">Feedback...</span>
              </h3>
            </div>
            <Formik
              initialValues={{
                name: "",
                image: "",
                desc: "",
                profession: "",
              }}
              
              onSubmit={async (values,{resetForm}) => {
                const formdata = new FormData();
                formdata.append("name", values.name);
                formdata.append("image", image);
                formdata.append("desc", values.desc);
                formdata.append("profession", values.profession);
                console.log(values);
                axios
                  .post("https://backend-rust-eta.vercel.app/feedback/create", formdata)
                  .then((res) => {
                    console.log(res);
                    notify(res.data.status);
                    resetForm()
                  })
                  .catch((error) => {
                    console.log(error);
                    notify("Error occurred", "error");
                  });
              }}
            >
              <center>
                <Form style={{border:"1px solid #673046bb", backgroundColor:"#673046bb" , width:"60%"}} className="p-5"> 
                  <div className="row gy-3 gx-4 form-contact">
                    <div className="col-lg-6">
                      <Field
                        type="text"
                        style={{backgroundColor:"#c0869d"}}
                        name="name"
                        id="name"
                        className="form-control text"
                        placeholder="First Name"
                      />
                      
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="file"
                        name="image"
                        style={{backgroundColor:"#c0869d"}}
                        id="formFile"
                        className="form-control text"
                        placeholder="Image"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                    <div className="col-lg-12">
                      <Field
                        as="textarea"
                        className="form-control  text"
                        name="desc"
                        id="desc"
                        style={{backgroundColor:"#c0869d"}}
                        cols={30}
                        rows={5}
                        placeholder="Message"
                        defaultValue={""}
                      />
                      <ErrorMessage name="message" />
                      
                    </div>
                    <div className="col-lg-12">
                      <Field
                        name="profession"
                        id="profession"
                        type="text"
                        style={{backgroundColor:"#c0869d", padding:"7px"}}
                        className="form-control text"
                        placeholder="Profession"
                      />
                      <ErrorMessage name="profession" />
                    </div>
                    <div className="col-lg-12">
                      <button className="btn-color btn btn-primary" type="submit" style={{backgroundColor:"#673046bb",color:"white",border:"none",width:"199px"}}>
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              </center>
            </Formik>
          </div>
        </div>
        {/* FeedBack End */}
          {/* feedback End */}
          {/* client-review Start */}
          <div className="container-fluid bg-primary p-5 bgimage">
            <div className="container">
              <Carousel autoplay dotPosition={dotPosition}>
                <div>
                  <div>
                    <div>
                      <div
                        className="testimonial-item"
                        style={clintcontentStyle}
                      >
                        <img
                          src="image/ClintReview/Gopi.jpg"
                          alt="Image"
                          style={{ height: "50px", borderRadius: "100%" }}
                        />
                        <span>
                          <h2 className="d-flex ">Gopi Borad</h2>
                        </span>
                        <p
                          className="d-flex text-light"
                          style={{ fontSize: "20px" }}
                        >
                          Co-operative staff.. .. You dont have to wait for
                          long... They do it <br />
                          Quickly ..., value for money... I like their hair
                          cutting... I have been there only for that.. Have not
                          tried anything else yet... Bt surely will...
                          Recommended....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="testimonial-item" style={clintcontentStyle}>
                      <img
                        src="image/ClintReview/Hensi.jpg"
                        alt="Image"
                        style={{ height: "50px", borderRadius: "100%" }}
                      />
                      <span>
                        <h2 className="d-flex">Hensi Satasiya</h2>
                      </span>
                      <p
                        className="d-flex text-light"
                        style={{ fontSize: "20px" }}
                      >
                        Great place for all your spa needed . I had hair
                        treatment done . It was very nice relaxing . I will be
                        back soon . I do highly recommend this place .
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="testimonial-item" style={clintcontentStyle}>
                      <img
                        src="image/ClintReview/Jensi.jpg"
                        alt="Image"
                        style={{ height: "50px", borderRadius: "100%" }}
                      />
                      <span>
                        <h2 className="d-flex">Jensi Vaghasiya</h2>
                      </span>
                      <p
                        className="d-flex text-light"
                        style={{ fontSize: "20px" }}
                      >
                        A very good VENUS salon providing excellent services,
                        good ambience &amp; maintaining good hygiene. They
                        provide great hair spas in a very relaxing environment.
                        The owner &amp; main stylist Avanee, is quite attentive
                        &amp; delivers excellent results. Must experience the
                        wellness!
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          {/* client-review  End */}
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
      <Footer/>
    </div>
  );
};
