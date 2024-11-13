import React from 'react'
import Container from '../ui/Container'
import Title from '../ui/Title'
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Budget = () => {
  return (
    <div>
        <div className="item py-[40px]">
           <Container className="mx-auto">
              <div className="item flex">
                 <div className="text-area lg:w-[50%] mobile:w-full  mt-[40px]">
                    <div className="top">
                        <p className="font-inter font-medium text-[14px]">Get In Touch</p>
                    </div>
                    <div className="title max-w-[512px] mt-[16px]">
                        <Title className="font-bold lg:text-[32px] font-inter text-black  mobile:text-[16px]  lg:leading-[40px] mobile:leading-[20px]" title="From Comfort to Budget, Explore Ticket Options for Every Traveler" />
                    </div>
                    <p className="font-inter font-medium lg:text-[14px] lg:mt-[16px] mobile:mt-[8px]">Seamless booking, diverse routes, and flexible schedules at your fingertips</p>
                    <div className="social lg:mt-[40px] mobile:mt-[24px]">
                        <div className="item">
                            <div className="phone flex items-center gap-4 font-inter text-[16px] font-medium">
                               <p><FiPhone className="text-[16px]" /></p>
                               <p className="text-[16px] font-medium">0172826211</p>
                            </div>
                            <div className="phone flex items-center gap-4 font-inter text-[16px] font-medium">
                               <p><MdOutlineEmail  className="text-[16px]" /></p>
                               <p className="text-[16px] font-medium">sheikhrakib883@gmail.com</p>
                            </div>
                            <div className="phone flex items-center gap-4 font-inter text-[16px] font-medium">
                               <p><CiLocationOn className="text-[16px] text-black" /></p>
                               <p className="text-[16px] font-medium">Banani dhaka bangladesh</p>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className="galle w-[50%] mobile:hidden lg:block">
                    <div className="item flex gap-0 items-center ">
                          <div className="first">
                              <img className="w-[212px] h-[420px]" src="https://i.ibb.co.com/ZLqvHW1/Bus-tour-1.png" alt="img" />
                          </div>
                          <div className="first">
                              <img className="w-[212px] h-[420px]" src="https://i.ibb.co.com/gD12MnK/HD-4-1.png" alt="img" />
                          </div>
                          <div className="first">
                              <img className="w-[212px] h-[420px]" src="https://i.ibb.co.com/H7mn0Th/Bus-tour-4.png" alt="img" />
                          </div>
                    </div>
                 </div>
              </div>
           </Container>
        </div>
    </div>
  )
}

export default Budget