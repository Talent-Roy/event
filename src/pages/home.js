import React from "react";
import AboutEvent from "../components/AboutEvent";
import Aboutus from "../components/Aboutus";
import Cards from "../components/Cards";
import Countdown from "../components/Countdown";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import EventDates from "../components/EventDates";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Partners from "../components/Partners";
import UpcomingEvnts from "../components/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Header />
      <Aboutus />
      <Countdown />
      <AboutEvent />
      <Cards />
      <Gallery />
      <UpcomingEvnts />
      <EventDates />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
