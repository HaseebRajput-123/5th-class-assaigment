import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-blue-50'>
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Image 
      src={require("../../../public/assets/picture/logo.png.jpg")}
       alt="" 
       width={50} 
       height={50}
       className="W-[40px]" />

            
          <span className="ml-3 text-xl">Haseeb Rajput</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Haseeb RajPut —
          
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-blue-500">
            <Link
            target='blank' 
            href={"https://www.linkedin.com/in/haseeb-rajput-9794462b7"}
            className='text-gray-500'
            >
            
            <FaLinkedin className='text-3xl hover:text-[#0e76a8]'/>
            </Link>
            </a>
        </span>
      </div>
    </footer>
  
    </div>
  )
}

export default Footer