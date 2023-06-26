import React from "react"
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineSkype,
  AiOutlineYoutube,
} from "react-icons/ai"
import { FaDiscord } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className=" w-screen px-4 sm:px-[100px]  border-t-neutral-200 border-t-[2px]  ">
      <hr className="w-full h-0.5 mx-auto  border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 font-header text-white ">
          © 2023 Felix Martel<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 mb-1">
          <a href="https://github.com/NEVO-SAY-NEVO" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-white dark:text-neutral-100"
              size={30}
            />
          </a>
          <a href="https://discord.com/users/1074915427936915458" rel="noreferrer" target="_blank">
            <FaDiscord className="hover:-translate-y-1 transition-transform cursor-pointer text-white dark:text-neutral-100"
              size={30}/>
          </a>
          <a href="https://join.skype.com/invite/sGresLsAZpz1" rel="noreferrer" target="_blank">
            <AiOutlineSkype
              className="hover:-translate-y-1 transition-transform cursor-pointer text-white dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
