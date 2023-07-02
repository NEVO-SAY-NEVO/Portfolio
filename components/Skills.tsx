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
import amazon from '../public/assets/new/amazon.png'
import angular from '../public/assets/new/angular.png'
import c from '../public/assets/new/c.png'
import ether from '../public/assets/new/ether.png'
import mongo from '../public/assets/new/mongo.png'
import mysql from '../public/assets/new/mysql.png'
import node from '../public/assets/new/node.png'
import php from '../public/assets/new/php.png'
import postgre from '../public/assets/new/postgresql.png'
import python from '../public/assets/new/python.png'
import vue from '../public/assets/new/vue.png'
import wordpress from '../public/assets/new/wordpress.png'


import { motion } from 'framer-motion';

const Skills = () => {
  const skillArray = [html, css, js, typescript, react, redux, next, vue, angular, material, bootstrap, tailwind, node, php, c, python, dsa,  mongo, mysql, postgre, firebase, github, vscode, web3, ether, wordpress];
  const skillTextArray = ['Html', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Next.js', 'Vue', 'Angular',  'Material UI', 'Bootstrap', 'Tailwind CSS', 'NodeJS', 'PHP', 'C', 'Python', 'Data Structure', 'MongoDB', 'MySQL', 'PostgreSQL','Firebase', 'Github', 'Visual Studio', 'Web3', 'Ether', 'WordPress'];
  return (
    <div className='w-full lg:h-screen bg-[#5d247c49] rounded-t-2xl p-6 mt-32' id='skills'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center md:items-center h-full'>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }} className='relative text-6xl font-header font-semibold text-[#ffffff] lg:bottom-[70px] hover:text-6xl pb-7 md:mb-0 mb-3'>
          <div className='mt-[100px] lg:mt-[450px]'>Best Skill Set</div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }} className='grid md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {
            skillArray.map((skill, index) => (
              <div key={index} className='px-8 py-5 flex items-center justify-center bg-[#312ed663] shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='font-header text-2xl tracking-wider font-semibold text-[#ffffff] hover:text-lg pr-4'>{skillTextArray[index]}</div>
                <div className={`${skill == web3 ? 'scale-[200%]' : skill == next ? 'scale-150' : ''}`}><Image src={skill} alt='skillImage' width={30} height={30} /></div>
              </div>
            ))
          }
        </motion.div>
      </div>
    </div>
  )
}

export default Skills