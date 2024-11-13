import React from 'react'
import Title from '../ui/Title'

const AddBanner = () => {
  return (
    <div>
        <div className="main mt-[40px] bg-[url('https://i.ibb.co.com/8NK7nvS/Bus-tour-3.png')] bg-no-repeat bg-cover w-full ">
             <div className="item lg:max-w-[730px] mobile:max-w-[287px] mobile:mx-auto lg:mx-auto lg:py-[100px] mobile:py-[66px]">
                   <div className="item text-center lg:leading-[40px]">
                       <div className="title">
                          <Title className="lg:text-[32px] mobile:text-[16px] font-bold" title="Flexible Tickets, Iconic Routes, and Unforgettable Views – All in One Tour" />
                       </div>
                      <div className="item lg:mt-[16px] mobile:mt-[8px]">
                         <p className="text-[#DDDDDD] font-inter lg:text-[14px] mobile:text-[12px] mobile:leading-[20px] font-medium">The easiest way to explore, with the freedom to hop on and off as you please</p>
                      </div>
                   </div>
             </div>
        </div>
    </div>
  )
}

export default AddBanner