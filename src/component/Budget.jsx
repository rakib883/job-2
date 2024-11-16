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
           <Container className="lg:mx-auto">
              <div className=" flex flex-col-reverse mt-[40px] gap-[40px] lg:flex-row">
                 <div className=" ">
                    <div className="">
                        <p className="font-inter font-medium text-[14px] text-[#5e5e5e]">Get In Touch</p>
                    </div>
                    <div className="title max-w-[354px] mt-[16px]">
                        <Title className=" text-[#0d0d0d] max-w-[300px] text-[16px] font-bold leading-[20px]" title="From Comfort to Budget, Explore Ticket Options for Every Traveler" />
                    </div>
                    <p className="font-medium  mt-[8px] text-[12px] leading-[20px] text-[#4b4b4b]">Seamless booking, diverse routes, and flexible schedules at your fingertips</p>
                    <div className=" mt-[24px]">
                        <div className="item flex flex-col gap-[16px]">
                            <div className="phone flex items-center gap-4 font-inter text-[16px] font-medium">
                               <p><FiPhone className="text-[19px]" /></p>
                               <p className="text-[14px] font-medium">0172826211</p>
                            </div>
                            <div className="phone flex items-center gap-4 font-inter text-[16px] font-medium">
                               <p><MdOutlineEmail  className="text-[19px]" /></p>
                               <p className="text-[14px] font-medium">sheikhrakib883@gmail.com</p>
                            </div>
                            <div className="phone flex items-center gap-4 font-inter text-[16px] font-medium">
                               <p><CiLocationOn className="text-[19px] text-black" /></p>
                               <p className="text-[14px] font-medium">Banani dhaka bangladesh</p>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className="galle ">
                    <div className="item grid sm:grid-cols-2 ">
                        {
                         smallScren.map((item,index)=>
                          <div key={index} className="first">
                              <img className=" max-h-[212px]  " src={item?.image} alt="img" />
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