import React from "react";
import { BsMic, BsMegaphone, BsAlarm } from "react-icons/bs";
import { VscRocket } from "react-icons/vsc";

const Cards = () => {
  return (
    <div className=" cards_sect">
      <div className="cards_cont row justify-content-center mt30">
        <div className="box col-12 col-md-6 col-lg-3">
          <BsMic className="icon" />
          <div className="content">
            <h2>Lorem, ipsum.</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              rhoncus massa nec graviante.
            </p>
            <a href="/">
              <h3>read more</h3>
            </a>
          </div>
        </div>

        <div className="box col-12 col-md-6 col-lg-3">
          <VscRocket className="icon" />
          <div className="content">
            <h2>Lorem, ipsum.</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              rhoncus massa nec graviante.
            </p>
            <a href="/">
              <h3>read more</h3>
            </a>
          </div>
        </div>

        <div className="box col-12 col-md-6 col-lg-3">
          <BsMegaphone className="icon" />
          <div className="content">
            <h2>Lorem, ipsum.</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              rhoncus massa nec graviante.
            </p>
            <a href="/">
              <h3>read more</h3>
            </a>
          </div>
        </div>

        <div className="box col-12 col-md-6 col-lg-3">
          <BsAlarm className="icon" />
          <div className="content">
            <h2>Lorem, ipsum.</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              rhoncus massa nec graviante.
            </p>
            <a href="/">
              <h3>read more</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
