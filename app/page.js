"use client";
// import Lenis from '@studio-freight/lenis'
import { useEffect, useRef, useState } from "react";
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
import BannnerSection from "@/components/Loader/BannnerSection";
/**
 * The `Home` function is a React component that represents the main page of the application.
 * It includes several sub-components such as `LandingPage`, `About`, `Project`, `Stack`, `Hobby`, and `Contact`.
 * The function also initializes a `LocomotiveScroll` instance for smooth scrolling and adds event listeners for scrolling to specific sections of the page.
 * Additionally, it tracks the mouse movement and displays a floating element (`mouse`) that follows the mouse cursor.
 */
export default function Home() {
  const mouseRef = useRef(null);
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });

    

    const aboutLink = document.querySelector('#about_link');
    const about = document.querySelector('#about');
    const project = document.querySelector('#project');
    const projectLink = document.querySelector('#project_link');

    // console.log(aboutLink)

    // try {
      
    //   aboutLink.addEventListener('click', () => locomotiveScroll.scrollTo(about));
    //   projectLink.addEventListener('click', () => locomotiveScroll.scrollTo(project));

    //   // return () => {
    //   //   aboutLink.removeEventListener('click', () => locomotiveScroll.scrollTo(about));
    //   //   projectLink.removeEventListener('click', () => locomotiveScroll.scrollTo(project));
    //   // };

      


    // } catch (error) {
    //   console.log({
    //     err : error
    //   })
    // }


    setTimeout(() => {
      setLoading(false)
    } , 6500)

    
  }, []);

  useEffect(() => {
    const mouse = mouseRef.current;
    const body = document.querySelector('body');

    

    const handleMouseMove = (event) => {
      gsap.to(mouse, {
        x: event.pageX,
        y: event.pageY,
        duration: 0.5,
      
      });
    };

    body.addEventListener("mousemove", handleMouseMove);

   

    return () => {
      body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={mouseRef}
        id="mouse"
        className="w-[50px] h-[50px] rounded-full absolute top-0 left-0 border border-white z-20 pointer-events-none overflow-hidden object-cover bg-transparent text-slate-100 flex justify-center items-center font-bold -translate-x-[50%] -translate-y-[50%] mix-blend-difference"
      ></div>

      <div className="h-full w-full overflow-x-hidden" id="main">
        {
          loading ?<BannnerSection /> : <>
          <Banner />
        <About />
        <Project />
        <Stack />
        <Hobby />
        <Contact />
          </>
        }
      </div>
    </>
  );
}

