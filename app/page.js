"use client";
// import Lenis from '@studio-freight/lenis'
import { useEffect, useRef, useState } from "react";
import Banner from "@/components/BannerSection/Banner";
import gsap from "gsap";
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
  const bodys = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  

      const aboutLink = document.querySelector("#about_link");
      const about = document.querySelector("#about");
  
      const project = document.querySelector("#project");
      const projectLink = document.querySelector("#project_link");
  
      const contact = document.querySelector('#contact')
      const contactLink = document.querySelector('#contact-link')
   




    // console.log(aboutLink);

    setTimeout(() => {
      setLoading(false);
    }, 6500);

    if (!loading) {
      aboutLink.addEventListener("click", () =>
        locomotiveScroll.scrollTo(about)
      );
      projectLink.addEventListener("click", () =>
        locomotiveScroll.scrollTo(project)
      );
      contactLink.addEventListener("click", () =>
        locomotiveScroll.scrollTo(contact)
      );


      
    }

   
  }, [loading]);

  useEffect(() => {
    const mouse = mouseRef.current;
    const body = bodys.current;
    // const body = document.querySelector("#main");

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

      <div className="h-full w-full overflow-x-hidden" id="main" ref={bodys}>
        {loading ? (
          <BannnerSection />
        ) : (
          <>
            <Banner />
            <About />
            <Project />
            <Stack />
            <Hobby />
            <Contact />
          </>
        )}
      </div>
    </>
  );
}
