import React from 'react'
import Container from '../ui/Container'
import Title from '../ui/Title'
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Foter = () => {
  return (
    <div className="bg-[#131213] sm:mt-[40px]">
      <Container className="mx-auto">
        <div className="foter ">
            <div className="item grid  sm:grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 md:gap-2">
                <div className="logo  ">
                    <div className="icon sm:mt-[40px]">
                        <img className="sm:w-[300px] sm:h-[160px]" src="https://i.ibb.co.com/0cspmhR/Logo-da82820aa0438044dcf7-png.png" alt="" />
                    </div>
                    <div className="sm:max-w-[368px] sm:mt-[16px]">
                        <p className="font-inter text-[14px] text-[#dddddd] text-start ]">
                           At SightSeeing Roma, we believe that every traveller deserves to explore the majestic beauty and rich history of Rome with ease and comfort. Established with a passion for delivering unforgettable experiences, we are your gateway to the heart of this ancient city
                        </p>
                    </div>
                </div>
                <div className=" flex gap-20 sm:mt-[40px]">
                  <div className="bus ">
                     <div className="item">
                        <div className="title">
                           <Title className="font-medium sm:text-[22px] text-[#ffffff] " title="Bus Services "/>
                        </div>
                        <div className="desc text-[#dddddd] mt-[24px] flex flex-col gap-[8px]">
                           <p className="font-inter text-[14px] font-medium">Big Bus </p>
                           <p className="font-inter text-[14px] font-medium">Green Line</p>
                           <p className="font-inter text-[14px] font-medium">I Love Rome</p>
                           <p className="font-inter text-[14px] font-medium">IO Bus</p>
                           <p className="font-inter text-[14px] font-medium">Sightseeing </p>
                        </div>
                     </div>
                  </div>
                  <div className="abo">
                     <div className="item">
                        <div className="title">
                           <Title className="font-medium sm:text-[22px] text-[#ffffff]" title="About us"/>
                        </div>
                        <div className="desc text-[#dddddd] mt-[24px] flex flex-col gap-[8px]">
                           <p className="font-inter text-[14px] font-medium">About us </p>
                           <p className="font-inter text-[14px] font-medium">Terams & condetion</p>
                           <p className="font-inter text-[14px] font-medium">Return polecy</p>
                           <p className="font-inter text-[14px] font-medium">Refund polecy</p>
                           <p className="font-inter text-[14px] font-medium">Pryvacy policy</p>
                        </div>
                     </div>
                  </div>
                </div>  
                <div className="sear ">
                  <div className="sm:mt-[40px]">
                      <div className="title">
                         <Title className="font-medium text-[22px] font-inter" title="Stay Updated"/>
                      </div>
                      <div className="desc text-[#dddddd] sm:mt-[16px] flex flex-col gap-[8px]">
                        <p className="font-inter text-[14px] font-medium lg:max-w-[331px]">
                           Sign up to receive exclusive offers, travel tips, and the latest bus routes directly to your inbox
                        </p>
                      </div>
                      <div className="input-area">
                        <div className="item flex  items-center sm:mt-[24px]">
                           <input className=" outline-none px-4 h-[40px] w-[180px] rounded-l-md" type="text" name="" id="" placeholder="Email" />
                           <button className="bg-[#fad502] h-[40px] w-[88px] rounded-r-md font-medium font-inter text-[14px]">Submit</button>
                        </div>
                      </div>
                      <div className="pament-item  sm:mt-[56px]">
                         <p className="font-inter text-[14px] font-medium text-[#dddddd] ">Pamwent method</p>
                      </div>
                      <div className="pament-icin sm:w-[331px] sm:h-[33px] sm:mt-[24px]">
                         <img className="w-full h-full" src="https://i.ibb.co.com/RQYrBBm/Frame-52.png" alt="" />
                      </div>
                   </div>
                </div>
            </div>
             <div className="subfoter sm:mt-[32px]">
                <div className="item border-[.5px] border-[#79747e]"></div>
              </div>
              <div className="item mt-[16px] flex md:flex-row md:items-center sm:flex-col md:justify-between  mobile:gap-[16px] lg:items-center pb-[88px] sm:pb-[24px]">
                 <div className="text font-inter text-[14px] font-medium text-[#dddddd]">
                    © All Rights Reserved to Sightseeing Roma
                 </div>
                 <div className=" sm:mt-[16px]">
                   <div className="item flex items-center gap-[24px]">
                     <div className="item">
                        <IoLogoFacebook className="text-[#ffffff] h-[32px] w-[32px]" />
                     </div>
                     <div className="item">
                        <FaYoutube className="text-[#ffffff] h-[32px] w-[32px]" />
                     </div>
                     <div className="item">
                        <FaInstagram className="text-[#ffffff] h-[32px] w-[32px]" />
                     </div>
                   </div>
                 </div>
              </div>
         </div>
      </Container>
    </div>
  )
}

export default Foter