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
        <div className="item">
            <Container className="mx-auto">
                <div className="main ">
                   <div className="item lg:mt-[120px] mobile:mt-[40px] ">
                      <Title className="lg:text-[40px] mobile:text-[22px]  font-bold text-black" title="Choose Your Bus Service" />
                   </div>
                  <div className="lg:mt-[16px] mobile:mt-[8px] mobile:max-w-[284px]">
                    <p className="font-inter mobile:text-[12px] lg:text-[14px] font-medium  ">Reserve your seat from available bus rides. From comfort to budget, explore ticket options</p>
                  </div>
                </div>
                <div className="product-tab my-[48px] ">
                     <div className="item hidden lg:block">
                        <div className="item flex gap-[24px]">
                            <div onClick={()=>tabSetIsActive(1)} className={`${tabIsActive === 1 ? "customBottomBorder text-[#930B31]" :"" } item  relative cursor-pointer`}>
                                <p className="font-inter font-medium text-[22px]" >Big Bus Packages</p>
                            </div>
                            <div className="item">
                                <div  onClick={()=>tabSetIsActive(2)} className={`${tabIsActive === 2 ? "customBottomBorder text-[#930B31]" :"" } item  relative cursor-pointer`}>
                                    <p className="font-inter font-medium text-[22px]" >Green Line Packages</p>
                                </div>
                            </div>
                            <div className="item">
                                <div  onClick={()=>tabSetIsActive(3)} className={`${tabIsActive === 3 ? "customBottomBorder text-[#930B31]" :"" } item  relative cursor-pointer`}>
                                    <p className="font-inter font-medium text-[22px]" >I Love Rome Packages</p>
                                </div>
                            </div>
                            <div className="item">
                                <div  onClick={()=>tabSetIsActive(4)} className={`${tabIsActive === 4 ? "customBottomBorder text-[#930B31]" :"" } item  relative cursor-pointer`}>
                                    <p className="font-inter font-medium text-[22px]" >IO Bus Packages</p>
                                </div>
                            </div>
                            <div className="item">
                                <div  onClick={()=>tabSetIsActive(5)} className={`${tabIsActive === 5 ? "customBottomBorder text-[#930B31]" :"" } item  relative cursor-pointer`}>
                                    <p className="font-inter font-medium text-[22px]" >Sightseeing Packages</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                    {/* small device items */}
                    <div className="main lg:hidden">
                        <div className="item flex flex-wrap gap-4">
                            <div onClick={()=>tabSetIsActive(1)} className={`${ tabIsActive === 1 ? "border-[#920b31] border-[2px]" : "border-[#cac4d0] border-[2px]"} item   rounded-md h-[40px] flex items-center justify-center`}>
                                <p className="font-inter font-medium text-[16px] px-4">Big Bus Packages</p>
                            </div>
                            <div onClick={()=>tabSetIsActive(2)}  className={`${ tabIsActive === 2 ? "border-[#920b31] border-[2px]" : "border-[#cac4d0] border-[2px]"} item   rounded-md h-[40px] flex items-center justify-center`}>
                                <p className="font-inter font-medium text-[16px] px-4">Green Line Packages</p>
                            </div>
                            <div onClick={()=>tabSetIsActive(3)}  className={`${ tabIsActive === 3 ? "border-[#920b31] border-[2px]" : "border-[#cac4d0] border-[2px]"} item   rounded-md h-[40px] flex items-center justify-center`}>
                                <p className="font-inter font-medium text-[16px] px-4">I Love Rome Packages</p>
                            </div>
                            <div onClick={()=>tabSetIsActive(4)}  className={`${ tabIsActive === 4 ? "border-[#920b31] border-[2px]" : "border-[#cac4d0] border-[2px]"} item   rounded-md h-[40px] flex items-center justify-center`}>
                                <p className="font-inter font-medium text-[16px] px-4">IO Bus Packages</p>
                            </div>
                            <div onClick={()=>tabSetIsActive(5)}  className={`${ tabIsActive === 5 ? "border-[#920b31] border-[2px]" : "border-[#cac4d0] border-[2px]"} item   rounded-md h-[40px] flex items-center justify-center`}>
                                <p className="font-inter font-medium text-[16px] px-4">Sightseeing Packages</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="product-area">
                    <div className="item grid mobile:grid-cols-2 lg:grid-cols-4 lg:gap-x-[64px] lg:gap-y-[40px] mobile:gap-[4px]">
                        {
                            product.map((item,index)=>(
                                <div key={index} className="main flex justify-center items-center rounded-md bg-white">
                                    <div className="item ">
                                        <div className="image w-full">
                                            <img className="w-full" src={item?.image} alt="" />
                                        </div>
                                        <div className="des mx-[8px]">
                                            <div className="subfoter mt-[16px] flex items-center justify-between">
                                                <p className="font-inter font-medium text-[12px]">{item?.subtitle}</p>
                                                <p className="flex gap-1 items-center">
                                                   <IoMdTime className="lg:text-[18px] mobile:text-[10px]" />  <p className="font-inter font-medium lg:text-[12px] mobile:text-[10px]">{item?.time}</p>
                                                </p>
                                            </div>
                                            <div className="title flex items-center mt-[4px] gap-1 ">
                                                <div className="title-name  ">
                                                   <p className="font-medium lg:text-[16px] mobile:text-[14px] ">Rome Bus Ticket: Discover Package  </p>
                                                </div>
                                            </div>
                                            <div className="count">
                                               <div className="img flex text-[#000000] items-center mt-[10px]">
                                                 <p><BsTicket /></p>
                                                 <p>#4 </p>
                                               </div>
                                            </div>
                                            <div className="item flex items-center">
                                                <p className="lg:text-[14px] mobile:text-[12px] font-inter">Start from</p>
                                                <p className="font-medium lg:text-[16px] mobile:text-[14px] text-black">$120</p>
                                                <p className="text-[#5e5e5e]">(per user)</p>
                                            </div>
                                            <div className="button flex items-center lg:justify-start mobile:justify-between gap-[8px] lg:mt-8 mobile:mt-[8px] pb-[10px]">
                                                <div className="bg-[#930B31] rounded-md text-[#930B31]">
                                                    <button className="font-medium lg:text-[14px] mobile:text-[12px] text-white px-4 py-2">Buy Now</button>
                                                </div>
                                                <div className=" rounded-md text-[#930B31]">
                                                    <button className=" mobile:text-[12px] font-inter font-medium ">View detils</button>
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