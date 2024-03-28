import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import axios from "axios";
import { Blogcardprops } from "./blogcardprops";
import moment from "moment";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Blog = () => {
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

  const [getdata, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/blog/view")
      .then((res) => {
        console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <Navbar/>
      {isOnline ? (
        <div>
          {/* Page Header Start */}
          <div className="page-header Bimage">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>VENUS Blog</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header End */}

          {/* Blog Start */}
          <div className="blog">
            <div className="container">
              <div className="section-header text-center">
                {/* <p>Latest From Blog</p> */}
                <h2>VENUS Blog</h2>
              </div>

              <div className="d-flex justify-content-md-end">
                {/* <a href="" style={{ fontSize: 25, color: "#673046bb" }}> */}
                  {" "}
                  <i
                    className="fa-solid fa-circle-plus"
                    onClick={() => history.push("./Blogprops")}
                  />
                {/* </a> */}
              </div>

              <div className="d-flex flex-wrap gap-3">
                {getdata.map((el, index) => {
                  const blogdate = moment(el.date).format("DD/MM/YYYY");
                  return (
                    <Blogcardprops
                      image={"http://localhost:3000/images/" + el.image}
                      date={el.date}
                      title={el.title}
                      desc={el.desc}
                      more={
                        <div style={{ listStyle: "none" , cursor:"pointer" }}>
                          <li
                            className="btns"
                            onClick={() => history.push("/Single/" + el._id)}
                          >
                            Read More <i className="fa fa-angle-right" />
                          </li>
                        </div>
                      }
                      blogdate={blogdate}
                    />
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
      <Footer/>
    </div>
  );
};