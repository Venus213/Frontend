import axios from "axios";
import React, { useEffect, useState } from "react";
import { Portfoliocardprops } from "./Portfoliocardprops";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Portfolio = () => {
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

  const [getdata, setdata] = useState([]);
  const [getfildata, setfildata] = useState("all");
  console.log(getfildata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/gallery/view")
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
      <Navbar />
      {isOnline ? (
        <div>
          {/* Page Header Start */}
          <div className="page-header Gimage">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Gallery</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header End */}

          {/* Portfolio Start */}
          <div className="portfolio">
            <div className="container">
              <div className="section-header text-center">
                {/* <p>Barber Image Gallery</p> */}
                <h2>Some Images From Our salons Gallery</h2>
              </div>
              <div className="row">
                <div className="col-12" style={{ listStyle: "none" }}>
                  <ul id="portfolio-flters">
                    <li onClick={() => setfildata("all")} className="filter-a">
                      All
                    </li>
                    <li onClick={() => setfildata("hair-care")}>Hair Care</li>
                    <li onClick={() => setfildata("nail-art")}>Nail Art</li>
                    <li onClick={() => setfildata("makeup")}>Makeup</li>
                    <li onClick={() => setfildata("skin-care")}>Skin Care</li>
                    <li onClick={() => setfildata("massage")}>Massage</li>
                    <li onClick={() => setfildata("mehandi")}>Mahendi</li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container">
                {getdata
                  .filter(
                    (el) => getfildata === "all" || el.category === getfildata
                  )
                  .map((el, index) => (
                    <Portfoliocardprops
                      key={index}
                      image={`http://localhost:3000/images/${el.image}`}
                    />
                  ))}
              </div>
            </div>
          </div>
          {/* Portfolio Start */}
        </div>
      ) : (
        <NetworkErrorcompo />
      )}
      <Footer />
    </div>
  );
};
