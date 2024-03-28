import axios from "axios";
import React, { useEffect, useState } from "react";
import { Offercardprops } from "./offercardprops";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Offer = () => {
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
  // console.log(getdata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/offer/view")
      .then((res) => {
        // console.log(res);
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
        <div className="offer-page">
          <div>
            {/* Page Header Start */}
            <div className="page-header Oimage">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2>Offer</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* Page Header End */}

            {/* Offer Start */}

            <div className="container-fluid">
              <div className="container ">
                <div className="text-center section-header">
                  <h2>Some amazing offers for you</h2>
                </div>
                <div className="row">
                  {getdata.map((el, index) => {
                    return (
                      <Offercardprops
                        image={"http://localhost:3000/images/" + el.image}
                        hed={el.title}
                        price={"₹ " +el.price +"/-"}
                        desc={el.desc}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Offer End */}
          </div>
        </div>
      ) : (
        <NetworkErrorcompo />
      )}
      <Footer/>
    </div>
  );
};
