import React, { useState } from 'react'
import Container from '../ui/Container'
import Title from '../ui/Title'
import { IoMdTime } from "react-icons/io";
import { BsTicket } from "react-icons/bs";

const Services = () => {
    const product = [
        {
          name:"Romo bus Ticket",
          busname:"Discover Package ",
          subtitle:"Hop-On Hop-Off Tour",
          time:"24 hour",
          image:"https://i.ibb.co.com/xqbLDHW/Big-bus-2.png"
        },
        {
            name:"Romo bus Ticket",
            busname:"Discover Package ",
            subtitle:"Hop-On Hop-Off Tour",
            time:"24 hour",
            image:"https://i.ibb.co.com/mtf1cRG/Big-bus-3.png"
          },
          {
            name:"Romo bus Ticket",
            busname:"Discover Package ",
            subtitle:"Hop-On Hop-Off Tour",
            time:"24 hour",
            image:"https://i.ibb.co.com/b6jmjkN/Big-bus-5.png"
          },
          {
            name:"Romo bus Ticket",
            busname:"Discover Package ",
            subtitle:"Hop-On Hop-Off Tour",
            time:"24 hour",
            image:"https://i.ibb.co.com/JmBV7PN/Big-bus-1.png"
          },
          {
            name:"Romo bus Ticket",
            busname:"Discover Package ",
            subtitle:"Hop-On Hop-Off Tour",
            time:"24 hour",
            image:"https://i.ibb.co.com/7SgGpHN/HD-1.png"
          },
          {
            name:"Romo bus Ticket",
            busname:"Discover Package ",
            subtitle:"Hop-On Hop-Off Tour",
            time:"24 hour",
            image:"https://i.ibb.co.com/jRs0s8s/big-bus-open-roof.png"
          },
          {
            name:"Romo bus Ticket",
            busname:"Discover Package ",
            subtitle:"Hop-On Hop-Off Tour",
            time:"24 hour",
            image:"https://i.ibb.co.com/gTVCcCv/HD-4.png"
          },
          {
            name:"Romo bus Ticket",
            busname:"Discover Package ",
            subtitle:"Hop-On Hop-Off Tour",
            time:"24 hour",
            image:"https://i.ibb.co.com/xqbLDHW/Big-bus-2.png"
          },
        
    ]

    const [tabIsActive,tabSetIsActive] = useState(1)
  return (
    <div>
        <div className="item bg-[#f2f2f7] pb-2">
            <Container className=" pt-[40px]">
                <div className=" ">
                   <div className=" text-[22px] font-bold leading-[28px] ">
                      <Title className="text-black font-bold sm:text-[22px]  sm:leading-[28px]" title="Choose Your Bus Service" />
                   </div>
                  <div className="mt-[8px] max-w-[284px]">
                    <p className="text-[12px] leading-[20px] text-[#4b4b4b]">Reserve your seat from available bus rides. From comfort to budget, explore ticket options</p>
                  </div>
                </div>
                <div className="product-tab ">
                     <div className="item hidden lg:block">
                        <div className="item flex gap-[24px] md:mt-[20px]">
                            <div onClick={()=>tabSetIsActive(1)} className={`${tabIsActive === 1 ? "customBottomBorder text-[#930B31]" :"" } item  relative cursor-pointer`}>
                                <p className="font-inter font-medium md:text-[12px] laptop:text-[22px]" >Big Bus Packages</p>
                            </div>
                            <div className="item">
                                <div  onClick={()=>tabSetIsActive(2)} className={`${tabIsActive === 2 ? "customBottomBorder text-[#930B31]" :"" } item  relative cursor-pointer`}>
                                    <p className="font-inter font-medium md:text-[12px] laptop:text-[22px]" >Green Line Packages</p>
                                </div>
                            </div>
                            <div className="item">
                                <div  onClick={()=>tabSetIsActive(3)} className={`${tabIsActive === 3 ? "customBottomBorder text-[#930B31]" :"" } item  relative cursor-pointer`}>
                                    <p className="font-inter font-medium md:text-[12px] laptop:text-[22px]" >I Love Rome Packages</p>
                                </div>
                            </div>
                            <div className="item">
                                <div  onClick={()=>tabSetIsActive(4)} className={`${tabIsActive === 4 ? "customBottomBorder text-[#930B31]" :"" } item  relative cursor-pointer`}>
                                    <p className="font-inter font-medium md:text-[12px] laptop:text-[22px]" >IO Bus Packages</p>
                                </div>
                            </div>
                            <div className="item">
                                <div  onClick={()=>tabSetIsActive(5)} className={`${tabIsActive === 5 ? "customBottomBorder text-[#930B31]" :"" } item  relative cursor-pointer`}>
                                    <p className="font-inter font-medium md:text-[12px] laptop:text-[22px]" >Sightseeing Packages</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                    {/* small device items */}
                    <div className="main lg:hidden mt-[24px]">
                        <div className="item flex flex-wrap gap-4">
                            <div onClick={()=>tabSetIsActive(1)} className={`${ tabIsActive === 1 ? "border-[#920b31] border-[2px]" : "border-[#cac4d0] border-[2px]"} item cursor-pointer   rounded-md h-[40px] flex items-center justify-center`}>
                                <p className="font-inter font-medium text-[16px] px-4">Big Bus Packages</p>
                            </div>
                            <div onClick={()=>tabSetIsActive(2)}  className={`${ tabIsActive === 2 ? "border-[#920b31] border-[2px]" : "border-[#cac4d0] border-[2px]"} item  cursor-pointer  rounded-md h-[40px] flex items-center justify-center`}>
                                <p className="font-inter font-medium text-[16px] px-4">Green Line Packages</p>
                            </div>
                            <div onClick={()=>tabSetIsActive(3)}  className={`${ tabIsActive === 3 ? "border-[#920b31] border-[2px]" : "border-[#cac4d0] border-[2px]"} item cursor-pointer   rounded-md h-[40px] flex items-center justify-center`}>
                                <p className="font-inter font-medium text-[16px] px-4">I Love Rome Packages</p>
                            </div>
                            <div onClick={()=>tabSetIsActive(4)}  className={`${ tabIsActive === 4 ? "border-[#920b31] border-[2px]" : "border-[#cac4d0] border-[2px]"} item  cursor-pointer  rounded-md h-[40px] flex items-center justify-center`}>
                                <p className="font-inter font-medium text-[16px] px-4">IO Bus Packages</p>
                            </div>
                            <div onClick={()=>tabSetIsActive(5)}  className={`${ tabIsActive === 5 ? "border-[#920b31] border-[2px]" : "border-[#cac4d0] border-[2px]"} item cursor-pointer   rounded-md h-[40px] flex items-center justify-center`}>
                                <p className="font-inter font-medium text-[16px] px-4">Sightseeing Packages</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="product-area mt-[40px]">
                    <div className="item grid grid-cols-2 sm:grid-cols-3 gap-y-[24px] gap-x-[4px]  ">
                        {
                            product.map((item,index)=>(
                                <div key={index} className="main flex justify-center items-center rounded-md bg-white">
                                    <div className="item ">
                                        <div className="image w-full overflow-hidden">
                                            <img  className="w-full hover:scale-125 duration-300 rounded-md" src={item?.image} alt="" />
                                        </div>
                                        <div className="des mx-[8px]">
                                            <div className="subfoter mt-[16px] flex items-center justify-between">
                                                <p className="font-inter font-medium text-[12px]">{item?.subtitle}</p>
                                                <p className="flex gap-1 items-center">
                                                   <IoMdTime className="lg:text-[18px] mobile:text-[10px] hidden" />  <p className="font-inter font-medium text-[10px]">{item?.time}</p>
                                                </p>
                                            </div>
                                            <div className="title flex items-center mt-[4px] gap-1 ">
                                                <div className="title-name  ">
                                                   <p className="font-medium lg:text-[16px] text-[14px] ">Rome Bus Ticket: Discover Package  </p>
                                                </div>
                                            </div>
                                            <div className="count">
                                               <div className="img flex text-[#000000] items-center mt-[10px] gap-[1px]">
                                                 <p><BsTicket /></p>
                                                 <p className="text-[#4b4b4b]">#4 </p>
                                               </div>
                                            </div>
                                            <div className="item flex items-center">
                                                <p className="text-[12px] mobile:text-[12px] font-inter">Start from</p>
                                                <p className="font-medium text-[14px] mobile:text-[14px] text-black">$120</p>
                                                <p className="text-[#5e5e5e] text-[14px]">(per user)</p>
                                            </div>
                                            <div className="flex justify-between items-center mt-[10px] pb-[8px]">
                                                <div className=" bg-[#930B31] text-center rounded-md ">
                                                    <button className=" text-center py-[10px] px-[16px] text-white font-medium">Buy Now</button>
                                                </div>
                                                <div className=" rounded-md text-[#930B31]">
                                                    <button className=" text-[12px] font-inter font-medium ">View detils</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Services