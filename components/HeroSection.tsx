"use client" // this is a client component
import React, { useEffect } from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import Skills from "./Skills"
import styles from './hero.module.scss';
interface Window {
  particlesJS: any;
}

const HeroSection = () => {
  return (
    <section id="home">
      <div className=" flex flex-col flex-shrink-0 text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-32 lg:flex-row lg:space-x-4 lg:text-left relative">
        {/* <canvas id="canvas" width="1400" height="600"></canvas> */}
        <div className={`${styles.tri} opacity-90`}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles.side}>
              {[...Array(30)].map((_, innerIndex) => (
                <div key={innerIndex} className={styles.ring}></div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center shrink-0 font-header md:pt-20 md:w-3/5">
          <div className='font-bold text-4xl md:text-6xl lg:text-8xl text-center mb-10 pt-5 text-white mx-auto hero-header'>
            <p className="glow-glow ">Felix Martel</p>
          </div>
          <div className='flex items-center text-xl md:text-3xl mt-4 lg:text-5xl mb-20 loader'>
            <div className='font-bold'>F</div>
            <div className='font-bold'>U</div>
            <div className='font-bold'>L</div>
            <div className='font-bold'>L</div>
            <div className='font-bold'>&nbsp;</div>
            <div className='font-bold'>S</div>
            <div className='font-bold'>T</div>
            <div className='font-bold'>A</div>
            <div className='font-bold'>C</div>
            <div className='font-bold'>K</div>
            <div className='font-bold'>&nbsp;</div>
            <div className='font-bold'>G</div>
            <div className='font-bold'>U</div>
            <div className='font-bold'>R</div>
            <div className='font-bold'>U</div>
          </div>
          <div className="motto-btn font-header hover:scale-105 cursor-cell text-center mb-5">
            <span className="glow"></span>
            <div className="font-header text-3xl">
              Do unto others as you would like them to do to you!
            </div>
          </div>
        </div>
        <div className={`${styles.tri} opacity-80`}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles.side}>
              {[...Array(30)].map((_, innerIndex) => (
                <div key={innerIndex} className={styles.ring}></div>
              ))}
            </div>
          ))}
        </div>
        {/* <div className="flex flex-shrink-0 mt-16 lg:mt-2 md:w-1/2 rounded-2xl card">
          <Image
            src="/avatar.png"
            alt=""
            layout="fill"
            className="rounded-2xl"
          />
        </div> */}
      </div>
      <Skills />
    </section>
  )
}

export default HeroSection
