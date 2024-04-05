import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import axios from "axios";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Profile = () => {
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
  // console.log(params.id);
  
  //   const [getdata, setdata] = useState({ image: "" });
  //   console.log(getdata);
  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:3000/blog/findbyid?id=${params.id}`)
  //       .then((res) => {
  //         // console.log(res);
  //         setdata(res.data.data[0]);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [getdata]);

  const [getempdata, setempdata] = useState({ email: "" });
  console.log(getempdata);

  useEffect(() => {
    axios
      .get(
        `https://backend-rust-eta.vercel.app/signup/findbyid?id=${sessionStorage.getItem(
          "empid"
        )}`
      )
      .then((res) => {
        // console.log(res);
        setempdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getempdata]);

  return (
    <div>
      <Navbar />
      {isOnline ? (
        <div className="portfoliocard">
          <div className="coverphoto" />
          <div className="profile_picture" />
          <div className="right_col">
            <h2 className="name">{getempdata.username}</h2>
            <h3 className="location"> India </h3>
            <ul className="contact_information">
              {/* <li className="work">CEO</li> */}
              <li className="website">
                <a className="nostyle" href="#">
                  {getempdata.email}
                </a>
              </li>
              {/* <li className="mail">{getempdata.email}</li> */}
              <li className="phone">{getempdata.mno}</li>
              {/* <li className="resume">
                <a href="#" className="nostyle">
                  download resume
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      ) : (
        <NetworkErrorcompo />
      )}
      <Footer />
    </div>
  );
};
