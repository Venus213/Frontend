import axios from "axios";
import React, { useEffect, useState } from "react";
import { Servicecardprops } from "./servicecardprops";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Service = () => {
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
      .get("https://backend-rust-eta.vercel.app/services/view")
      .then((res) => {
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
          <div className="page-header Simage">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Service</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header End */}

          {/* Service Start */}
          <div className="service">
            <div className="container">
              <div className="section-header text-center">
                {/* <p>Our Salon Services</p> */}
                <h2>Services for You</h2>
              </div>
              <div className="row">
                {getdata.map((el, index) => {
                  return (
                    <Servicecardprops
                      image={"http://localhost:3000/images/" + el.image}
                      name={el.name}
                      desc={el.desc}
                      more={
                        <li
                          className="btn"
                          onClick={() => history.push("/price/" + el.name)}
                        >
                          Learn More
                        </li>
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* Service End */}
        </div>
      ) : (
        <NetworkErrorcompo />
      )}
      <Footer/>
    </div>
  );
};
