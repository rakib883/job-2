import React from 'react'
import Title from '../ui/Title'

const AddBanner = () => {
  return (
    <div>
        <div className="main mt-[40px] bg-[url('https://i.ibb.co.com/8NK7nvS/Bus-tour-3.png')] bg-no-repeat bg-cover w-full ">
             <div className="item max-w-[730px] mx-auto py-[100px]">
                   <div className="item text-center leading-[40px]">
                      <Title className="text-[32px] font-bold" title="Flexible Tickets, Iconic Routes, and Unforgettable Views – All in One Tour" />
                       <p className="text-[#DDDDDD] font-inter text-[14px] font-medium">The easiest way to explore, with the freedom to hop on and off as you please</p>
                   </div>
             </div>
        </div>
    </div>
  )
}

export default AddBanner