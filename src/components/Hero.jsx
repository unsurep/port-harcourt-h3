'use client'


import React from "react"
import Image from "next/image";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';

import swiper1 from "../image/swiper1.jpg"
import swiper2 from "../image/swiper2.jpg"
import swiper3 from "../image/swiper3.jpg"
import swiper4 from "../image/swiper4.jpg"
import swiper5 from "../image/swiper5.jpg"
import swiper6 from "../image/swiper6.jpg"
import swiper7 from "../image/swiper7.jpg"
import swiper8 from "../image/swiper8.jpg"
import swiper9 from "../image/swiper9.jpg"
import swiper10 from "../image/swiper10.jpg"
import swiper11 from "../image/swiper11.jpg"
import swiper13 from "../image/swiper13.jpg"
import swiper14 from "../image/swiper14.jpg"
import swiper15 from "../image/swiper15.jpg"
import swiper16 from "../image/swiper16.jpg"
import swiper17 from "../image/swiper17.jpg"
import swiper18 from "../image/swiper18.jpg"
import swiper19 from "../image/swiper19.jpg"
import swiper20 from "../image/swiper20.jpg"
import swiper21 from "../image/swiper21.jpg"
import swiper22 from "../image/swiper22.jpg"
import swiper23 from "../image/swiper23.jpg"






const Hero=()=>{

    return(
        <>
            <section className="pt-32 md:pt-40 px-[1rem] lg:px-[5rem]">
               <div className="flex relative ">
                    <div className="flex flex-col gap-2">
                        <p className=" text-xl md:text-2xl font-serif font-extrabold text-black">Port Harcourt</p>
                        <p className=" text-xl md:text-2xl font-serif font-extrabold text-black"> Hash House Harriers.</p>
                        <p className="text-[14px] md:text-xl  font-serif  text-black  ">Welcome to the vibrant world of Hashers, <br /> a running club with a drinking problem or <br /> a drinking club with a running problem.</p>
                    </div>


                    <div className="hidden lg:flex ">
                       <Image src="/image/trail.png" width={500} height={500} alt="image" />
                    </div>
               </div>

                <p className=" hidden md:flex absolute top-[21rem] left-[22.5rem] bounce-in-top"><Image src="/image/shoe.png" width={100} height={100} alt="image"/></p> 
                <p className=" hidden md:flex absolute top-[8rem] right-[30rem] vibrate-1 "><Image src="/image/beer.png" width={100} height={100} alt="image"/></p> 

                {/* Modals */}
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <div className="mt-5">
                    <button className="btn bg-slate-100 hover:bg-neutral-200 px-4 rounded-[6px] py-2 border border-black" onClick={()=>document.getElementById('my_modal_3').showModal()}>Run Information</button>
                    <dialog id="my_modal_3" className="modal px-[2rem] py-[1rem] rounded-3xl ">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-4 hover:font-extrabold text-2xl">✕</button>
                            </form>
                            <span className="flex justify-center"><Image src="/image/logo.png" width={80} height={80} alt="logo"/></span>
                            <div>
                                <h2 className="font-bold text-lg text-center py-2">Weekly Run Information</h2>
                                <ul className="flex flex-col gap-1">
                                    <li><b>Run No:</b> 1000</li>
                                    <li><b>Date:</b> Friday 20<sup>th</sup> September, 2024</li>
                                    <li><b>Venue:</b> Nwanyi Enugu, GRA Phase II,  Port Harcourt.</li>
                                    <li><b>Hare:</b> PH H3Mismanagement</li>
                                    <li><b>Rego:</b> N1,500</li>
                                    <li><b>Time:</b> 5:00 pm</li>
                                    <li><b>Sponsorship only: </b>1019116023 UBA</li>
                                </ul>
                            </div>
                        </div>
                    </dialog>
                </div>

                {/* swiper mobile, tablet & laptops responsive */}
                <div className='mt-6'>
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    navigation={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper1} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper2} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper3} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper4} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper5} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide >
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper6} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper7} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper8} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper9} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper10} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper11} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper13} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper14} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper15} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper16} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper17} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper18} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper19} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper20} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper21} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper22} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={swiper23} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    </Swiper>
                </div>

            </section>
        </>
    )





};

export default Hero;