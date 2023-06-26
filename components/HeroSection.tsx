"use client" // this is a client component
import React, { useEffect } from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import Skills from "./Skills"

interface Window {
  particlesJS: any;
}

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col flex-shrink-0 text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-32 lg:flex-row lg:space-x-4 lg:text-left relative">
        {/* <canvas id="canvas" width="1400" height="600"></canvas> */}
        <div className="flex flex-col items-center justify-center shrink-0 font-header md:mt-2 md:w-3/5">
          <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl text-center mb-10 pt-5 text-white mx-auto hero-header'>
            Felix Martel
          </h1>
          <div className='flex items-center text-xl md:text-3xl font-semibold mt-4 lg:text-4xl mb-20 loader'>
            <div className='font-semibold'>F</div>
            <div className='font-semibold'>U</div>
            <div className='font-semibold'>L</div>
            <div className='font-semibold'>L</div>
            <div className='font-semibold'>&nbsp;</div>
            <div className='font-semibold'>S</div>
            <div className='font-semibold'>T</div>
            <div className='font-semibold'>A</div>
            <div className='font-semibold'>C</div>
            <div className='font-semibold'>K</div>
            <div className='font-semibold'>&nbsp;</div>
            <div className='font-semibold'>G</div>
            <div className='font-semibold'>U</div>
            <div className='font-semibold'>R</div>
            <div className='font-semibold'>U</div>
          </div>
          <div className="motto-btn font-header hover:scale-105 cursor-cell text-center mb-5">
            <span className="glow"></span>
            <div className="font-header text-xl">
              Do unto others as you would like them to do to you!
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 mt-16 lg:mt-2 md:w-1/2 rounded-2xl card">
          <Image
            src="/avatar.png"
            alt=""
            layout="fill"
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center mb-[100px]">
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} color="#0cbeeb" className="animate-bounce cursor-pointer" />
        </Link>
      </div>
      <Skills />
    </section>
  )
}

export default HeroSection
