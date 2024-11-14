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
        <div className="main lg:bg-[url('https://i.ibb.co/kgJGr4j/HD-2.png')] mobile:bg-[url('https://i.ibb.co.com/wSSWGCh/Frame-87-2.png')]  bg-no-repeat bg-cover w-full  ">
            <Container className="lg:py-[68px] mobile:py-[32px] mx-auto">
                     <div className="item  flex justify-end">
                        <div className="  ">
                            <motion.div 
                            
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            transition={{
                               type: "spring",
                               stiffness: 120, // Controls the "springiness"
                               damping: 15,    // Reduces bounciness
                               bounce: 0.5,    // Higher values add more bounce
                               duration: 1.5
                             }}
                             viewport={{ once: true, amount: 0.5 }}
                            
                            className="item flex flex-col lg:gap-[24px] mobile:gap-[20px]">
                                {
                                    steps.map((item,index)=>
                                     <div key={index} className="item flex lg:gap-[25px]  mobile:gap-[10px]">
                                          <div className="icon mt-8 bg-white flex justify-center items-center lg:h-[40px] lg:w-[40px] mobile:h-[24px] mobile:w-[24px] rounded-full">
                                               <p className="mobile:text-[16px] lg:text-[32px] text-[#930B31]">{item?.icon}</p>
                                            </div> 
                                          <div className="text-white">
                                            <div className="number">
                                                <p className=' font-bold text-[14px] text-[#FAD502]'>{item?.number}</p>
                                            </div>
                                            <div className="title">
                                                <Title className="font-semibold lg:text-[32px] mobile:text-[18px]" title={item?.title} />
                                            </div>
                                            <div className=" max-w-[380px]">
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