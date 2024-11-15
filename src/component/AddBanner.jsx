import React from 'react'
import Title from '../ui/Title'
import Container from '../ui/Container'

const AddBanner = () => {
  return (
    <div>
        <div className="main mt-[40px] bg-[url('https://i.ibb.co.com/8NK7nvS/Bus-tour-3.png')] bg-no-repeat bg-cover w-full ">
             <Container>
               <div className="">
                     <div className="">
                        <div className=" sm:pt-[66px] sm:max-w-[287px] sm:mx-auto laptop:pt-[102px] laptop:max-w-[729px]  ">
                           <Title className="sm:text-[16px] font-bold sm:text-center leading-[20px] laptop:text-[32px] laptop:leading-[40px]" title="Flexible Tickets, Iconic Routes, and Unforgettable Views – All in One Tour" />
                        </div>
                        <div className=" sm:max-w-[241px] sm:mx-auto sm:mt-[8px] sm:pb-[66px] laptop:mt-[16px] laptop:max-w-[729px] laptop:pb-[102px]">
                           <p className="text-[#DDDDDD] leading-[20px] sm:text-center sm:text-[12px]  font-medium laptop:text-[14px]">The easiest way to explore, with the freedom to hop on and off as you please</p>
                        </div>
                     </div>
               </div>
             </Container>
        </div>
    </div>
  )
}

export default AddBanner