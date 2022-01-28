import React from "react";
import { Button } from "react-bootstrap";

const CTA = () => {
  return (
    <div className="CTA">
      <div className="line"></div>
      <h2 className="title">get your tickets</h2>
      <div className="wrap">
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          modi velit neque odit laborum dignissimos.
        </p>
        <Button className="CTA_btn">buy now</Button>
      </div>
    </div>
  );
};

export default CTA;
