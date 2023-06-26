'use client';

import React from 'react'
import { Timeline, TimelineEvent } from './TimeLine'

const WorkExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://maddogcarclub.io/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease font-header'>Mad Dog Car Club</a> |  10/2022 - 04/2023</TimelineEvent.Title>

        <TimelineEvent.Description>
          <span className='font-header font-semibold text-[#32e0ff]'>Senior Blockchain Front End Developer & Hosting Engineer (Remote, Contract)</span><br />
          -Developed the front end of 3 projects using React, SASS, Bootstrap, Tailwind, MaterialUI, TypeScript, Next.js, React Hooks, Context API, and Styled-components <br />
          -Integrated web3 parts into Ethereum, Solana and Cardano projects using web3.js and
          ethers.js<br />
          -Resolved image optimization and utilized a cookie parser to improve the performance of
          page loading by 240%<br />
          -Transformed the user experience by incorporating lazy loading via a streamlined and
          effective paginated API<br />
          -Resulted in a 60% improvement in page loading speed and substantial decrease in
          bounce rates<br />
          -Collaborated closely with the designer and backend developer, maintaining good
          teamwork through communication channels such as Slack, Trello, and weekly scrum
          meetings<br />
          -Hosted 4 projects to live domain
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title><a href='https://www.autoscribe.com/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease font-header'>AutoScribe</a> | 03/2022 - 10/2022</TimelineEvent.Title>

        <TimelineEvent.Description>
          <span className='font-header font-semibold text-[#32e0ff]'>React Full Stack Developer (Remote, Contract)</span><br />
          -Oversaw the entire development process from start to finish using React, Django, AWS
          for 2 months<br />
          -Crafted and executed an MFA user authentication system that uplifted security by 50%,
          flawlessly integrated payment processing, resulting in a revenue jump of 30%, and
          pioneered AI audio processing<br />
          -2 Mobile app development using React Native, Expo UI, Laravel, Node.js, Firebase,
          Supabase<br />
          -To ensure scalability, used a cloud-based hosting solution and implemented load
          balancing to distribute traffic across multiple servers<br />
          -Optimized the website&#39;s performance by implementing caching, minimizing page load
          times, and optimizing images and other media files<br />
          -Revamped website traffic and user experience by 37%
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title><a href='https://www.bitfinex.com/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease font-header'>Bitfinex</a> | 03/2020 - 03/2022</TimelineEvent.Title>

        <TimelineEvent.Description>
          <span className='font-header font-semibold text-[#32e0ff]'>Full Stack Blockchain Engineer (Remote, Full-time)</span><br />
          -Created and optimized components using React and Next.js. Cut development speed by 9%<br />
          -Drove best practice implementation for 22 employees across multiple departments<br />
          -Decreased rework by 23% and costs by 15%<br />
          -Introduced effective database caching schema. Improved database access rate by 17%<br />
          -Structured REST-based web services and serverless backend. Increased the user
          interaction by 30%<br />
          -Enhanced the Software Quality 15% by fixing the 150 bugs using Express, Django,
          Laravel, AWS, Docker, Java, C#, .NET<br />
          -Developed and launched 2 DeFi projects using HTML, CSS, JavaScript, React.js, Node.js,
          web3.js and Smart contracts
        </TimelineEvent.Description>

      </TimelineEvent>
      <TimelineEvent>

        <TimelineEvent.Title><a href='https://www.dejero.com/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease font-header'>Dejero Labs</a> | 12/2017 - 02/2020</TimelineEvent.Title>

        <TimelineEvent.Description>
          <span className='font-header font-semibold text-[#32e0ff]'>Full Stack Developer (Hybrid Remote, Full-Time)</span><br />
          -Played a key role in the development, improvement, and operation of 7 web-based
          software using React<br />
          -Gained hands-on expertise in Node, Express, Nest, Django and other back-end
          frameworks as well as front-end frameworks<br />
          -Involved in new mock-ups and UI specifications for holiday events and raised 25% more
          in total sale leads<br />
          -Upgraded an ecommerce web apps to sell products online using Laravel and Wordpress<br />
          -Expanded company revenue by 58%
        </TimelineEvent.Description>

      </TimelineEvent>
      <TimelineEvent last>

        <TimelineEvent.Title><a href='https://www.reddoorz.com/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>RedDoorz</a> | 09/2016 - 10/2017</TimelineEvent.Title>

        <TimelineEvent.Description>
          <span className='font-header text-[#32e0ff]'>React Front End Developer & UI Designer (Onsite, Full-Time)</span><br />
          -Contributed to agile team as a front end developer<br />
          -Designed and deployed a fully responsive web user interface for 5 clients using the
          mobile-first approach<br />
          -Used Bootstrap and Material UI to implement UX/UI designs from PSD and Figma files<br />
          -Accelerated a custom dashboard that reduced support ticket by 50%<br />
          -Learned React, Angular, Typescript. Involved in front-end development using React,
          Redux, Typescript<br />
          -Completed a mentorship course which helped me to accelerate my learning by 2 times<br />
        </TimelineEvent.Description>

      </TimelineEvent>
    </Timeline>
  )
}

export default WorkExp;