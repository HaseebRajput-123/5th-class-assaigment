import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='About'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require("../../../public/assets/logo/pic.png.jpg")}
        width={300}
        height={300}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About me
      </h1>
      <p className="mb-5 leading-relaxed">
       My Phone: 03182029689
      Email: haseebrajput059@gmail.com
      I,am Developer,
      My skills, HTML,CSS,Typescript,Javascript,Node.js,React,Phyton,
      </p>
      <p className="mb-5 leading-relaxed">
      Hello! My name is Haseeb. I have completed my matriculation, and my hard work 
      and dedication were recognized with an incentive from the Governor House Sindh.
      I come from a strong background built on perseverance, and I am passionate about
      learning new skills and achieving my goals.
      </p>
      <div className="flex justify-center">
       
         
        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About