'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import pic from "../image/pic.jpg"
import p2 from "../image/p2.jpg"
import p4 from "../image/p4.jpg"



const Mismanagement=()=>{

    return(
        <div className="px-[1rem] lg:px-[5rem] py-40 ">
            <section>
                <div className="flex items-center justify-center gap-5 pb-12">
                    <h1 className="text-base md:text-base w-full shake rounded-xl font-serif font-extrabold hover:bg-sky-800 hover:text-white inline-block text-black p-5 cursor-pointer shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] text-center ">MISMANAGEMENT <br /> TEAM </h1>
                    <Image src="/image/beericon.png" width={30} height={30} alt="image " className="element cursor-pointer"/> 
                </div>

                <div className="md:flex md:items-center md:justify-between gap-5 ">
                    <div className="">
                        <p><Image src={pic} width={0} height={0} alt="image" className="rounded-[20px] element cursor-pointer"/></p>
                        <div className="text-center text-[14px] md:text-xl font-serif">
                            <p className="font-semibold"> Unsure Player</p>
                            <p> Grand Master of PH H3</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="h-2 w-full bg-neutral-600"></p>
                        </div>
                    </div>

                    <div className="py-8">
                        <p><Image src={p2} width={0} height={0} alt="image" className="rounded-[20px] element cursor-pointer"/></p>
                        <div className="text-center text-[14px] md:text-xl font-serif">
                            <p className="font-semibold"> Always Pumping</p>
                            <p> Religious Adviser of PH H3</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="h-2 w-full bg-gradient-to-r from-emerald-600 to-orange-400"></p>
                        </div>
                    </div>

                    <div>
                        <p><Image src={p4} width={0} height={0} alt="image" className="rounded-[20px] element cursor-pointer"/></p>
                        <div className="text-center text-[14px] md:text-xl font-serif">
                            <p className="font-semibold"> Beer Merchant</p>
                            <p> Beer Mistress of PH H3</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="h-2 w-full bg-purple-400"></p>
                        </div>
                    </div>
                </div>


                



            </section>
        </div>
    )



};

export default Mismanagement;