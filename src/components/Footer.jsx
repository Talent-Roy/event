import React from "react";
import { Button } from "react-bootstrap";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTwitterLine,
  RiTelegramLine,
  RiYoutubeLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className="box">
        <div className="logo">
          <h1>Event</h1>
        </div>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti sit
          cum a eum nam vitae dignissimos consequatur enim, tempore provident?
        </p>
        <div className="socials">
          <ul>
            <li>
              <RiFacebookCircleLine href="#" className="icon" />
            </li>
            <li>
              <RiInstagramLine href="#" className="icon" />
            </li>
            <li>
              <RiTwitterLine href="#" className="icon" />
            </li>
            <li>
              <RiTelegramLine href="#" className="icon" />
            </li>
            <li>
              <RiYoutubeLine href="#" className="icon" />
            </li>
          </ul>
        </div>
      </div>

      <div className="box">
        <div className="line"></div>
        <h2 className="title">instagram</h2>
        <div className="insta_imgs">
          <div className="inst_img">
            <img src={require("./assets/imgs/insta.jpg")} alt="..." />
          </div>
          <div className="inst_img">
            <img src={require("./assets/imgs/insta.jpg")} alt="..." />
          </div>
          <div className="inst_img">
            <img src={require("./assets/imgs/insta.jpg")} alt="..." />
          </div>
          <div className="inst_img">
            <img src={require("./assets/imgs/insta.jpg")} alt="..." />
          </div>
          <div className="inst_img">
            <img src={require("./assets/imgs/insta.jpg")} alt="..." />
          </div>
          <div className="inst_img">
            <img src={require("./assets/imgs/insta.jpg")} alt="..." />
          </div>
        </div>
      </div>

      <div className="box ">
        <div className="line"></div>
        <h2 className="title">subscribe to our newsletter</h2>
        <form className="" action="#">
          <input type="text" name="email" id="email" placeholder="email" />
          <br />
          <Button className="newsLet_btn btn-lg">subscribe</Button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
