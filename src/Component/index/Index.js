import React, { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "antd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
import axios from "axios";
import { Teamcardprops } from "../team/Teamcardprops";
import { Navbar } from "../navbar/Navbar";
// import { Footer } from "antd/es/layout/layout";
import { Footer } from "../footer/Footer";
import moment from "moment";

const contentStyle = {
  height: "160px",
  width: "1500px",
  height: "530px",
};

const clintcontentStyle = {
  height: "200px",
  color: "#673046bb",
  // background: "#c0869d",
  padding: "14px",
};

export const Index = () => {
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
  // service
  const [getdata, setdata] = useState([{ image: "" }]);
  // console.log(getdata);

  useEffect(() => {
    axios
      .get("https://backend-rust-eta.vercel.app/services/view")
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getdata]);

  const datalength = getdata.length;
  // console.log(datalength);
  // console.log();

  // team

  const [getdatateam, setdatateam] = useState([{ image: "" }]);
  // console.log(getdatateam);

  useEffect(() => {
    axios
      .get("https://backend-rust-eta.vercel.app/beautician/view")
      .then((res) => {
        // console.log(res);
        setdatateam(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getdatateam]);

  const datalengthteam = getdatateam.length;
  // console.log(datalengthteam);
  // console.log();

  //blog

  const [getdatablog, setdatablog] = useState([{ image: "" }]);
  // console.log(getdatablog);

  useEffect(() => {
    axios
      .get("https://backend-rust-eta.vercel.app/blog/view")
      .then((res) => {
        // console.log(res);
        setdatablog(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getdatablog]);

  return (
    <div>
      <Navbar />
      {isOnline ? (
        <div>
          {/* Slider Start  */}
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <video muted loop autoPlay>
                  <source src="video/Video-1.mp4" type="video/mp4" />
                </video>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <video muted loop autoPlay>
                  <source src="video/Video-2.mp4" type="video/mp4" />
                </video>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <video muted loop autoPlay>
                  <source src="video/Video-3.mp4" type="video/mp4" />
                </video>
              </h3>
            </div>
            {/* <div>
                <h3 style={contentStyle}>
                  <video muted loop autoPlay>
                    <source src="video/Video-3.mp4" type="video/mp4" />
                  </video>
                </h3>
              </div> */}
          </Carousel>
          {/* Slider End  */}

          {/* About Start */}
          <div className="about">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                  <div className="about-img">
                    <img src="image/header-bg-img/experiance.jpg" alt="Image" />
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="section-header text-left">
                    <p>About Us</p>
                    <h2>25 Years Experience</h2>
                  </div>
                  <div className="about-text">
                    <p>
                      <strong>Experienced Staff</strong>: A salon with a long
                      history would likely have a team of skilled and
                      experienced professionals, including hairstylists,
                      colorists, estheticians, and other beauty specialists.
                    </p>
                    <p>
                      <strong> Wide Range of Services </strong>: Over the years,
                      the salon may have expanded its services to offer a
                      comprehensive range of beauty treatments. This could
                      include haircuts, styling, coloring, facials, manicures,
                      pedicures, waxing, and more.
                    </p>
                    <p>
                      <strong>Clientele and Reputation</strong>: A salon that
                      has been in business for 25 years may have a loyal
                      clientele base and a positive reputation within the
                      community. Customer reviews and testimonials can provide
                      insights into the salon's quality of service.beauty
                      industry. A salon with a long history may have
                      demonstrated its ability to stay current and incorporate
                      new techniques and styles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About End */}

          {/* Service Start */}
          <div className="service">
            <div className="container">
              <div className="section-header text-center">
                {/* <p>Our Salon Services</p> */}
                <h2>Services for You</h2>
              </div>
              <div className="row">
                {getdata
                  .slice(Math.max(getdata.length - 3, 0))
                  .map((el, index) => {
                    return (
                      <div className="col-lg-4 col-md-6" key={index}>
                        <div className="service-item">
                          <div className="service-img" style={{ height: 235 }}>
                            <img
                              src={"http://localhost:3000/images/" + el.image}
                              alt="Hair cut"
                            />
                          </div>
                          <h3>{el.name}</h3>
                          <p className="blog-card-line">{el.desc}</p>
                          <li
                            className="btn"
                            onClick={() => history.push("/price/" + el.name)}
                          >
                            Learn More
                          </li>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* Service End */}

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

          {/* Team Start */}
          <div className="Beautician">
            <div className="team">
              <div className="container">
                <div className="section-header text-center">
                  {/* <p>Our Beautician Team</p> */}
                  <h2>Meet Our Beautician</h2>
                </div>
                <div className="d-flex justify-content-md-end">
                  <a href="" style={{ fontSize: 25, color: "#673046bb" }}>
                    {" "}
                    <i
                      className="fa-solid fa-circle-plus"
                      onClick={() => history.push("./Teamprops")}
                    />
                  </a>
                </div>
                <div className="box" style={{cursor:"pointer"}}>
                  {getdatateam.map((el, index) => {
                    // console.log(el);
                    return (
                      <div className="team-card" key={index}>
                        <div className="imgBx">
                          <img
                            src={"http://localhost:3000/images/" + el.image}
                            alt="images"
                          />
                        </div>
                        <div className="details">
                          <h2>{el.title}</h2>
                          <p>{el.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* Team End */}

          {/* Blog Start */}
          <div className="blog">
            <div className="container">
              <div className="section-header text-center">
                {/* <p>Latest From Blog</p> */}
                <h2>VENUS Blog</h2>
              </div>
              <div className="row blog-page">
                {getdatablog
                  .slice(Math.max(getdatablog.length - 3, 0))
                  .map((el, index) => {
                    const blogdate = moment(el.date).format("DD/MM/YYYY");
                    return (
                      <div className="col-lg-4 col-md-6" key={index}>
                        <div className="blog-item">
                          <div className="blog-img">
                            <img
                              src={"http://localhost:3000/images/" + el.image}
                              alt="Blog"
                              style={{ height: 300 }}
                            />
                          </div>
                          <div className="blog-meta">
                            {/* <i className="fa fa-list-alt" /> */}
                            {/* <a href="">Nail Art</a> */}
                            {/* <i className="fa fa-calendar-alt" /> */}
                            <span>{el.blogdate}</span>
                          </div>
                          <div className="blog-text">
                            <h2>{el.title}</h2>
                            <p>{el.desc}</p>
                            {blogdate}
                            {
                              <div style={{ listStyle: "none" , cursor:"pointer" }}>
                                <li
                                  className="btns"
                                  onClick={() =>
                                    history.push("/Single/" + el._id)
                                  }
                                >
                                  Read More <i className="fa fa-angle-right" />
                                </li>
                              </div>
                            }
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* Blog End */}
        </div>
      ) : (
        <NetworkErrorcompo />
      )}
      <Footer />
    </div>
  );
};