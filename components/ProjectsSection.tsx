import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Crypto Legions",
    description:
      "Crypto Legions is a cutting edge Play-To-Earn NFT game on the BSC network. Bloodstone is the native utility token that's used for: Minting in-game NFTs. I was on charge of frontend development and smart contract",
    image: "/projects/1.jpg",
    link: "https://cryptolegions.app/",
    skills: ['Solidity', 'React / Next.js','Material UI']
  },
  {
    name: "GODz of Solaria",
    description:
      "The world's first DAO operated NFT Incubator, launchpad and game platform. I was on charge of frontend development of mint and sacrifice pages, also smart contract and backend development for sacrifice",
    image: "/projects/2.png",
    link: "https://cryptolegions.app/",
    skills: ['Solana', 'Next.js','Tailwind CSS', 'Node.js']
  },
  {
    name: "Neon Sabers",
    description:
      "Neon Sabers is one stop shop for highly premium and durable Neon Lightsabers.Our lightsabers are highly customizable, you can choose the color of Hilt, type of blade and attach accessories of your choice.",
    image: "/projects/3.png",
    link: "https://neonsabers.com/",
    skills: ['React / Next.js','Tailwind CSS']
  },
  {
    name: "MailMerge365",
    description:
      "A Microsoft 365 plugin and SaaS to enable the sending of mass personalized email using your existing Microsoft tenant mailbox. Frontend developer role.",
    image: "/projects/13.png",
    link: "http://www.mailmerge365.com",
    skills: ['WordPress', 'Magento', 'PHP']
  },
  {
    name: "Unjabbed Dating",
    description:
      "Unjabbed is a unique dating app exclusively for those who have chosen not to receive the COVID-19 vaccine. I was the only developer for this project.",
    image: "/projects/5.png",
    link: "https://unjabbed.app/web-app/",
    skills: ['Flutter','Firebase']
  },
  {
    name: "Astronaud",
    description:
      "Astronaud helps YouTube Networks, YouTube Channels, Artists, Musicians and many others. I was in charge of UI/UX design and development.",
    image: "/projects/8.png",
    link: "https://astronaud.com/",
    skills: ['Next.js','Material UI']
  },
  {
    name: "Degen Taxi",
    description:
      "Crash game based on Solana. The animation creation using Unity, frontend development, design of game engine was my responsibility. Blockchain Full Stack Developer role.",
    image: "/projects/7.png",
    link: "https://degentaxi.io/",
    skills: ['Rust', 'React.js','Unity']
  },
  {
    name: "College Pro Students",
    description:
      "Core College Pro skills that you will learn include effective time management, team leadership, conflict resolution, and relational selling.",
    image: "/projects/9.png",
    link: "https://student.collegepro.com/",
    skills: ['React.js','Tailwind CSS', 'Express.js']
  },
  {
    name: "JPG Print",
    description:
      "JpgCustom Printing is a company of creative designers and artists who turn your dream design into a perfect piece of art. Full stack developer role.",
    image: "/projects/10.png",
    link: "https://jpgcustomtshirtprinting.com/",
    skills: ['React.js','Tailwind CSS', 'Express.js']
  },
  {
    name: "Moduluc",
    description:
      "Foundations to build a Metaverse. Frontend development.",
    image: "/projects/4.png",
    link: "https://moduluc.com/",
    skills: ['Next.js','Tailwind CSS', 'Web3.js']
  },
  {
    name: "QUIZ clothing",
    description:
      "Gorgeous women clothes site. ",
    image: "/projects/11.png",
    link: "https://www.quizclothing.co.uk",
    skills: ['Shopify', 'PHP']
  },
  {
    name: "Exploring Morocco Travel",
    description:
      "Morocco Travel Booking Site",
    image: "/projects/12.png",
    link: "https://www.exploringmoroccotravel.com/",
    skills: ['WordPress', 'Magento', 'PHP']
  },
  {
    name: "Kubota Global Site",
    description:
      "As a comprehensive solutions provider for agriculture, Kubota offers total support at every stage of farming, from developing agricultural machinery.",
    image: "/projects/14.png",
    link: "https://www.kubota.com/",
    skills: ['Three.js', 'Vue.js']
  },
  {
    name: "Austin Williams",
    description:
      "Austin Williams creates ideas that inspire action. Based on Long Island, New York, we make marketing and advertising work for your business.",
    image: "/projects/15.png",
    link: "https://www.austinwilliams.com/",
    skills: ['Shopify', 'PHP']
  },
  {
    name: "Optiwave",
    description:
      "I developed a public-facing website to list new events coming up, new features being released for their products, support forums, and product manuals.",
    image: "/projects/17.png",
    link: "https://optiwave.com/",
    skills: ['Next.js', 'Node.js', 'MongoDB']
  },
  {
    name: "Ophemy",
    description:
      "Ophemy is an event management app. It provides a number of a variety of planning tools, including staffing, catering, staging, projection, calculators.",
    image: "/projects/16.png",
    link: "https://www.ophemy.com/",
    skills: ['Next.js', 'CSS', 'Python']
  },
  {
    name: "TCB Pay",
    description:
      "TCB Pay delivers payment solutions that utilize the latest technologies to offer a convenient & secure payment solutions to the businesses. Payment Integration.",
    image: "/projects/18.jpg",
    link: "https://www.tcbpay.com",
    skills: ['Stripe', 'Paypal', 'Payoneer']
  },
  {
    name: "Recapsy",
    description:
      "A React-based report builder for trainers, adult educators, and workshops. It includes PDF report generation, custom client report websites, embedding of reports in third-party sites.",
    image: "/projects/19.png",
    link: "https://www.recapsy.com",
    skills: ['React', 'Node.js', 'AWS']
  },
  {
    name: "Solanashuffle - Immortals",
    description:
      "Web3 Casino Game. It has Jackpot, Tower, Coin-Flip games. Game Developer | Fullstack developer",
    image: "/projects/20.png",
    link: "https://www.solanashuffle.com/",
    skills: ['React', 'Go', 'Web3']
  },
  {
    name: "Recapsy",
    description:
      "Follow Michael and Steve on Instagram, Twitter and Facebook: · Listen to music from Michael's band",
    image: "/projects/21.jpg",
    link: "https://www.talkingsopranos.com/",
    skills: ['React', 'Lambda', 'AWS']
  },
  {
    name: "Richmond",
    description:
      "Richmond Station is a stopping place. A bustling neighbourhood restaurant in the downtown core.",
    image: "/projects/22.png",
    link: "https://richmondstation.ca/",
    skills: ['WordPress', 'PHP']
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#5d247c49] rounded-b-2xl mb-10 p-6 pb-8">
      <h1 className="text-6xl font-header text-white hover:text-6xl text-center font-semibold pb-[100px]">
        Projects
      </h1>

      <div className="wrapper-project">
        {projects.map((project, idx) => {
          return (
            <div className="card-project" key={idx}>
              <div className="poster font-header">
                <Image src={project.image} alt="Location Unknown" width={325} height={450} className='img-project'/>
                <div className="details">
                  <h1>{project.name}</h1>
                  <a href={project.link} className='font-semibold mb-1'>{project.link}</a>
                  <div className="tags">
                    {
                      project.skills.map((skill, index) => (
                        <span className="tag" key={index}>{skill}</span>
                      ))
                    }
                  </div>
                  <p className="desc">
                    {project.description}
                  </p>
                  {/* <div className="cast">
                  <h3>Cast</h3>
                  <ul>
                    <li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews"></li>
                    <li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd"></li>
                    <li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" title="Antonio Herrera"></li>
                  </ul>
                </div> */}
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection
