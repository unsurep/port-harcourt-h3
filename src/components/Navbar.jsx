'use client'

import React from "react"
import Image from "next/image"
import { IoHome } from "react-icons/io5";
import { BiSolidBookReader } from "react-icons/bi";
import { RiSettings2Fill } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { useState,useEffect } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";



const Navbar=()=>{

    const [menu, setMenu]=useState(false);

    const toggleMenu=()=>{
        setMenu(!menu);

    }

    

    return(
        <div className="">
            <nav className="flex justify-between bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-opacity-45 backdrop-blur-xl items-center px-[1rem] lg:px-[5rem] py-[1rem] w-full z-50 fixed ">

                <Link href={'/'}>
                    <div>
                        <Image src="/image/logo.png" width={80} height={80} alt="logo" className=""/>
                    </div>
                </Link>

                {/* other screen responsive */}

                <div className="">        
                    <ul className=" lg:flex lg:items-center hidden lg:text-sm lg:gap-6">

                    <Link href={'/'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl shake cursor-pointer font-medium flex items-center gap-1 "><IoHome/>HOME </li>
                    </Link>

                    <Link href={'/about'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl shake cursor-pointer font-medium flex gap-1 items-center "><BiSolidBookReader/>ABOUT<span className=""></span></li>
                    </Link>


                    <Link href={'/mismanagement'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl shake cursor-pointer font-medium flex items-center gap-1 "><RiSettings2Fill/>MISMA</li>
                    </Link>


                    <Link href={'/photo'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl shake cursor-pointer font-medium flex gap-1 items-center "><FaCamera/>PHOTOS </li>
                    </Link>

                    <Link href={'/guidelines'}>
                        <li className="hover:bg-blue-600 hover:text-white  p-3 rounded-xl shake cursor-pointer font-medium flex items-center gap-1 "><BiSolidBookReader/> GUIDELINES </li>
                    </Link>

                    {/* <Link href={''}>
                        <li className="hover:bg-blue-600 hover:text-white  p-3 rounded-xl shake cursor-pointer font-medium flex items-center gap-1 "><FcCancel /> SUSPENSION </li>
                    </Link> */}
                    </ul>





                </div>
         

                {/* Contact Us button  */}
                <Link href={'/contact'}>
                    <div className=" lg:flex flex-col items-center hidden">
                    <button type="submit" className="relative inline-block md:text-[10px] lg:text-[16px] group mt-5 lg:mt-0 shake">
                  <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-800 group-hover:-rotate-180 ease"></span>
                    <span className="relative">CONTACT US</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                    </button>
                    </div>
                </Link>


                {/* for mobile responsive */}
                <div onClick={toggleMenu} className=" lg:hidden flex items-center  ">

                    {menu===true ? <div className="text-4xl cursor-pointer"><IoMdClose />

                        <div className=" mt-20  absolute left-0 top-[11%] flex pt-5 text-base">        
                    <ul className=" flex flex-col gap-3 text-sm h-screen roll-in-right bg-red-200 w-[100vw]  px-[1rem] py-5">

                    <Link href={'/'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl cursor-pointer font-medium flex items-center gap-1  "><IoHome/>HOME </li>
                    </Link>

                    <Link href={'/about'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl cursor-pointer font-medium flex gap-1 items-center "><BiSolidBookReader/>ABOUT HASH<span className=""></span></li>
                    </Link>


                    <Link href={'/mismanagement'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl cursor-pointer font-medium flex items-center gap-1 "><RiSettings2Fill/>MISMA</li>
                    </Link>


                    <Link href={'/photo'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl cursor-pointer font-medium flex gap-1 items-center "><FaCamera/>PHOTOS </li>
                    </Link>

                    <Link href={'/guidelines'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl cursor-pointer font-medium flex gap-1 items-center "><BiSolidBookReader/> GUIDELINES </li>
                    </Link>

                    <Link href={'/contact'}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl cursor-pointer font-medium flex gap-1 items-center "><BiSolidPhoneCall /> CONTACT US </li>
                    </Link>

                    <Link href={''}>
                        <li className="hover:bg-blue-600 hover:text-white p-3 rounded-xl cursor-pointer font-medium flex items-center gap-1 "><FcCancel /> SUSPENSION </li>
                    </Link>
                    </ul>
                        </div>

                    </div> :   <p className="text-3xl cursor-pointer"><IoMenu /> </p> }
                    
                   
                </div>
            </nav>
        </div>
    )



};

export default Navbar;