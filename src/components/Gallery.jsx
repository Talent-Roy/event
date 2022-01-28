import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="line"></div>
      <h2 className="title">Lorem, ipsum.</h2>
      <div className="img_boxes">
        <div className="box">
          <img
            src={require("./assets/imgs/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg")}
            alt="..."
          />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>

        <div className="box">
          <img
            src={require("./assets/imgs/christopher-campbell-rDEOVtE7vOs-unsplash.jpg")}
            alt="..."
          />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>

        <div className="box">
          <img
            src={require("./assets/imgs/elizeu-dias-2EGNqazbAMk-unsplash.jpg")}
            alt="..."
          />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>
        <div className="box">
          <img
            src={require("./assets/imgs/ethan-hoover-0YHIlxeCuhg-unsplash.jpg")}
            alt="..."
          />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>
        <div className="box">
          <img
            src={require("./assets/imgs/constantin-panagopoulos-9lf_erPHYG0-unsplash.jpg")}
            alt="..."
          />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>
        <div className="box">
          <img
            src={require("./assets/imgs/janko-ferlic-GWFffQS5eWU-unsplash.jpg")}
            alt="..."
          />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>
        <div className="box">
          <img
            src={require("./assets/imgs/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg")}
            alt="..."
          />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>
        <div className="box">
          <img
            src={require("./assets/imgs/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg")}
            alt="..."
          />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
