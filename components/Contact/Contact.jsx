'use client'
import React, { useEffect, useRef } from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import gif from '@/assets/contact.gif'
import {AiFillInstagram , AiFillGithub , AiFillLinkedin} from 'react-icons/ai'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

const Contact = () => {

    const socialHandle = useRef(null)
    const main = useRef(null)
    const email = useRef(null)
    const gifs = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mouse = document.querySelector("#mouse")
        

        const timeline = gsap.timeline({
            scrollTrigger : {
                // markers : true,
                trigger : main.current,
                start : "-50% top",
                end : '-30% top',
                scrub : 3
            }
        })

        const socialHandle_ref = socialHandle.current;
        const socialHandleChild = socialHandle_ref.querySelectorAll('.social')


        socialHandleChild.forEach((element, i) => {
            element.addEventListener("mouseenter" , () => {
                gsap.to(mouse , {
                    width : "80px",
                    height : "80px",
                    duration : 0.4,
                    
                
                })
                mouse.innerHTML = "Take me"
                mouse.style.mixBlendMode = "none"
            })
            element.addEventListener("mouseleave" , () => {
                gsap.to(mouse , {
                    width : "40px",
                    height : "40px",
                    duration : 0.4,
                
                })
                mouse.innerHTML = ""
                mouse.style.mixBlendMode = "none"
            })

            timeline.fromTo(main.current , {opacity : 0} , {
                opacity  : 1,
                duration : 0.2
            } , "flag").fromTo(gifs.current , {
                opacity : 0,
                x : -50
            },
            {
                opacity : 1,
                x : 0
            } , "flag")
            .fromTo(element , {
                opacity : 0,
                x : -50,
                stagger : 1
            },
            {
                opacity : 1,
                x : 0,
                delay : i /10
            })
        })

        timeline.fromTo(email.current , {
            opacity : 0,
            x : -50,
        }, {
            opacity : 1,
            x : 0
        })

        const email_ref = email.current;

        email_ref.addEventListener('mouseenter' , () => {
            gsap.to(mouse , {
                width : "80px",
                height : "80px",
                duration : 0.1
            })
            mouse.innerHTML = "Email Me"
        })

        email_ref.addEventListener('mouseleave' , () => {
            gsap.to(mouse , {
                width : "40px",
                height : "40px",
                duration : 0.1
            })
            mouse.innerHTML = ""
        })
        



    } , [])
  return (
    <div className={styles.main} ref={main}>
        <div className={styles.innerDiv}>
            <div className={styles.gif} ref={gifs}>
                <Image src={gif} alt='Gif image of contact' className='w-auto h-auto' /><div className='text-sm'>
                Illustration by <a href="https://icons8.com/illustrations/author/627444">Julia G</a> from <a href="https://icons8.com/illustrations">Ouch!</a>

                </div>
            </div>
            <h1 className={styles.h1}>Contact</h1>
            <div className={styles.contactHandle}>
                <div className={styles.socialMediaHandle} ref={socialHandle}>
                    <Link href={'https://github.com/Noobie-21'} className={`${styles.socialHandle}   social` } target='_blank' >
                        <AiFillGithub size={40} className='text-purple-300' />
                        <h1>Github</h1>
                    </Link>
                    <Link href={'/'} target='_blank' className={`${styles.socialHandle}    social` }>
                        <AiFillInstagram size={40} className='text-purple-300' />
                        <h1>INSTAGRAM</h1>
                    </Link>
                    <Link href={'/'} target='_blank' className={`${styles.socialHandle}  social` }>
                        <AiFillLinkedin size={40} className='text-purple-300' />
                        <h1>LINKEDIN</h1>
                    </Link>
                </div>

                <div className={styles.email} ref={email}>
                    <h1>EMAIL</h1>
                    <div id='copy'>

                    <Link href={'mailto:amangupta954055@gmail.com'}  id='text'>amangupta954055@gmail.com</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact