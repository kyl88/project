import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {


  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/Logo.jpg"
          alt="/"
          width="125"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="#portfolio">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>
     
          </ul>
          <div  className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default Navbar;
