"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Dirtectional from "./DIrectional/Dirtectional";


const About = () => {
  const arr = [1, 2, 3, 4];
  const main = useRef(null);
  const h1 = useRef([]);
  const head = useRef([]);
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  const Effect = (tl) => {
    tl.to(
      h1.current,

      {
        opacity: 1,
        x: -500,
        duration: 1,
      },
      "flag"
    )
  };


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        // scroller: document.documentElement,
        // markers: true,
        start: "-40% top",
        scrub: 3,
      },
    });
    Effect(tl);

    
  }, []);

  return (
    <div ref={main} id="about" className="relative scroll-section-outer  w-full h-[210vh] ">
      <div className={styles.upper}>
        <div className={styles.ctx} >
          {arr.map((item, index) => {
            return (
              <div className={styles.head} key={index} ref={(el) => {head.current[index] = el}}>
                <h1
                  data-text="Who Am I ?"
                  className={styles.heading}
                  ref={(el) => {
                    h1.current[index] = el;
                  }}
                >
                  Who Am I ?{" "}
                </h1>
              </div>
            );
          })}
        </div>
      </div>


      <div ref={triggerRef} >

      <div className={`  ${styles.scroll_section_inner}`} ref={sectionRef}>
        <Dirtectional />
      </div>
      </div>
    </div>
  );
};

export default About;
