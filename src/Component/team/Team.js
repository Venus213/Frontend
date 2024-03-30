import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Teamcardprops } from "./Teamcardprops";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Team = () => {
  // start code for a error page
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const demo = process.env.REACT_APP_DEMO

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
      .get(`${demo}beautician/view`)
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
          <div>
            {/* Page Header Start */}
            <div className="page-header Timage">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2>Beautician</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* Page Header End */}
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
                  {getdata.map((el, index) => {
                    return (
                      <Teamcardprops
                        image={`${demo}images/` + el.image}
                        title={el.title}
                        desc={el.desc}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            </div>
            
            {/* Team End */}
          </div>
        </div>
      ) : (
        <NetworkErrorcompo />
      )}
      <Footer/>
    </div>
  );
};
