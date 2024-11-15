import logo from "../../../assets/picture/logo.png";
import Module from 'module';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai';

const Navber = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image 
      src={require("../../../public/assets/picture/logo.png.jpg")}
       alt="" 
       width={50} 
       height={50}
       className="W-[40px]" />

        
        <span className="ml-3 text-xl">Haseeb Rajput</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        < Link href={"/"} className="mr-5 hover:text-blue-600">
        Home
        </Link>
        <Link href={"#About"} className="mr-5 hover:text-blue-600">
        About
        </Link>
        <Link href={"#Skills"}className="mr-5 hover:text-blue-600">
        Skills
        </Link>
        <Link href={"#Project"}className="mr-5 hover:text-blue-600">
        Project
        </Link>
        <Link href={"#Contact"}className="mr-5 hover:text-blue-600">
         contact
         </Link>
      
      </nav>
      

      
    </div>
  </header>
  </div>
  )
};
 
export default Navber