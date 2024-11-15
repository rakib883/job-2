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
        <div className=" lg:bg-[url('https://i.ibb.co/kgJGr4j/HD-2.png')] bg-[url('https://i.ibb.co.com/wSSWGCh/Frame-87-2.png')]  bg-no-repeat bg-cover w-full  ">
            <Container className="py-[32px]">
                     <div className="item  flex sm:justify-end ">
                        <div className="max-w-[323px] ">
                            <motion.div className="item flex flex-col gap-[24px]">
                                {
                                    steps.map((item,index)=>
                                     <div key={index} className="flex gap-[16px] ">
                                           <div className="bg-white  mt-[30px] w-[24px] h-[24px] rounded-full flex justify-center items-center ">
                                               <p className="  text-[#930B31]">{item?.icon}</p>
                                            </div> 
                                          <div className="text-white ">
                                            <div className="number">
                                                <p className=' font-bold text-[14px] text-[#FAD502]'>{item?.number}</p>
                                            </div>
                                            <div className=" sm:mt-[8px]">
                                                <Title className=" font-bold text-[18px]" title={item?.title} />
                                            </div>
                                            <div className=" max-w-[248px] text-[12px] leading-[20px]">
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