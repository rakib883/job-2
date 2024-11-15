import React from 'react'
import Container from '../ui/Container'
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { MdOutlineQrCode2 } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import Title from '../ui/Title';
import { motion } from "framer-motion";

const Steps = () => {
    const steps = [
        {
          number:"01",
          title:"Book Ticket",
          desc:"Ticket bookings made through our website or outlets are subject to availability. ",
          icon:<GrStatusGood/>
        },
        {
            number:"02",
            title:"Pament",
            desc:"Payment for bookings can be made securely through our website using major credit cards or other payment methods specified. ",
            icon:<FaRegMoneyBill1/>  
        },
        {
            number:"03",
            title:"Get QR Code",
            desc:"Get a QR code from our website after successful payment process completion.",
            icon:<MdOutlineQrCode2/>  
        },
        {
            number:"04",
            title:"QR Code at agent",
            desc:"Go to near our outlet point and show the  QR code and get your ticket",
            icon:<FaUsers/>  
        },
        {
            number:"05",
            title:"You are good to go",
            desc:"Collect your ticket from our agent point and find your ideal ride here",
            icon:<MdOutlineQrCode2/>  
        }
    ]
  return (
    <div>
        <div className="main lg:bg-[url('https://i.ibb.co/kgJGr4j/HD-2.png')] sm:bg-[url('https://i.ibb.co.com/wSSWGCh/Frame-87-2.png')]  bg-no-repeat bg-cover w-full  ">
            <Container className="sm:py-[32px]">
                     <div className="item  flex sm:justify-end ">
                        <div className="sm:max-w-[323px] ">
                            <motion.div className="item flex flex-col sm:gap-[24px]">
                                {
                                    steps.map((item,index)=>
                                     <div key={index} className="sm:flex sm:gap-[16px] ">
                                           <div className="bg-white  sm:mt-[30px] sm:w-[24px] sm:h-[24px] rounded-full flex justify-center items-center md:w-[40px] md:h-[40px]">
                                               <p className="mobile:text-[16px] lg:text-[32px] text-[#930B31]">{item?.icon}</p>
                                            </div> 
                                          <div className="text-white ">
                                            <div className="number">
                                                <p className=' font-bold sm:text-[14px] text-[#FAD502]'>{item?.number}</p>
                                            </div>
                                            <div className=" sm:mt-[8px]">
                                                <Title className=" font-bold sm:text-[18px]" title={item?.title} />
                                            </div>
                                            <div className=" sm:max-w-[248px] sm:text-[12px] leading-[20px]">
                                                {item?.desc}
                                            </div>
                                          </div>
                                     </div>
                                    )
                                }
                            </motion.div>
                        </div> 
                    </div>
            </Container>
        </div>
    </div>
  )
}

export default Steps