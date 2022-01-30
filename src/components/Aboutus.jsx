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
              Lorem ipsum dolor sit amet, consectetur adipiscing eli. Integer
              iaculis in lacus a sollicitudin. Ut hendrerit hendrerit nisl a
              accumsan. Pellentesque convallis consectetur tortor id placerat.
              Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
              volutpat ligula euismod.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing eli. Integer
              iaculis in lacus a sollicitudin. Ut hendrerit hendrerit nisl a
              accumsan. Pellentesque convallis consectetur tortor id placerat.
              Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
              volutpat ligula euismod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
