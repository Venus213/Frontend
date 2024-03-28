import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { NetworkErrorcompo } from "../NetworkErrorcompo";
// let i = 1;
export const Navbar = () => {
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
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("navbar-pos");
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("navbar-pos");
        navbar.classList.remove("nav-sticky");
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          {/* Top Bar Start */}
          <div className="top-bar d-none d-md-block ">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="top-bar-left">
                    <div className="text">
                      <h2>8:00 AM TO 9:00 PM</h2>
                      <p>Opening Hour Mon to Fri</p>
                    </div>
                    <div className="text">
                      <h2>+91 82942 95380</h2>
                      <p>Call Us For Appointment</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="top-bar-right">
                    <div className="social">
                      <li href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="icone"
                        >
                          <path
                            d="M10 0C7.28625 0 6.945 0.0125 5.87875 0.06C4.8125 0.11 4.08625 0.2775 3.45 0.525C2.78231 0.775407 2.17768 1.16925 1.67875 1.67875C1.16925 2.17768 0.775407 2.78231 0.525 3.45C0.2775 4.085 0.10875 4.8125 0.06 5.875C0.0125 6.94375 0 7.28375 0 10.0013C0 12.7163 0.0125 13.0563 0.06 14.1225C0.11 15.1875 0.2775 15.9137 0.525 16.55C0.78125 17.2075 1.1225 17.765 1.67875 18.3212C2.23375 18.8775 2.79125 19.22 3.44875 19.475C4.08625 19.7225 4.81125 19.8912 5.87625 19.94C6.94375 19.9875 7.28375 20 10 20C12.7163 20 13.055 19.9875 14.1225 19.94C15.1863 19.89 15.915 19.7225 16.5513 19.475C17.2185 19.2244 17.8227 18.8306 18.3212 18.3212C18.8775 17.765 19.2187 17.2075 19.475 16.55C19.7212 15.9137 19.89 15.1875 19.94 14.1225C19.9875 13.0563 20 12.7163 20 10C20 7.28375 19.9875 6.94375 19.94 5.87625C19.89 4.8125 19.7212 4.085 19.475 3.45C19.2246 2.78231 18.8308 2.17768 18.3212 1.67875C17.8223 1.16925 17.2177 0.775407 16.55 0.525C15.9125 0.2775 15.185 0.10875 14.1212 0.06C13.0537 0.0125 12.715 0 9.9975 0H10ZM9.10375 1.8025H10.0013C12.6713 1.8025 12.9875 1.81125 14.0412 1.86C15.0162 1.90375 15.5462 2.0675 15.8987 2.20375C16.365 2.385 16.6987 2.6025 17.0487 2.9525C17.3987 3.3025 17.615 3.635 17.7963 4.1025C17.9338 4.45375 18.0963 4.98375 18.14 5.95875C18.1888 7.0125 18.1988 7.32875 18.1988 9.9975C18.1988 12.6663 18.1888 12.9837 18.14 14.0375C18.0963 15.0125 17.9325 15.5413 17.7963 15.8938C17.6348 16.3274 17.3791 16.7197 17.0475 17.0425C16.6975 17.3925 16.365 17.6088 15.8975 17.79C15.5475 17.9275 15.0175 18.09 14.0412 18.135C12.9875 18.1825 12.6713 18.1938 10.0013 18.1938C7.33125 18.1938 7.01375 18.1825 5.96 18.135C4.985 18.09 4.45625 17.9275 4.10375 17.79C3.66979 17.6291 3.277 17.3738 2.95375 17.0425C2.62159 16.7195 2.36541 16.3267 2.20375 15.8925C2.0675 15.5412 1.90375 15.0113 1.86 14.0363C1.8125 12.9825 1.8025 12.6662 1.8025 9.995C1.8025 7.32375 1.8125 7.01 1.86 5.95625C1.905 4.98125 2.0675 4.45125 2.205 4.09875C2.38625 3.6325 2.60375 3.29875 2.95375 2.94875C3.30375 2.59875 3.63625 2.3825 4.10375 2.20125C4.45625 2.06375 4.985 1.90125 5.96 1.85625C6.8825 1.81375 7.24 1.80125 9.10375 1.8V1.8025ZM15.3387 3.4625C15.1812 3.4625 15.0251 3.49354 14.8795 3.55384C14.7339 3.61415 14.6017 3.70254 14.4902 3.81397C14.3788 3.9254 14.2904 4.05769 14.2301 4.20328C14.1698 4.34887 14.1387 4.50491 14.1387 4.6625C14.1387 4.82009 14.1698 4.97613 14.2301 5.12172C14.2904 5.26731 14.3788 5.3996 14.4902 5.51103C14.6017 5.62246 14.7339 5.71085 14.8795 5.77116C15.0251 5.83146 15.1812 5.8625 15.3387 5.8625C15.657 5.8625 15.9622 5.73607 16.1873 5.51103C16.4123 5.28598 16.5387 4.98076 16.5387 4.6625C16.5387 4.34424 16.4123 4.03902 16.1873 3.81397C15.9622 3.58893 15.657 3.4625 15.3387 3.4625ZM10.0013 4.865C9.32009 4.85437 8.64362 4.97936 8.01122 5.23268C7.37883 5.486 6.80314 5.86259 6.31769 6.34053C5.83223 6.81847 5.44671 7.38821 5.18355 8.01657C4.9204 8.64494 4.78488 9.31938 4.78488 10.0006C4.78488 10.6819 4.9204 11.3563 5.18355 11.9847C5.44671 12.613 5.83223 13.1828 6.31769 13.6607C6.80314 14.1387 7.37883 14.5153 8.01122 14.7686C8.64362 15.0219 9.32009 15.1469 10.0013 15.1363C11.3494 15.1152 12.6353 14.5649 13.5812 13.6041C14.5272 12.6432 15.0574 11.349 15.0574 10.0006C15.0574 8.65228 14.5272 7.35802 13.5812 6.39719C12.6353 5.43636 11.3494 4.88603 10.0013 4.865ZM10.0013 6.66625C10.439 6.66625 10.8726 6.75248 11.277 6.92002C11.6815 7.08755 12.049 7.33312 12.3586 7.64268C12.6681 7.95225 12.9137 8.31976 13.0812 8.72423C13.2488 9.1287 13.335 9.56221 13.335 10C13.335 10.4378 13.2488 10.8713 13.0812 11.2758C12.9137 11.6802 12.6681 12.0477 12.3586 12.3573C12.049 12.6669 11.6815 12.9124 11.277 13.08C10.8726 13.2475 10.439 13.3337 10.0013 13.3337C9.11709 13.3337 8.26913 12.9825 7.64393 12.3573C7.01873 11.7321 6.6675 10.8842 6.6675 10C6.6675 9.11583 7.01873 8.26788 7.64393 7.64268C8.26913 7.01748 9.11709 6.66625 10.0013 6.66625Z"
                            fill="white"
                          />
                        </svg>
                      </li>
                      <li href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 11 18"
                          fill="none"
                          className="icone"
                        >
                          <path
                            d="M10.1667 0.666656H7.66667C6.5616 0.666656 5.50179 1.10564 4.72039 1.88704C3.93899 2.66845 3.5 3.72825 3.5 4.83332V7.33332H1V10.6667H3.5V17.3333H6.83333V10.6667H9.33333L10.1667 7.33332H6.83333V4.83332C6.83333 4.61231 6.92113 4.40035 7.07741 4.24407C7.23369 4.08779 7.44565 3.99999 7.66667 3.99999H10.1667V0.666656Z"
                            stroke="white"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </li>
                      <li href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="icone"
                        >
                          <path
                            d="M3.91719 17.5H0.289063V5.81641H3.91719V17.5ZM2.10117 4.22266C0.941016 4.22266 0 3.26172 0 2.10157C8.3039e-09 1.5443 0.221373 1.00986 0.615419 0.615816C1.00947 0.22177 1.54391 0.000396729 2.10117 0.000396729C2.65844 0.000396729 3.19288 0.22177 3.58692 0.615816C3.98097 1.00986 4.20234 1.5443 4.20234 2.10157C4.20234 3.26172 3.26094 4.22266 2.10117 4.22266ZM17.4961 17.5H13.8758V11.8125C13.8758 10.457 13.8484 8.71876 11.9895 8.71876C10.1031 8.71876 9.81406 10.1914 9.81406 11.7148V17.5H6.18984V5.81641H9.66953V7.41016H9.72031C10.2047 6.49219 11.3879 5.52344 13.1531 5.52344C16.825 5.52344 17.5 7.94141 17.5 11.082V17.5H17.4961Z"
                            fill="white"
                          />
                        </svg>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Top Bar End */}
          {/* Nav Bar Start */}
          <div className="navbar navbar-expand-lg bg-dark navbar-dark pos-rel ">
            <div className="container-fluid ">
              <div className="d-flex align-items-center">
                <div
                  style={{
                    height: 60,
                    width: 60,
                    overflow: "hidden",
                    marginRight: "20px",
                  }}
                >
                  <img
                    src="../image/logo/logo-removebg-preview1.png"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt="Logo"
                  />
                </div>
                <div>
                  <li
                    style={{ listStyle: "none", cursor: "pointer" }}
                    onClick={() => history.push("/")}
                    className="navbar-brand"
                  >
                    VENUS
                  </li>
                </div>
                <div>
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                </div>
              </div>

              <div
                className="collapse navbar-collapse navbar-fix"
                id="navbarCollapse"
              >
                <div className="navbar-nav ml-auto align-items-center">
                  <li
                    style={{ cursor: "pointer" }}
                    href="index.html"
                    className="nav-item nav-link"
                    onClick={() => history.push("/index")}
                  >
                    Home
                  </li>
                  <li
                    style={{ cursor: "pointer" }}
                    href="about.html"
                    className="nav-item nav-link"
                    onClick={() => history.push("/about")}
                  >
                    About
                  </li>
                  <li
                    style={{ cursor: "pointer" }}
                    href="service.html"
                    className="nav-item nav-link"
                    onClick={() => history.push("/service")}
                  >
                    Service
                  </li>
                  <li
                    style={{ cursor: "pointer" }}
                    href="team.html"
                    className="nav-item nav-link"
                    onClick={() => history.push("/team")}
                  >
                    Beautician
                  </li>
                  <li
                    style={{ cursor: "pointer" }}
                    href="portfolio.html"
                    className="nav-item nav-link"
                    onClick={() => history.push("/Portfolio")}
                  >
                    Gallery
                  </li>
                  <li
                    style={{ cursor: "pointer" }}
                    // href="Offers.html"
                    className="nav-item nav-link"
                    onClick={() => history.push("/offer")}
                  >
                    Offers
                  </li>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <li onClick={(e) => e.preventDefault()}>
                      <Space
                        style={{
                          color: "#e5dbdb",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        pages
                        <svg
                          style={{ margin: "0px" }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 744 392"
                          fill="none"
                        >
                          <path
                            d="M691.872 8.86401L372 320.672L52.128 8.86401C46.4132 3.28131 38.7411 0.155823 30.752 0.155823C22.7629 0.155823 15.0908 3.28131 9.37599 8.86401C6.60877 11.5753 4.41038 14.8115 2.90958 18.3831C1.40878 21.9547 0.635742 25.7899 0.635742 29.664C0.635742 33.5381 1.40878 37.3733 2.90958 40.9449C4.41038 44.5165 6.60877 47.7527 9.37599 50.464L349.664 382.24C355.64 388.065 363.655 391.325 372 391.325C380.345 391.325 388.36 388.065 394.336 382.24L734.624 50.528C737.411 47.8147 739.626 44.5705 741.138 40.9871C742.651 37.4036 743.43 33.5535 743.43 29.664C743.43 25.7745 742.651 21.9243 741.138 18.3409C739.626 14.7575 737.411 11.5133 734.624 8.79999C728.909 3.21728 721.237 0.0918274 713.248 0.0918274C705.259 0.0918274 697.587 3.21728 691.872 8.79999V8.86401Z"
                            fill="white"
                          />
                        </svg>
                      </Space>
                    </li>
                  </Dropdown>
                  <li
                    style={{ cursor: "pointer" }}
                    // href="contact.html"
                    className="nav-item nav-link"
                    onClick={() => history.push("/contact")}
                  >
                    Contact
                  </li>
                  <li
                    href="Appointment.html"
                    className="btn btn-light btn-primary-outline-0 rounded-pill nav-item nav-link"
                    style={{ color: "black", cursor: "pointer" }}
                    onClick={() => history.push("/appointment")}
                  >
                    Book Appointment
                  </li>
                  <li
                    style={{ cursor: "pointer", position: "relative" }}
                    href="login.html"
                    className="nav-item nav-link"
                    // onClick={() => history.push("/")}
                  >
                    <svg
                      // onClick={() => closeopen()}
                      onClick={() => setdrop(!getdrop)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 15 18"
                      fill="none"
                      className="icone"
                    >
                      <path
                        d="M10.625 4C10.625 4.8288 10.2958 5.62366 9.70971 6.20971C9.12366 6.79576 8.3288 7.125 7.5 7.125C6.6712 7.125 5.87634 6.79576 5.29029 6.20971C4.70424 5.62366 4.375 4.8288 4.375 4C4.375 3.1712 4.70424 2.37634 5.29029 1.79029C5.87634 1.20424 6.6712 0.875 7.5 0.875C8.3288 0.875 9.12366 1.20424 9.70971 1.79029C10.2958 2.37634 10.625 3.1712 10.625 4ZM1.25083 15.765C1.27761 14.1253 1.94778 12.5618 3.11681 11.4117C4.28585 10.2616 5.86007 9.61706 7.5 9.61706C9.13992 9.61706 10.7142 10.2616 11.8832 11.4117C13.0522 12.5618 13.7224 14.1253 13.7492 15.765C11.7887 16.664 9.65679 17.1279 7.5 17.125C5.27 17.125 3.15333 16.6383 1.25083 15.765Z"
                        stroke="white"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <ul
                      style={{
                        position: "absolute",
                        listStyle: "none",
                        padding: "10px",
                        top: "40px",
                        width : "80px",
                        backgroundColor : "white",
                        color:"black",
                        borderRadius:"6px",
                        display: getdrop === true ? "none" : "block",
                      }}
                    >
                      <li
                        style={{ cursor: "pointer" }}
                        onClick={() => history.push("/profile")}
                      >
                        Profile
                      </li>
                      <li onClick={() => history.push("/")}>Signup</li>
                      <li onClick={() => logout()}>Log Out</li>
                    </ul>
                  </li>
                </div>
              </div>
            </div>
          </div>
          {/* Nav Bar End */}
        </div>
      ) : (
        <NetworkErrorcompo />
      )}
    </div>
  );
};
