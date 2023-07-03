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
  const skillArray = [html, css, typescript, js, react, redux, next, vue, angular, material, bootstrap, tailwind, node, php, c, python, dsa, mongo, mysql, postgre, firebase, github, vscode, web3, ether, amazon, wordpress];
  const skillTextArray = ['Html', 'CSS', 'TypeScript', 'JavaScript', 'React', 'Redux', 'Next.js', 'Vue', 'Angular', 'Material UI', 'Bootstrap', 'Tailwind CSS', 'NodeJS', 'PHP', 'C', 'Python', 'D Structure', 'MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Github', 'Visual Studio', 'Web3', 'Ether', 'Amazon', 'WordPress'];
  return (
    <motion.div initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }} className="w-full" >
      <div className='w-full rounded-t-2xl mt-32 mb-32' id='skills'>
        <div className='max-w-[1240px] mx-auto flex flex-col md:items-center box-gradient'>
          <div className='relative text-6xl font-header font-semibold text-[#ffffff] hover:text-6xl pb-7 md:mb-0 mb-3'>
            <div className='mt-[100px] mb-20'>Best Skill Set</div>
          </div>
          <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-10 mb-20'>
            {
              skillArray.map((skill, index) => (
                <div key={index} className='px-8 py-5 flex items-center justify-center bg-[#312ed663] shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='font-header text-2xl tracking-wider font-semibold text-[#ffffff] hover:text-lg pr-4'>{skillTextArray[index]}</div>
                  <div className={`${skill == web3 ? 'scale-[200%]' : skill == next ? 'scale-150' : ''}`}><Image src={skill} alt='skillImage' width={30} height={30} /></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills