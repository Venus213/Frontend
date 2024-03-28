import React from "react";
const contentStyle = {
  height: "260px",
  // color: "#fff",
  fontsize: "35px",
  // lineHeight: "160px",
  textAlign: "center",
  background: "#ffff",
};

export const Feedbackcardprops = (props) => {
  return (
    <div>
      <p style={contentStyle} className="p-5">
        {props.message}
        <div className="slider-contant d-flex p-5">
          <div className="slider-image">
            <img
              className="img-fluid flex-shrink-0 rounded"
              src={props.image}
              style={{ width: 45, height: 45 }}
            />
          </div>
          <div className="ps-3">
            <h6 className="fw-bold mb-1">{props.name}</h6>
            <small>{props.profession}</small>
          </div>
        </div>
      </p>
    </div>
  );
};