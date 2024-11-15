import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Project = () => {
  return (
    <div id="Project">
        < section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>

    </div>
    <div className="flex flex-wrap -m-4">
        {/* Project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/logo/ATM machine.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text- blue -500 mb-1">
              ATM Machine Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ATM Machine
            </h1>
            <p className="leading-relaxed">
              This is a project which I've created for those who owne a 
              ATM Machine.
            </p>
            <Link target="blank" href={"https://ATM-Machine.dun.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project

              </p>
              </Link>
          </div>
          </div>
          
          </div>
           {/* Project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/logo/Gussing  Game.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text- blue -500 mb-1">
              Gussing Game Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Gussing Game
            </h1>
            <p className="leading-relaxed">
              This is a project which I've created for those who owne a 
              Gussing Game.
            </p>
            <Link target="blank" href={"https://Gussing-Game.dun.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project

              </p>
              </Link>
          </div>
          </div>
          </div>
          {/* Project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/logo/Simple calculator.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text- blue -500 mb-1">
              Simple Calculator Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Simple Culculator 
            </h1>
            <p className="leading-relaxed">
              This is a project which I've created for those who owne a 
              simple calculator.
            </p>
            <Link target="blank" href={"https://Simple-Calculator.dun.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project

              </p>
              </Link>
          </div>
          </div>
          </div>
          {/* Project */}
      <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/logo/To Do List.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text- blue -500 mb-1">
              To Do List Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              To Do List
            </h1>
            <p className="leading-relaxed">
              This is a project which I've created for those who owne a 
              To Do List.
            </p>
            <Link target="blank" href={"https://To-Do-List.dun.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project

              </p>
              </Link>
          
          
          </div>
          </div>
          </div>
          {/* Project */}
      <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/logo/Currency Converter.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text- blue -500 mb-1">
            Currency Converter Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Currency Converter
            </h1>
            <p className="leading-relaxed">
              This is a project which I've created for those who owne a 
              Currency Converter.
            </p>
            <Link target="blank" href={"https://Currency-Converter.dun.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project

              </p>
              </Link>
          
          </div>
          </div>
          </div>
          </div>
          </div>
        </section>
        </div>
    
    
    
  );
};

export default Project;