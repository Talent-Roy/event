import React from "react";

const Partners = () => {
  return (
    <div className="container partners">
      <div className="line"></div>
      <h2 className="title">our partners</h2>
      <div className="container brands_wrap">
        <div className="brand">
          <img src={require("./assets/imgs/vogue-logo.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("./assets/imgs/vans-3-logo.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("./assets/imgs/adidas-logo.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("./assets/imgs/calvin-klein-logo.png")} alt="" />
        </div>

        <div className="brand">
          <img
            src={require("./assets/imgs/3d4d810374330a63d5621388ec54d9f0.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
