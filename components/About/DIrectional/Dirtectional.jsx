import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import wall from '../../../assets/frontend.jpg'
import amang from '@/assets/amang.jpg'
import samosa from '@/assets/samosa.jpg'

const Dirtectional = () => {
  const ref = useRef(null);

  const dirt1 = useRef(null);
  const dirt2 = useRef(null);
  const dirt3 = useRef(null);
  const dirt4 = useRef(null);
  const para1 = useRef(null);
  const para2 = useRef(null);
  const para3 = useRef(null);
  const para4 = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const imageContainer = useRef(null);

  const hover = useRef(null)

  const arrays = [
    {
      heading: "Curious",
      heading2: "Frontend developer",
      style: "",
      ref: dirt1,
      x : 500,
      pos : "left-[50px] mix-blend-difference",
      para : "As a developer, i tried to learn other technology but somehow i don't feel like i belong there until i found frontend development, it fond me because to creating something stylish, it makes me drive crazy!",
      img : wall,
      imgRef : img1,
      paraRef : para1
    },
    {
      heading: "18 Year",
      heading2: "Aman Gupta",
      style: "",
      ref: dirt2,
      x : 500,
      pos : "left-[50px] mix-blend-difference",
      para : "I am 19 year old boy who love to code and learning  making website since 11th standard, I complete my 12th standard and looking for new oprtunity where i can climb and fall in love with my carreer, I hope if you accept me then I can become good person, so let's take a chance!!",
      img : amang,
      paraRef : para2,
      imgRef : img2,
    },
    {
      heading: "Love ",
      heading2: "Samosas and Indian Cuisine",
      style: "",
      ref: dirt3,
      x : 500,
      pos : "left-[50px] mix-blend-difference",
      para : "As a indian, I love indian cuisine so much, samosa is in my vain, i ate almost daily and so many other cuisine too.",
      img : samosa,
      paraRef : para3,
      imgRef : img3,
    },
    
  ];

 
  useEffect(() => {
    const main = document.querySelector("#about");
    gsap.registerPlugin(ScrollTrigger);
    const mouse = document.querySelector("#mouse")
    

    arrays.forEach((el , i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          // markers: true,
          trigger: el.ref.current,
          start: "-80% top",
          end : "-60% top",
          scrub: 3,
        },
      });

      tl.from(el.ref.current , {
        opacity : 0,
        stagger : 1
        // textAlign : "center"
      } , "flag").from(el.paraRef.current , {
        opacity : 0,
        // textAlign : "center"
      } , "flag").from(el.imgRef.current , {
        opacity : 0,
        // textAlign : "center"
      } , "flag")

      const docu = el.ref.current;
      

      docu.addEventListener("mouseenter" ,() => {
        gsap.to(el.imgRef.current , {
          width : "70%",
          ease : "Expo.easeInOut",
          stagger : 2
        })
      })
      docu.addEventListener("mouseleave" ,() => {
        gsap.to(el.imgRef.current , {
          width : "0%",
          ease : "Expo.easeInOut",
          stagger : 2
        })
      })
      
    });

  }, []);
  return (
    <div ref={ref} className={styles.container} id="#up">
      {arrays.map((el, i) => {
        return (
          <Banner key={i} >
            
            <div className={` w-full h-full flex justify-center flex-col relative ${el.style}  `}>

            
            <div ref={el.ref} className="pb-10 text-start relative" >
              <h1 className={`${styles.head1} text-[4rem]`}>{el.heading}
              
              </h1>
              <h1 className={`${styles.head1} text-[4rem] leading-4`}>
                {el.heading2}
              </h1>
            </div>
            <p className={styles.para} ref={el.paraRef} >{
              el.para
            }</p>


            <div className={`${styles.center}`} >
            <div className={`${styles.imageContainer}`} ref={el.imgRef}>
              <Image src={el.img}   className="object-cover bg-bottom  h-full w-full"/>
              <div className={styles.overlay}></div>
            </div>
            </div>
            </div>
          </Banner>
        );
      })}
     
    </div>
  );
};

export default Dirtectional;

export const Banner = ({ children }) => {
  return (
    <div className={`w-[100%] h-full  flex justify-center  flex-col mt-[15px]  relative ${styles.hovering}    `}>
      {children}
    </div>
  );
};
