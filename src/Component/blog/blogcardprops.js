import React from "react";

export const Blogcardprops = (props) => {
  return (
    <div style={{ width: "32%" }}>
      <div className="col-lg-4 col-md-6 w-100">
        <div className="blog-item m-0" style={{cursor:"pointer"}}>
          <div className="blog-img">
            <img src={props.image} alt="Blog" style={{ height: "300px" }} />
          </div>
          <div className="blog-meta">
          <span>{props.blogdate}</span>
          </div>
          <div className="blog-text">
            <h2>{props.title}</h2>
            <div className="clamp">
            <p>{props.desc}</p>
            </div>
            <span>{props.update}</span>
            {props.more}
            <span>{props.del}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
