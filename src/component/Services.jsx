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
                <div className="main mt-[120px]">
                    <Title className="text-[40px] font-bold text-black" title="Choose Your Bus Service" />
                    <p className="font-inter text-[14px] font-medium ">Reserve your seat from available bus rides. From comfort to budget, explore ticket options</p>
                </div>
                <div className="product-tab my-[48px]">
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
                                                  <IoMdTime className="text-[18px]" />  <p className="font-inter font-medium text-[12px]">{item?.time}</p>
                                                </p>
                                            </div>
                                            <div className="title flex items-center mt-[4px] gap-1 ">
                                                <div className="title-name ">
                                                   <p className="font-medium text-[16px]">{item?.name} :</p>
                                                </div>
                                                <div className="item">
                                                    <p className="font-medium text-[16px]">{item?.busname}</p>
                                                </div>
                                            </div>
                                            <div className="count">
                                               <div className="img flex items-center mt-[10px]">
                                                 <p><BsTicket /></p>
                                                 <p>#4 </p>
                                               </div>
                                            </div>
                                            <div className="item flex items-center">
                                                <p className="text-[14px] font-inter">Start from</p>
                                                <p className="font-medium text-[16px] text-black">$120</p>
                                                <p>(per user)</p>
                                            </div>
                                            <div className="button flex items-center gap-[8px] mt-8 pb-[10px]">
                                                <div className="bg-[#930B31] rounded-md text-[#930B31]">
                                                    <button className="font-medium text-[14px] text-white px-4 py-2">Buy Now</button>
                                                </div>
                                                <div className=" rounded-md text-[#930B31]">
                                                    <button className="font-medium text-[14px]  px-4 py-2">View detils</button>
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