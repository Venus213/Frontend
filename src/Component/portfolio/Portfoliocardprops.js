import React from "react";

export const Portfoliocardprops = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first">
            <div className="portfolio-wrap" style={{ height: 235 ,cursor:"pointer" }}>
                <div style={{listStyle: " none "}}>
                <li
                    src={props.image}
                    data-lightbox="portfolio"
                >
                    <img
                        src={props.image}
                        alt="Portfolio Image"
                    />
                </li>
                </div>
            </div>
        </div>
    )
}