'use client'
import Link from 'next/link'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import aman from '@/assets/aman2.jpg'
import gsap from 'gsap'
import { useRouter } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '@/assets/noob-logo.png'
import {AiFillGithub , AiFillInstagram , AiFillLinkedin} from 'react-icons/ai'

const Banner = ({mouse}) => {

  const nameHover = useRef(null)
  const main = useRef(null)
  const imageRef = useRef(null)
  const helloRef = useRef(null)
  const helloRef2 = useRef(null)

  const [timeline , setTimeline] = useState(null)
  const router = useRouter()

  const gsapEffect = (tl) => {
    
    tl.to(imageRef.current , {
      y : 60,
      duration:1,
      opacity : 0
    } , "hero").to(helloRef.current , {
      x : 50,
      duration : 1,
      opacity : 0
      
    } , "hero").to(helloRef2.current , {
      x : 50,
      duration : 1,
      opacity : 0
      
    } , "hero")
  }
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger : {
        trigger : main.current,
        scroller : document.documentElement,
        start : "top top",
        scrub : 1,
      },  
    })

    gsapEffect(tl)

    const tl2 = gsap.timeline({
      paused : true,
      onComplete : () => router.push('/contact')  
    })

    setTimeline(tl2)
  } , [])


  return (
    <div ref={main} className='relative w-full h-full'>
        <div id='navbar' className={styles.navbar}>
          <Image src={logo} width={40} height={40} className={styles.logo} />
          <div className={styles.nav_center}>
            <Link href={'https://github.com/Noobie-21'} >

            <AiFillGithub size={24} />
            </Link>
            <Link href={'https://www.instagram.com/_.noobie__/'}>

            <AiFillInstagram size={24} />
            </Link>
            <Link href={'/'}>

            <AiFillLinkedin size={24} />
            </Link>
          </div>
          <div id="nav-right" className={styles.navright}>
            <Link href="#project" id='project_link' className={styles.anchor}>Project</Link>
            <Link  href="#about" id='about_link' className={styles.anchor}>About</Link>
            <Link href={'#contact'} id='contact-link'  className={styles.anchor}>Contact</Link>
          </div>
        </div>
        <div className={styles.intro}>
          <h1 className={`${styles.name} cursor-pointer`} data-text="Hello" id={styles.hello} ref={helloRef} > 
              Hello, I am            
          </h1>
          {/* <h1 className={styles.name}  >I am </h1> */}
          <h1 data-text="AmanGupta" className={`${styles.aman}`} ref={nameHover}>AmanGupta</h1>
          <h1 ref={helloRef2}  className={`${styles.name}`} >Frontend Developer</h1>
        </div>

        <div className={styles.image} ref={imageRef}  >
          <Image priority="true"   className={styles.amanImage} src={aman} height={"auto"} width={
            'auto'
          } alt='Profile pic of sexy man name is Aman Gupta'  />
          
        </div>
    </div>
  )
}

export default Banner