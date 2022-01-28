import React from "react";
import { Carousel, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./assets/imgs/hero.jpg")}
            alt="First slide"
          />
          <Carousel.Caption className="header_text">
            <p className="lead">prepare yourself for the</p>
            <h3>conference</h3>
            <p>Praesent commodo cursus magna, vel.</p>
            <Button className="header_btn"> buy tickets now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./assets/imgs/hero.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption className="header_text">
            <p className="lead">prepare yourself for the</p>
            <h3>conference</h3>
            <p>Praesent commodo cursus magna, vel.</p>
            <Button className="header_btn"> buy tickets now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./assets/imgs/hero.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption className="header_text">
            <p className="lead">prepare yourself for the</p>
            <h3>conference</h3>
            <p>Praesent commodo cursus magna, vel.</p>
            <Button className="header_btn"> buy tickets now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
