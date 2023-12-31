'use client'
import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import { IoBookSharp } from "react-icons/io5";
import { GiConsoleController } from "react-icons/gi";
import { BsMusicPlayer } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hobby = () => {
  const main_ref = useRef(null)
  const heading_section_ref = useRef(null)
  const hooby_section_ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    

    const heading_section = heading_section_ref.current

    const heading_inner_element = heading_section.querySelectorAll('.heading_inner_class')



    const gsapScrollTrigger = (ref , start , end) => {
      const timeline = gsap.timeline({
        
        scrollTrigger : {
          trigger : ref,
          scroller:document.documentElement,
          start : start,
          end : end,
          scrub : 3
        }
      })
      return timeline
      
    }

    heading_inner_element.forEach(el => {
      
        const timeline = gsapScrollTrigger(main_ref.current , "-80% top" , "-30% top")
      
      timeline.fromTo(el , {
     
        x : -50,
        opacity : 0,
      },
      {
        opacity : 1 , 
        x : 0,
        stagger : 1
      })
      
    })

    const hobby_upper_ref = hooby_section_ref.current;

    const hobby_inner_section_ref = hobby_upper_ref.querySelectorAll(".hobby_section_class" , "60% top" , "top bottom")

    hobby_inner_section_ref.forEach((el , i) => {

      const elementX = el.getBoundingClientRect()
      const timeline = gsapScrollTrigger(el)
      timeline.fromTo(el , {
        x : -50,
        opacity : 0
      },
      {
        opacity  : 1 ,
        x : 0,
        duration : 0.5,
        stagger : 1,
        delay : i / 10,
      })

    })
    
        
      
  } , [])
  return (
    <div className={styles.main} ref={main_ref}>
      <div className={styles.innerDiv}>
        <div className={styles.heading} ref={heading_section_ref}>
          <h1 className="heading_inner_class">Hobby</h1>
          <p className="heading_inner_class">Few habits which i resolve for the past few years.</p>
        </div>
        <div className={styles.hooby_section}>
          <div className={styles.inner_section} ref={hooby_section_ref}>
            <div className={`${styles.booksHobbySection} hobby_section_class`}>
              <IoBookSharp size={100} />
              <h1>Reading Books</h1>
              <p>
                One of the best habit i accquire is book reading, yet i am not active reader, but i consider to complete one-two book in a month.
                some books are :- 	&#8220;Rich and Poor Dad	&#8220; , 	&#8220;The subtal art of not giving fuck	&#8220; , 	&#8220;The Atomic habit	&#8220;.
              </p>
            </div>
            <div className={`${styles.booksHobbySection} hobby_section_class`}>
              <GiConsoleController size={100} />
              <h1>Playing Games</h1>
              <p>
                I love playing both digital and physical game , like criket , kabbadi , chess , valorant , and many more
              </p>
            </div>
            <div className={`${styles.booksHobbySection} hobby_section_class`}>
              <BsMusicPlayer size={100} />
              <h1>Listening Music</h1>
              <p>
                Music is awesome and powerfull to feel productivity in work and any kind of stuff!
              </p>
            </div>
            <div className={`${styles.booksHobbySection} hobby_section_class`}>
              <div  className={styles.svg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#313131"
                    d="M24,8L24,8C15.716,8,9,14.716,9,23v16c0.871,3.394,2,6,2,6v-6h0.5l0.5,4c1.719,3.625,4,5,4,5v-5h15v5	c0,0,4-2,6-9l1,6c0,0,1-5,1-13v-9C39,14.716,32.284,8,24,8z"
                  ></path>
                  <path
                    fill="#ffdbd0"
                    d="M14,20v20.481c0,0.494,0.178,0.967,0.509,1.334c0.003,0.003,0.005,0.006,0.008,0.01 c0.3,0.33,0.701,0.74,1.147,1.175h-0.008c2.142,2.091,5.721,5,8.344,5s6.202-2.909,8.344-5h-0.008 c0.446-0.435,0.847-0.845,1.147-1.175c0.003-0.003,0.005-0.006,0.008-0.01C33.822,41.448,34,40.976,34,40.481V20H14z"
                  ></path>
                  <path
                    fill="#f5e9e8"
                    d="M35,28c0,0-4,0-5,0c-2,0-3,2-3,2v1l8,0V28z"
                  ></path>
                  <circle cx="30.5" cy="29.5" r="1.5" fill="#bf360c"></circle>
                  <path
                    fill="#212121"
                    d="M27,30c0,0,0.875-1,6.125-1L35,29v-2c0,0-2.5,0-3,0C28,27,27,30,27,30z"
                  ></path>
                  <polygon
                    fill="#2c2c2c"
                    points="36,24 28,27 26,27 31,24"
                  ></polygon>
                  <path
                    fill="#f5e9e8"
                    d="M13,28c0,0,4,0,5,0c2,0,3,2,3,2v1l-8,0V28z"
                  ></path>
                  <circle cx="17.5" cy="29.5" r="1.5" fill="#bf360c"></circle>
                  <path
                    fill="#212121"
                    d="M21,30c0,0-0.875-1-6.125-1L13,29l0-2c0,0,2.5,0,3,0C20,27,21,30,21,30z"
                  ></path>
                  <polygon
                    fill="#2c2c2c"
                    points="12,24 20,27 22,27 17,24"
                  ></polygon>
                  <g>
                    <path
                      fill="#ffbca7"
                      d="M26,27c0,0-1,1-1,2c0,2,7,9,7,9s-5-8-5-9s1-2,1-2H26z"
                    ></path>
                    <path
                      fill="#ffbca7"
                      d="M22,27c0,0,1,1,1,2c0,2-7,9-7,9s5-8,5-9s-1-2-1-2H22z"
                    ></path>
                    <rect
                      width="6"
                      height="2"
                      x="21"
                      y="41"
                      fill="#ffbca7"
                    ></rect>
                    <path
                      fill="#ffbca7"
                      d="M22,37h4c0,0-1,2-2,2S22,37,22,37z"
                    ></path>
                    <path
                      fill="#ffbca7"
                      d="M23,33v-4l-2,1C21,30,22,30.5,23,33z"
                    ></path>
                  </g>
                  <g>
                    <rect
                      width="26"
                      height="12"
                      x="11"
                      y="13"
                      fill="#6c6c76"
                    ></rect>
                    <rect
                      width="26"
                      height="8"
                      x="11"
                      y="15"
                      fill="#b2b2bc"
                    ></rect>
                    <path
                      fill="#6c6c76"
                      d="M28.229,16.021c-0.195-0.195-0.512-0.195-0.707,0l-0.806,0.806C26.245,16.487,25.373,16,24.25,16 c-1.775,0-3.164,1.305-3.236,2.992l-0.974,2.314c-0.065,0.154-0.048,0.331,0.044,0.47C20.176,21.916,20.333,22,20.5,22h3.375 C24.696,22,26,21.423,26,19.875C26,18.789,25.369,18,24.5,18c-1.035,0-1.431,0.853-1.495,1.304 c-0.039,0.273,0.151,0.527,0.425,0.566c0.264,0.038,0.525-0.151,0.565-0.424C24.002,19.4,24.071,19,24.5,19 c0.328,0,0.5,0.44,0.5,0.875C25,20.969,23.887,21,23.875,21C22.719,21,22,20.282,22,19.125C22,18.081,22.842,17,24.25,17 c1.263,0,2.14,0.847,2.146,0.854c0.195,0.195,0.512,0.195,0.707,0l1.125-1.125C28.424,16.533,28.424,16.217,28.229,16.021z"
                    ></path>
                    <rect
                      width="26"
                      height="2"
                      x="11"
                      y="18"
                      fill="#6c6c76"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      width="2"
                      height="20"
                      x="12"
                      y="13"
                      fill="#313131"
                    ></rect>
                    <rect
                      width="2"
                      height="20"
                      x="34"
                      y="13"
                      fill="#313131"
                    ></rect>
                    <rect
                      width="2"
                      height="2"
                      x="16"
                      y="13"
                      fill="#2c2c2c"
                    ></rect>
                    <rect
                      width="2"
                      height="2"
                      x="30"
                      y="13"
                      fill="#2c2c2c"
                    ></rect>
                    <path
                      fill="#424242"
                      d="M38.5,8.125C35.329,4.161,29.375,2,28,2c-2,0-2.745,1-4,1s-2-1-4-1c-1.375,0-7.329,2.161-10.5,6.125 C7.5,10.625,6,17.078,6,22c0,7.147,1,18,1,18l1-8c0,0,0,2.625,1,7c0-3,1-9,1-9s0,8,2,13c0-8.5,2-25,2-25c1,5,2,7,2,7s0-10,1-12 c0,0,0,15,2,19c0-14,1-22,1-22s2,0,4,3c2-3,4-3,4-3s1,15,1,26c2-4,2-23,2-23c1,5,1,12,1,12s1-1,2-7c0,0,2,5,2,18c2-5,2-8,2-8 s0,9,0,17c2-5,2-13,2-13l1,8c0,0,1-8,1-18C42,17.078,40.5,10.625,38.5,8.125z"
                    ></path>
                  </g>
                </svg>
              </div>
              <h1>Anime</h1>
              <p>
                I spend most of my free time to watching anime, and i do love watching anime, it teach me lot of thing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
