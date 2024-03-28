import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pricecardprops } from "./pricecardprops";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { Dropdown, Space } from "antd";

export const Price = () => {
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

  const params = useParams();
  const history = useHistory();

  const [getname, setname] = useState([]);
  const items = [
    {
      label: <li onClick={() => history.push("/blog")}>blog</li>,
      key: "0",
    },
    {
      label: <li onClick={() => history.push("/feedback")}>Feedback</li>,
      key: "1",
    },
  ];

  useEffect(() => {
    axios
      .get(`hzz/price/nameshow/?name=${params.name}`)
      .then((res) => {
        setname(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const [getdrop, setdrop] = useState(true);
  const logout = () => {
    history.push("/");
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <div>
      {isOnline ? (
        <div>
          <Navbar/>
          {/* Page Header Start */}
          <div className="page-header Pimage">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Price</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header End */}

          {/* category start */}
          <div className="service">
            <div className="container">
              <div className="row">
                {getname.map((el, index) => {
                  return (
                    <Pricecardprops
                      image={"http://localhost:3000/images/" + el.image}
                      title={el.title}
                      price={"₹ " +el.price +"/-"}
                      // book={
                      //   <li className="btns" onClick={() => history.push("/appointment")}>
                      //     Book Appointment
                      //   </li>
                      // }
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* category end */}
        </div>
      ) : (
        <NetworkErrorcompo />
      )}
      <Footer />
    </div>
  );
};
