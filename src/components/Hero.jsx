'use client'


import React from "react"
import { IoIosFastforward } from "react-icons/io";
import Image from "next/image";






const Hero=()=>{

    return(
        <>
            <section className="pt-32 md:pt-40 px-[1rem] lg:px-[5rem]">
               <div className="flex relative ">
                    <div className="flex flex-col gap-2">
                        <p className=" text-xl md:text-2xl font-serif font-extrabold text-black">Port Harcourt Hash House Harriers.</p>
                        <p className="text-[14px] md:text-xl  font-serif  text-black  ">Welcome to the vibrant world of Hashers, <br /> a running club with a drinking problem or <br /> a drinking club with a running problem.</p>
                    </div>


                    <div className="hidden lg:flex ">
                       <Image src="/image/trail.png" width={500} height={500} alt="image" />
                    </div>
               </div>

                <p className=" hidden md:flex absolute top-[18rem] left-[28rem] bounce-in-top"><Image src="/image/shoe.png" width={100} height={100} alt="image"/></p> 
                <p className=" hidden md:flex absolute top-[7rem] right-[24rem] vibrate-1 "><Image src="/image/beer.png" width={100} height={100} alt="image"/></p> 

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
                                <ul className="flex flex-col ">
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

                {/* swiper tablet & laptops responsive */}
                {/* <div className='mt-6'>
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
                            <Image src={pic1a} width={0} height={0} alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic1} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic2} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic3} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic4} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide   SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic5} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic6} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic7} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic8} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic9} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic11} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic12} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic13} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic14} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic15} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic16} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-48 w-full overflow-hidden'>
                            <Image src={pic17} width={0} height={0}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                        </div>
                    </SwiperSlide>

                    </Swiper>
                </div> */}

            </section>
        </>
    )





};

export default Hero;