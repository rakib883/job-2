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
                        <div className=" pt-[66px] max-w-[287px] mx-auto   ">
                           <Title className="text-[16px] font-bold text-center leading-[20px]  " title="Flexible Tickets, Iconic Routes, and Unforgettable Views – All in One Tour" />
                        </div>
                        <div className=" max-w-[241px] mx-auto mt-[8px] pb-[66px]   ">
                           <p className="text-[#DDDDDD] leading-[20px] text-center text-[12px]  font-medium ">The easiest way to explore, with the freedom to hop on and off as you please</p>
                        </div>
                     </div>
               </div>
             </Container>
        </div>
    </div>
  )
}

export default AddBanner