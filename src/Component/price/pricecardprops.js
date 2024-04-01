import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Pricecardprops = (props) => {
  const history = useHistory();
  return (
    <div className="col-lg-4 col-md-6">
      <div className="service-item" style={{ cursor: "pointer" }}>
        <div className="service-img" style={{ height: 290 }}>
          <img src={props.image} alt="Image" />
        </div>
          <h3> {props.title}</h3>
        <h2>{props.price}</h2>
        <div style={{ listStyle: "none" }}>
          <div>
            <li className="btn" onClick={() => history.push("/appointment")}>
              Book Appointment
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
