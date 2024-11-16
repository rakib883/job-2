import React from 'react'
import Title from '../ui/Title'
import Container from '../ui/Container'

const AddBanner = () => {
  return (
    <div>
        <div className="main mt-[40px] bg-[url('https://i.ibb.co.com/8NK7nvS/Bus-tour-3.png')] bg-no-repeat bg-cover w-full ">
             <Container className="lg:mx-auto">
               <div className="">
                     <div className=" lg:py-[102px]">
                        <div className=" pt-[66px] max-w-[287px] mx-auto lg:max-w-[729px]    ">
                           <Title className="text-[16px] font-bold text-center leading-[20px] lg:text-[32px] lg:leading-[40px]  " title="Flexible Tickets, Iconic Routes, and Unforgettable Views – All in One Tour" />
                        </div>
                        <div className=" max-w-[241px] mx-auto mt-[8px] pb-[66px] lg:mt-[16px] lg:max-w-[729px]    ">
                           <p className="text-[#DDDDDD] leading-[20px] text-center text-[12px]  font-medium lg:leading-[20px] ">The easiest way to explore, with the freedom to hop on and off as you please</p>
                        </div>
                     </div>
               </div>
             </Container>
        </div>
    </div>
  )
}

export default AddBanner