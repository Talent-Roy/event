import React from "react";
import { BsMic, BsMegaphone, BsAlarm } from "react-icons/bs";
import { VscRocket } from "react-icons/vsc";

const Cards = () => {
  return (
    <div className="container cards_sect">
      <div className="cards_cont">
        <div className="box">
          <BsMic className="icon" size={80} />
          <h2>Lorem, ipsum.</h2>

          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit.
          </p>
          <a href="/">
            <h3>read more</h3>
          </a>
        </div>

        <div className="box">
          <VscRocket className="icon" size={80} />
          <h2>Lorem, ipsum.</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit.
          </p>
          <a href="/">
            <h3>read more</h3>
          </a>
        </div>

        <div className="box">
          <BsMegaphone className="icon" size={80} />
          <h2>Lorem, ipsum.</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit.
          </p>
          <a href="/">
            <h3>read more</h3>
          </a>
        </div>

        <div className="box">
          <BsAlarm className="icon" size={80} />
          <h2>Lorem, ipsum.</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit.
          </p>
          <a href="/">
            <h3>read more</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
