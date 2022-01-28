import React from "react";

const Countdown = () => {
  return (
    <div className="countdown">
      <div className="cont container">
        <h3 className="pt-5 pb-3">countdown to big event</h3>
        <div className="boxes_cont">
          <div className="box">
            <p className="weeks">00</p>
          </div>
          <div className="box">
            <p className="days">00</p>
          </div>
          <div className="box">
            <p className="hours">00</p>
          </div>
          <div className="box">
            <p className="minutes">00</p>
          </div>
          <div className="box">
            <p className="seconds">00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
