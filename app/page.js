"use client";
// import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from "react";
import LandingPage from "@/components/Landing_Page/LandingPage";
import Banner from "@/components/BannerSection/Banner";
import gsap from "gsap";
import useMouse from "@/hooks/useMouse";
import About from "@/components/About/About";

import LocomotiveScroll from "locomotive-scroll";
import Project from "@/components/Project/Project";
import Stack from "@/components/Stack/Stack";
import Hobby from "@/components/Hobby/Hobby";
import Contact from "@/components/Contact/Contact";
// import Project2 from "@/components/Project2/Project";

export default function Home() {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el : document.querySelector('[data-scroll-container]'),
      smooth : true
    });

    const about_link = document.querySelector('#about_link')
    const about = document.querySelector('#about')
    const project = document.querySelector('#project')
    const project_link = document.querySelector('#project_link')
    about_link.addEventListener('click' , () => locomotiveScroll.scrollTo(about))
    project_link.addEventListener('click' , () => locomotiveScroll.scrollTo(project))
    
  }, []);

  const mouse = useRef(null);

  useEffect(() => {
    const mouse = document.querySelector("#mouse");
    const body = document.querySelector('body')
    body.addEventListener("mousemove", (el) => {
      gsap.to(mouse, {
        x: el.pageX,
        y: el.pageY,
        duration: 0.5,
      });
    });
  }, []);

  return (
    <>
      <div
        ref={mouse}
        id="mouse"
        
        className="w-[50px] h-[50px] rounded-full   absolute top-0 left-0  border border-white z-20 pointer-events-none overflow-hidden   object-cover bg-transparent text-slate-100 flex justify-center items-center font-bold -translate-x-[50%] -translate-y-[50%] mix-blend-difference "
      ></div>

      <div className="h-full w-full overflow-x-hidden " id="main">
        <LandingPage />
        <About />
        <Project/>
        <Stack />
        <Hobby />
        <Contact />

        {/* <Project2 /> */}

      </div>
    </>
  );
}
