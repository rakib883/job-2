import React from 'react'
import Container from '../ui/Container'
import { MdOutlineDoubleArrow } from "react-icons/md";

const Branding = () => {
    const linkItem = [
       {name:"https://i.ibb.co.com/FqZsfjp/big-bus-tours-logo-svg.png"},
       {name:"https://i.ibb.co.com/KWdgJdB/i-love-rome-1.png"},
       {name:"https://i.ibb.co.com/M5XNbrc/Bus-logo-1-2.png"},
       {name:"https://i.ibb.co.com/1mkxVj1/Bus-logo-2-1.png"},
       {name:"https://i.ibb.co.com/kJz98Wd/Bus-logo-3-1.png"}
    ]
  return (
    <div>
        <div className=" mt-4 md:mt-0 bg-[#FAD502]">
            <Container className="">
                <div className="flex justify-between items-center h-[52px] md:h-[112px] ">
                    {
                        linkItem.map((item,index)=>(
                            <div key={index} className="item ">
                                <img className=" h-[20px] md:h-[40px] " src={item?.name} alt="" />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
        <div className="botton-icon max-w-md mx-auto py-[24px] ">
            <div className="item flex justify-center items-center cursor-pointer"> 
               <MdOutlineDoubleArrow className="rotate-90 text-center w-[25px] h-[25px] text-[#930b31]" />
            </div>
        </div>
    </div>
  )
}

export default Branding