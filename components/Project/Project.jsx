"use client";
import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import details from "@/assets/image.webp";
import event from "@/assets/event.webp";
import portfolio from "@/assets/portfolio.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Project = () => {
  const container = useRef(null);
  const heading = useRef(null);
  const para = useRef(null);

  const app1 = useRef(null);
  const imageRef1 = useRef(null);

  const app2 = useRef(null);
  const imageRef2 = useRef(null);

  const app3 = useRef(null);
  const imageRef3 = useRef(null);

  const projectDetails = [
    {
      serial_number: 1,
      project_name: "Reddit Clone",
      project_image: details,
      projectDetails: `A simple reddit clone with functionality of Authrization , create community , add post , delete post and some more etc.`,
      tech_stack: ["Next js", "Tailwind Css", "firebase", "atom"],
      link: "https://reddit-clone-app-eight.vercel.app/",
      github: "https://github.com/Noobie-21/redditcloneapp",
      ref: app1,
      imageRef: imageRef1,
      style: "flex-row",
    },
    {
      serial_number: 2,
      project_name: "Event Hub",
      project_image: event,
      projectDetails: `A place to find, join, and host events with a clean and easy to use user interface. Loaded with features and filters to find the best meetups you want without wasting time and many more.`,
      tech_stack: ["Next js", "Tailwind Css", "firebase", "atom"],
      link: "https://event-hub-3fv5.vercel.app/",
      github: "https://github.com/Noobie-21/event-hub",
      ref: app2,
      imageRef: imageRef2,
      style: "flex-row-reverse",
    },
    {
      serial_number: 3,
      project_name: "Previous Portfolio",
      project_image: portfolio,
      projectDetails: `A simple and static portfolio website for applying job without any much more details and description`,
      tech_stack: ["Next js", "Tailwind Css", "firebase", "atom"],
      link: "https://aman-gupta.vercel.app/",
      github: "https://github.com/Noobie-21/Aman",
      ref: app3,
      imageRef: imageRef3,
      style: "flex-row",
    },
  ];

  useEffect(() => {
    const body = document.querySelector("body");
    const mouse = document.querySelector("#mouse");

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: container.current,
        start: "-20% top",
        end: "10% top",
        scrub: 3,
      },
    });

    tl.fromTo(
      heading.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
      },
      "flag"
    )
      .fromTo(
        para.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
        },
        "flag"
      )
      .from(container.current, {
        opacity: 0,
      });

    projectDetails.forEach((el) => {
      const elment = el.ref.current;
      const element = el.imageRef.current;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: elment,
          // markers :  true,
          start: "top top",
          scrub: 3,
          pin: true,
        },
      });

      tl.to(elment, {
        opacity: 0,
        duration: 0.4,
        zIndex: -1,
      });

      element.addEventListener("mouseenter", () => {
        gsap.to(mouse, {
          width: "100px",
          height: "100px",
          duration: 0.5,
        });
        mouse.innerHTML = "Click Me";
      });
      element.addEventListener("mouseleave", () => {
        gsap.to(mouse, {
          width: "50px",
          height: "50px",
          duration: 0.5,
        });
        mouse.innerHTML = "";
      });

      // console.log(element)
    });
  }, []);
  return (
    <div className={styles.main} id="project" ref={container}>
      <div className={styles.upperSection}>
        <div className={styles.heading}>
          <h1 ref={heading}>Some Showcase Project</h1>
          <p ref={para} className={styles.h1}>
            Project where i use my knowledge what i learned and try to make
            something.{" "}
          </p>
        </div>

        {projectDetails.map((el) => {
          return (
            <div
              className={` ${styles.projectSection} ${el.style} `}
              key={Math.random() * 100000}
              ref={el.ref}
            >
              <div className={styles.projectDiv}>
                <h1>{el.serial_number}</h1>
                <h1>{el.project_name}</h1>
              </div>
              <div className={styles.projectDiv2}>
                <div className={styles.projectPhoto}>
                  <Link href={el.link} target="_blank">
                    <Image
                      className={styles.image}
                      src={el.project_image}
                      width={400}
                      height={400}
                      alt="image details"
                      ref={el.imageRef}
                    />
                  </Link>
                </div>
                <div className={styles.projectDetails}>
                  <h1>{el.projectDetails}</h1>
                  <div className={styles.icons}>
                    <Link href={el.link} target="_blank">
                      <AiOutlineLink size={24} />
                    </Link>
                    <Link href={el.github} target="_blank">
                      <AiFillGithub size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center items-center mb-[50px] ">
        <h1 className="text-[2rem] "> Next showcase project soon!</h1>
      </div>
    </div>
  );
};

export default Project;
