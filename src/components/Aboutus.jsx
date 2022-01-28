import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { GiTriangleTarget } from "react-icons/gi";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="cont container">
        <div className="row_cont">
          <div className="box">
            <p className="text-center">
              <BiTargetLock className="icon" size={80} />
            </p>
            <h2 className="text-center">our goal</h2>

            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              nulla veniam qui minima possimus vero, molestiae asperiores porro
              commodi quo?
            </p>
          </div>
        </div>
        <div className="row_cont">
          <div className="box ">
            <p className="text-center">
              <GiTriangleTarget className="icon" size={80} />
            </p>
            <h2 className="text-center">our vission</h2>

            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              nulla veniam qui minima possimus vero, molestiae asperiores porro
              commodi quo?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
