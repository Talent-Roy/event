import React from "react";

const EventDates = () => {
  return (
    <div className=" event_dates">
      <nav className="navbar">Event calender</nav>
      <div className=" evntdt_wrap ">
        <div className="date_cont date1">
          <div className="box">
            <img
              className="img-fluid"
              src={require("./assets/imgs/insta.jpg")}
              alt=""
            />
          </div>
          <div className="box">lorem</div>
          <div className="box">lorem</div>
          <div className="box">lorem</div>
          <div className="box">lorem</div>
        </div>

        <div className="date_cont date2">
          <div className="box">
            <img
              className="img-fluid"
              src={require("./assets/imgs/insta.jpg")}
              alt=""
            />
          </div>
          <div className="box">lorem</div>
          <div className="box">lorem</div>
          <div className="box">lorem</div>
          <div className="box">lorem</div>
        </div>

        <div className="date_cont date3">
          <div className="box">
            <img
              className="img-fluid"
              src={require("./assets/imgs/insta.jpg")}
              alt=""
            />
          </div>
          <div className="box">lorem</div>
          <div className="box">lorem</div>
          <div className="box">lorem</div>
          <div className="box">lorem</div>
        </div>
      </div>
    </div>
  );
};

export default EventDates;
