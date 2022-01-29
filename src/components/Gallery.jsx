import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="line"></div>
      <h2 className="title">Lorem, ipsum.</h2>
      <div className="img_boxes">
        <div className="box">
          <img src={require("./assets/imgs/person1.jpg")} alt="..." />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>

        <div className="box">
          <img src={require("./assets/imgs/person2.jpg")} alt="..." />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>

        <div className="box">
          <img src={require("./assets/imgs/person3.jpg")} alt="..." />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>
        <div className="box">
          <img src={require("./assets/imgs/person4.jpg")} alt="..." />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>
        <div className="box">
          <img src={require("./assets/imgs/person5.jpg")} alt="..." />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>
        <div className="box">
          <img src={require("./assets/imgs/person6.jpg")} alt="..." />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>
        <div className="box">
          <img src={require("./assets/imgs/person7.jpg")} alt="..." />
          <div className="details">
            <h4 className="name">adam smith</h4>
            <p className="role">CEO company</p>
          </div>
        </div>
        <div className="box">
          <img src={require("./assets/imgs/person8.jpg")} alt="..." />
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
