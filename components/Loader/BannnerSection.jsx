import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from "typed.js";
// import anime from 'animejs/lib/anime.es.js';
import anime from "animejs";
import Banner from "../BannerSection/Banner";

const BannnerSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const greeting = useRef(null);
  const greeting2 = useRef(null);
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  const heading3 = useRef(null);
  const heading4 = useRef(null);
  const home = useRef(null);

  const homepageLoad = () => {
    const tl = gsap.timeline();
    const delay = [heading4.current, heading3.current, heading2.current, heading1.current]
    const body = document.querySelector('#main')
    
    
    delay.forEach((el , i) => {
      tl.to(el, {
        translateY: -5,
        duration: 1,
        delay : i / 10
      })
    })
    
    
      tl.to(main.current, {
        top: "-100%",
        duration: 1,
        delay: 0.5,
        zIndex : -1
      })
  }

  useEffect(() => {

    homepageLoad()
    
  } , []);


  useEffect(() => {
    const tl = gsap.timeline();

    const typed = new Typed(greeting.current, {
      strings: ["Hello &#128075;"],
      typeSpeed: 100,
    });
    const typed2 = new Typed(greeting2.current, {
      strings: ["こんにちは" , "नमस्ते"],
      typeSpeed: 200,
    });

    return () => {
      typed.destroy();
      typed2.destroy();
    };

  }, []);

  return (
    <>
      <div
        ref={main}
        id="loading-page"
        className=" h-screen w-full  justify-between px-10 py-5 absolute top-0 left-0 overflow-hidden z-40 flex  "
      >

        <div className="flex flex-col ">
          <h1
          ref={greeting}
          className="text-slate-200 text-[5rem] pt-[50px]pl-[50px]"
        ></h1>
        <h1
          ref={greeting2}
          className="text-slate-200 text-[5rem] pt-[50px]pl-[50px]"
        ></h1>
        </div>
        

        <div className="relative h-full  w-[20vw] flex  flex-col items-center ">
          <div className=" relative z-10 w-[180px] h-[120px] overflow-hidden  ">
            <h1
              ref={heading1}
              className="text-slate-200 font-bold text-[6rem] pt-[50px]pl-[50px]  p-1 transition-all duration-100   translate-y-[80px]  "
            >
              100
            </h1>
          </div>

          <div className=" relative z-10 w-[180px] h-[120px] overflow-hidden  ">
            <h1
              ref={heading2}
              className="text-slate-200 font-bold text-[6rem] pt-[50px]pl-[50px]  p-1 transition-all duration-100   translate-y-[80px]  "
            >
              76
            </h1>
          </div>
          <div className=" relative z-10 w-[180px] h-[120px] overflow-hidden  ">
            <h1
              ref={heading3}
              className="text-slate-200 font-bold text-[6rem] pt-[50px]pl-[50px]  p-1 transition-all duration-100   translate-y-[80px]  "
            >
              50
            </h1>
          </div>
          <div className=" relative z-10 w-[180px] h-[120px]   ">
            <h1
              ref={heading4}
              className="text-slate-200 font-bold text-[6rem] pt-[50px]pl-[50px]  p-1 transition-all duration-100   translate-y-[80px]  "
            >
              00
            </h1>
          </div>
        </div>
      </div>

  
      
    </>
  );
};

export default BannnerSection;
