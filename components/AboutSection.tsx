"use client"
import React from "react"
import { motion } from 'framer-motion';
import WorkExp from "./WorkExp";

const AboutSection = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }} className="w-full">
      <div className="w-full rounded-t-2xl mt-32 mb-32">
        <section id="about" className="max-w-[1240px] mx-auto flex flex-col md:items-center box-gradient">
          <div className='my-12 pb-2 md:pt-10'>
            <h1 className="text-6xl font-header text-white hover:text-6xl text-center font-semibold pb-12">
              About Me
            </h1>
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left text-[#32e0ff]">
              <div className="p-4 w-full text-justify ">
                <h1 className="text-center text-3xl  font-header font-bold mb-6 glow-glow">
                  <span className="text-[#e90cfd]">React</span> Full Stack Developer
                </h1>
                <h1 className="text-center text-3xl  font-header font-bold mb-6 glow-glow">
                  <span className="text-[#e90cfd]">BlockChain</span> Front End Developer
                </h1>
                <h1 className="text-center text-3xl  font-header font-bold mb-6 glow-glow">
                  <span className="text-[#e90cfd]">CMS</span> Developer
                </h1>
                <h1 className="text-center text-3xl  font-header font-bold mb-6 glow-glow">
                  <span className="text-[#e90cfd]">Figma</span> Designer
                </h1>
                <br />
                <p className="font-semibold text-center text-white font-header text-4xl w-full ">I wake up every day and eat web applications for breakfast and mobile apps for dinner.</p>
                <br />
                <br />
                <div className="flex justify-center">
                  <div className="font-header w-[300px] md:w-[600px] text-lg text-center hover:text-lg ">
                    <div className="motto-btn">
                      <span className="glow"></span>
                      <div className="font-header text-3xl">
                        Do unto others as you would like them to do to you!
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
                <p className="font-header text-4xl ">This is my only <span className="font-semibold uppercase text-[white]">motto</span> and I always treat my clients with <span className="font-semibold uppercase text-[white]">respect</span>, <span className="font-semibold uppercase text-[white]">responsibility</span> and the <span className="font-semibold uppercase text-[white]">best</span> so I am rewarded in the same way. <span className="font-semibold uppercase text-[white]">Long partnership</span> based on mutual <span className="font-semibold uppercase text-[white]">trust & respect</span> is always the most desirable career dream for me. 🙂</p>
              </div>
            </div>
            <WorkExp />
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default AboutSection
