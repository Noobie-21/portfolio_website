"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./stack.module.css";
import { TbBrandNextjs, TbFileTypeCss } from "react-icons/tb";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const Stack = () => {
  const main = useRef(null);
  const tech = useRef(null);
  const techpara = useRef(null);
  const techStack = useRef(null);

  const gsapEffect = (tl, imgNode) => {
    tl.fromTo(
      main.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.4,
      }
    )
      .fromTo(
        tech.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          delay: 0.4,
        }
      )
      .fromTo(
        techpara.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          delay: 0.4,
        }
      )
      .fromTo(
        imgNode,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 1,
          delay: 0.4,
        }
      );
  };

  //   using ref = useRef(null)
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mouse = document.querySelector("#mouse");

    const ss = techStack.current;
    const imgNode = ss.querySelectorAll(".si");

    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: main.current,
        start: "-40% top",
        end: "10% top",

        scrub: 3,
      },
    });

    gsapEffect(tl, imgNode);

    imgNode.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(mouse, {
          width: "150px",
          height: "150px",
          duration: 0.4,
        });
      });
      element.addEventListener("mouseleave", () => {
        gsap.to(mouse, {
          width: "20px",
          height: "20px",
          duration: 0.4,
        });
      });
    });
  }, []);
  return (
    <div className={`${styles.main}`} ref={main}>
      <div className={`${styles.innerDiv}`}>
        <div className={`${styles.heading}`}>
          <h1 ref={tech}>Technology </h1>
          <p ref={techpara}>which I know & Familiar with</p>
        </div>
        <div id="stack" ref={techStack} className={`${styles.techStack}`}>
          <div id="lang" className={`${styles.tech} si`}>
            <TbBrandNextjs size={40} />
            <h1>Next Js</h1>
          </div>
          <div id="lang" className={`${styles.tech} si`}>
            <SiTailwindcss size={40} />
            <h1>Tailwind Css</h1>
          </div>
          <div id="lang" className={`${styles.tech} si`}>
            <TbFileTypeCss size={40} />
            <h1>CSS</h1>
          </div>
          <div id="lang" className={`${styles.tech} si`}>
            <SiFirebase size={40} />
            <h1>Firebase</h1>
          </div>
          <div id="lang" className={`${styles.tech} si`}>
            <SiMongodb size={40} />
            <h1>MongoDb</h1>
          </div>
          <div id="lang" className={`${styles.tech} si`}>
            <SiTypescript size={40} />
            <h1>Typescript (basic)</h1>
          </div>
          <div id="lang" className={`${styles.tech} si`}>
            <SiJavascript size={40} />
            <h1>Javascript</h1>
          </div>
          <div id="lang" className={`${styles.tech} si`}>
            <SiPython size={40} />
            <h1>Python</h1>
            <span>(basic-intermidiate)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
