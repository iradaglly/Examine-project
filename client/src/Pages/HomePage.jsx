import React from "react";
import HeroSection from "./HeroSection";
import HostingCards from "./HostingCards";
import { Helmet } from "react-helmet";
import Clients from "./Clients";
import WhyChooseUs from "./WhyChooseUs"


const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <HeroSection />
      <HostingCards />
      <Clients />
      <WhyChooseUs/>
    </>
  );
};

export default HomePage;
