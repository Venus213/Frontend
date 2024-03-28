import React from "react";

export const Teamcardprops = (props) => {
  return (
    <div className="team-card">
      <div className="imgBx">
        <img src={props.image} alt="images"/>
      </div>
      <div className="details">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};
