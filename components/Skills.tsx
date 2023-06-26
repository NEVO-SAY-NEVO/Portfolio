import React from 'react'
import Image from 'next/image'
import html from '../public/assets/html.png'
import css from '../public/assets/css3.png'
import js from '../public/assets/javascript.png'
import react from '../public/assets/react.png'
import redux from '../public/assets/redux.png'
import typescript from '../public/assets/typescript.png'
import firebase from '../public/assets/firebase.png'
import next from '../public/assets/nextjs.png'
import bootstrap from '../public/assets/bootstrap.png'
import tailwind from '../public/assets/tailwind.png'
import github from '../public/assets/github.png'
import vscode from '../public/assets/vscode.png'
import material from '../public/assets/material.png'
import dsa from '../public/assets/data-structure.png'
import web3 from '../public/assets/Web3.png'
import { motion } from 'framer-motion';

const Skills = () => {
  const skillArray = [react, redux, typescript, web3, firebase, next, html, css, js, material, bootstrap, tailwind, dsa, github, vscode];
  const skillTextArray = ['React', 'Redux', 'TypeScript', 'Web3', 'Firebase', 'Next.js', 'Html', 'CSS', 'JavaScript', 'Material UI', 'Bootstrap', 'Tailwind CSS', 'Data Structure', 'Github', 'Visual Studio'];
  return (
    <div className='w-full lg:h-screen bg-[#5d247c49] rounded-t-2xl p-6 mt-8' id='skills'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center md:items-center h-full'>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }} className='relative text-6xl font-header font-semibold text-[#ffffff] lg:bottom-[70px] hover:text-6xl pb-7 md:mb-0 mb-3'>
          <div className='mt-[100px]'>Best Skill Set</div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }} className='grid md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {
            skillArray.map((skill, index) => (
              <div key={index} className='px-8 py-5 flex items-center justify-center bg-[#312ed663] shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='font-header text-lg font-semibold text-[#ffffff] hover:text-lg pr-4'>{skillTextArray[index]}</div>
                <div className={`${skill == web3 ? 'scale-[200%]' : skill == next ? 'scale-150' : ''}`}><Image src={skill} alt='skillImage' width={35} height={35} /></div>
              </div>
            ))
          }
        </motion.div>
      </div>
    </div>
  )
}

export default Skills