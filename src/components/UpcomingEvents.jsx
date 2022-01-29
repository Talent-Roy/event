import React from "react";
import { Button } from "react-bootstrap";

const UpcomingEvents = () => {
  return (
    <div className="container upEvnt">
      <div className="line"></div>
      <h2 className="title">upcoming events</h2>
      <div className="events_cont container">
        <div className="box ">
          <div className="recom ">
            <p>Coming next</p>
          </div>
          <div className="details mt-0">
            <h4>Lorem ipsum.</h4>
            <p className="lead">Lorem ipsum dolor.</p>
            <p className="date">
              25<small>th</small>
              <small className="month"> june</small>
            </p>

            <h3>featuring:</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <Button className="upEvnt_btn">register now</Button>
          </div>
        </div>

        <div className="box">
          <div className="details mt-0">
            <h4>Lorem ipsum.</h4>
            <p className="lead">Lorem ipsum dolor.</p>
            <p className="date">
              10<small>th</small>
              <small className="month"> April</small>
            </p>

            <h3>featuring:</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <Button className="upEvnt_btn">register now</Button>
          </div>
        </div>

        <div className="box">
          <div className="details mt-0">
            <h4>Lorem ipsum.</h4>
            <p className="lead">Lorem ipsum dolor.</p>
            <p className="date">
              15<small>th</small>
              <small className="month"> May</small>
            </p>

            <h3>featuring:</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <Button className="upEvnt_btn">register now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
