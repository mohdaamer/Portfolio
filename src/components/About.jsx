import React from 'react'

const About = () => {
  return (
    <div className='my-3 md:my-6 flex flex-col md:flex-row md:items-center md:gap-12 md:justify-between max-w-[1240px] m-auto md:p-8 p-6'>
      <div className="aboutme md:w-[50%]">
        <h1 className='text-2xl font-semibold md:my-2'>About Me</h1>
        <p>My name is Mohammed Aamer, and I proudly achieved my Bachelor of Technology (B.Tech) degree in Computer Science and Engineering in the year 2023. From the moment I stepped into the world of technology, I was driven by a passion to become a proficient full-stack web developer. Hailing from the vibrant city of Hyderabad, India, I have been fortunate to immerse myself in a rich cultural and technological environment that has continuously fueled my aspirations. As I embark on this exciting journey, I look forward to utilizing my knowledge and skills to contribute meaningfully to the ever-evolving field of web development.</p>
      </div>
      <div className="img bg-red-500 md:w-[50%] h-[300px]">
        image
      </div>
    </div>
  )
}

export default About
