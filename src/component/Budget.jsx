import React from 'react'
import Container from '../ui/Container'
import Title from '../ui/Title'
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Budget = () => {
    const smallScren = [
        {image:"https://i.ibb.co.com/4fK6h5p/Bus-tour-1-1.png"},
        {image:"https://i.ibb.co.com/hZhcJGp/HD-4-3.png"},
        {image:"https://i.ibb.co.com/hZ7cHws/Bus-tour-4-3.png"},
    ]
  return (
    <div>
        <div className=" ">
           <Container className="">
              <div className=" flex sm:flex-col-reverse sm:mt-[40px] sm:gap-[40px]">
                 <div className=" ">
                    <div className="">
                        <p className="font-inter font-medium sm:text-[14px] text-[#5e5e5e]">Get In Touch</p>
                    </div>
                    <div className="title sm:max-w-[354px] sm:mt-[16px]">
                        <Title className=" text-[#0d0d0d] sm:max-w-[300px] sm:text-[16px] font-bold leading-[20px]" title="From Comfort to Budget, Explore Ticket Options for Every Traveler" />
                    </div>
                    <p className="font-medium  sm:mt-[8px] sm:text-[12px] leading-[20px] text-[#4b4b4b]">Seamless booking, diverse routes, and flexible schedules at your fingertips</p>
                    <div className=" sm:mt-[24px]">
                        <div className="item sm:flex sm:flex-col sm:gap-[16px]">
                            <div className="phone flex items-center gap-4 font-inter text-[16px] font-medium">
                               <p><FiPhone className="sm:text-[19px]" /></p>
                               <p className="sm:text-[14px] font-medium">0172826211</p>
                            </div>
                            <div className="phone flex items-center gap-4 font-inter text-[16px] font-medium">
                               <p><MdOutlineEmail  className="sm:text-[19px]" /></p>
                               <p className="sm:text-[14px] font-medium">sheikhrakib883@gmail.com</p>
                            </div>
                            <div className="phone flex items-center gap-4 font-inter text-[16px] font-medium">
                               <p><CiLocationOn className="sm:text-[19px] text-black" /></p>
                               <p className="sm:text-[14px] font-medium">Banani dhaka bangladesh</p>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className="galle   mobile:hidden lg:block">
                    <div className="item ">
                        {
                         smallScren.map((item,index)=>
                          <div key={index} className="first">
                              <img className=" sm:max-h-[212px] sm:max-w-[380px] " src={item?.image} alt="img" />
                          </div>
                        )}
                    </div>
                 </div>
              </div>
           </Container>
        </div>
    </div>
  )
}

export default Budget