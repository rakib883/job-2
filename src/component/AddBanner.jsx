import React from 'react'
import Title from '../ui/Title'

const AddBanner = () => {
  return (
    <div>
        <div className="main mt-[40px] bg-[url('https://i.ibb.co.com/8NK7nvS/Bus-tour-3.png')] bg-no-repeat bg-cover w-full ">
             <div className="">
                   <div className="">
                       <div className=" sm:pt-[66px] sm:max-w-[287px] sm:mx-auto  ">
                          <Title className="sm:text-[16px] sm:text-center leading-[20px]" title="Flexible Tickets, Iconic Routes, and Unforgettable Views – All in One Tour" />
                       </div>
                      <div className=" sm:max-w-[241px] sm:mx-auto sm:mt-[8px] pb-[66px]">
                         <p className="text-[#DDDDDD] leading-[20px] sm:text-center sm:text-[12px] font-inter lg:text-[14px] mobile:text-[12px] mobile:leading-[20px] font-medium">The easiest way to explore, with the freedom to hop on and off as you please</p>
                      </div>
                   </div>
             </div>
        </div>
    </div>
  )
}

export default AddBanner