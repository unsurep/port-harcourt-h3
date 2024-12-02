
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";


const Home=()=>{
    return (
        <div>
            <Hero/>
            <Hero2/>
            <Hero3/>
            {/* scroll to the top */}
            <Link href='#top'>
                <div className="w-[10px] rounded-full px-6 py-4 bg-[#3177A3] items-center justify-center ring-8 hover:ring-red-300   flex fixed right-10 bottom-5"><span className="font-bold "><FaArrowUp /></span></div>
            </Link>
            
        </div>
    )

};

export default Home;