"use client"
import React from "react"
import Image from "next/image"
import { motion } from 'framer-motion';
import WorkExp from "./WorkExp";

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#5d247c49] p-6">
      <motion.div initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }} className='my-12 pb-2 md:pt-10'>
          <h1 className="text-6xl font-header text-white hover:text-6xl text-center font-semibold pb-12">
            About Me
          </h1>
          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left text-[#32e0ff]">
            <div className="p-4 w-full text-justify ">
              <h1 className="text-center text-3xl  font-header font-bold mb-6 md:text-left">
                React Full Stack Developer
              </h1>
              <p className="font-body text-lg ">
                Hello! This is Felix Martel who is accustomed to fulfill my duty and being conscientious.<br />
              </p>
              <p className="font-body text-lg ">
                I graduated from <span className="font-semibold uppercase text-[#ced9fcf5]">Bandung Institute of Technology, Indoensia </span> in <span className="font-semibold uppercase text-[#ced9fcf5]">2016</span>
                &nbsp;with a <span className="font-semibold uppercase text-[#ced9fcf5]">Bachelor&#39;s degree in Informatics Engineering</span>&nbsp; and have been working in the
                field ever since.
              </p>
              <br />
              <p className="font-body text-lg ">
                I am a highly skilled individual with a passion for technology and solving complex problems. Over the past <span className="font-bold uppercase text-[#ced9fcf5]">7+</span>&nbsp;years, I have honed my skills as a full-stack developer, specializing in creating <span className="font-semibold uppercase text-[#ced9fcf5]">visually appealing</span>&nbsp;and <span className="font-semibold uppercase text-[#ced9fcf5]">responsive</span>&nbsp; websites that provide a great <span className="font-semibold uppercase text-[#ced9fcf5]">user experience</span>&nbsp;and awesome <span className="font-semibold uppercase text-[#ced9fcf5]">function</span>.
                <br />
                In addition to my experience in web development, I am also well-versed in the world of blockchain technology. Over the past <span className="font-bold uppercase text-[#ced9fcf5]">3+</span>&nbsp;years, I have developed several decentralized applications using various blockchain technologies such as <span className="font-semibold uppercase text-[#ced9fcf5]">Ethereum, Solana, Solidity, Rust</span>&nbsp;and <span className="font-semibold uppercase text-[#ced9fcf5]">IPFS</span>.
                <br />
                <br />
                <span className="font-semibold uppercase">In short words, I wake up every day and eat web applications for breakfast and mobile apps for dinner.</span>
                <br />
                <br />
                With my strong attention to detail, excellent problem-solving skills, and ability to work effectively in a team, I am confident in my ability to deliver high-quality work on time and within budget.
              </p>
              <br />
              <br />
              <div className="font-body w-[300px] md:w-[600px] text-lg text-center hover:text-lg  hover:">
                <div className="motto-btn">
                  <span className="glow"></span>
                  <div className="font-header text-xl">
                    Do unto others as you would like them to do to you!
                  </div>
                </div>
                <br />
                <br />
              </div>
              <p className="font-body text-lg ">This is my only <span className="font-semibold uppercase text-[#ced9fcf5]">motto</span> and I always treat my clients with <span className="font-semibold uppercase text-[#ced9fcf5]">respect</span>, <span className="font-semibold uppercase text-[#ced9fcf5]">responsibility</span> and the <span className="font-semibold uppercase text-[#ced9fcf5]">best</span> so I am rewarded in the same way. <span className="font-semibold uppercase text-[#ced9fcf5]">Long partnership</span> based on mutual <span className="font-semibold uppercase text-[#ced9fcf5]">trust & respect</span> is always the most desirable career dream for me. 🙂</p>
            </div>
          </div>
          <WorkExp />
      </motion.div>

    </section>
  )
}

export default AboutSection
