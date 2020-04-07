import React from "react";
import LoadingImg from "../images/gif/loading-arrow.gif";

export const Loading = () => {
  return (
    <div className="section-title">
      <h4>Loading...........</h4>
      <img src={LoadingImg} alt="Loading" />
    </div>
  );
};
