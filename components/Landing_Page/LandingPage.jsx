"use client";
import React, { useEffect, useRef } from "react";
import BannnerSection from "../Loader/BannnerSection";
import Banner from "../BannerSection/Banner";

/**
 * Renders the LandingPage component.
 * @returns {JSX.Element} The rendered LandingPage component.
 */
const LandingPage = () => {
  return (
    <div id="main-wallah" className="w-full h-screen relative">
      <Banner />
    </div>
  );
};

export default LandingPage;
