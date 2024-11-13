import React from 'react'
import Container from '../ui/Container'
import { Link } from 'react-router-dom'
import Title from '../ui/Title'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/Hg941nR/Hero-Image.png')] bg-cover bg-no-repeat w-full">
        <div className="main  ">
            <div className="header bg-[#930B3166]">
                <Container className="mx-auto">
                    <div className="h-[88px] flex justify-between items-center ">
                        <div className="logo">
                            <img className="w-[120px] h-[64px] " src="https://i.ibb.co.com/c15FLyT/Logo.png" alt="" />
                        </div>
                        <div className="menu flex items-center gap-[24px]">
                            <Link className="item flex items-center gap-[6px]">
                                <div className="item font-inter">
                                    <img className="w-[20px] h-[20px]" src="https://i.ibb.co.com/5MqL95H/Vector.png" alt="" />
                                </div>
                                <div className="text">
                                 <p className="text-white font-inter font-medium text-[18px]">Home</p>
                                </div>
                            </Link>
                            <Link className="item flex items-center gap-[6px]">
                                <div className="item font-inter">
                                    <img className="w-[20px] h-[20px]" src="https://i.ibb.co.com/fMY75p3/Vector-1.png" alt="" />
                                </div>
                                <div className="text">
                                  <p className="text-white font-inter font-medium text-[18px]">Manage Boking</p>
                                </div>
                            </Link>
                            <Link className="item flex items-center gap-[6px]">
                                <div className="item font-inter">
                                    <img className="w-[20px] h-[20px]" src="https://i.ibb.co.com/bQP9rFx/Nav-icons.png" alt="" />
                                </div>
                                <div className="text"> 
                                <p className="text-white font-inter font-medium text-[18px]">Agent Point</p>
                                </div>
                            </Link>
                            <div className=" bg-[#FAD502] rounded-md hover:bg-[#930b31] hover:border-[#FAD502] group  border-[1px]  duration-300">
                                <button className="px-6 py-2 text-[18px] font-medium text-[#930b31] group-hover:text-black">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container className="mx-auto">
                <div className="here-item  mt-[106px]">
                    <div className="title max-w-[480px] leading-[48px] flex flex-col gap-[18px]">
                        <Title className="text-[40px] font-bold" title="Experience the City Tour  -Your Ticket to Freedom & Adventure" />
                        <p className="text-[18px] text-white leading-[28px] font-inter">
                           Enjoy unlimited stops and start exploring the city's top sights at your own pace
                        </p>
                    </div>
                </div>
                <div className="here-item  mt-[96px] pb-[48px] ">
                    <div className="item max-w-[1160px] bg-white mx-auto  rounded-xl ">
                        <div className="item px-[38px] pt-[24px] pb-[36px] flex items-center gap-[64px]">
                            <div className="service w-[30%]">
                                <p className="text-black font-inter font-medium text-[18px]">Select Bus Service</p>
                                <div className="ticket max-w-[300px] relative">
                                    <select name="" id="" className="w-full focus-within:border-[#930B31] cursor-pointer outline-none mt-[10px] appearance-none border-[2px] duration-300 border-black rounded-md h-[56px] px-2 font-inter font-medium text-[14px]">
                                        <option value="">Select Bus</option>
                                        <option value="small_bus">Small Bus</option>
                                        <option value="big_bus">Big Bus</option>
                                        <option value="mikrow">Mikrow</option>
                                    </select>
                                    <div className="react-icon absolute top-[30px] right-4">
                                       <MdKeyboardArrowDown className="text-xl" />
                                    </div>
                                </div>
                            </div>
                             <div className="main w-[50%]">
                                <p className="text-black font-inter font-medium text-[18px]">Ticket Price Range</p>
                                <div className="ticket    flex justify-between gap-4 items-center">
                                    <div className="min w-full flex items-center gap-[18px]">
                                        <p className="mt-2 font-inter text-[18px] font-medium">Min</p>
                                        <div className="ticket w-full relative  ">
                                            <select name="" id="" className="  w-full relative focus-within:border-[#930B31] cursor-pointer outline-none mt-[10px] appearance-none border-[2px] duration-300 border-black rounded-md h-[56px] px-2 font-inter font-medium text-[22px]">
                                                <option className="" value="">$50</option>
                                                <option className="" value="small_bus">$200</option>
                                                <option className="" value="big_bus">$250</option>
                                                <option className="" value="mikrow">$100</option>
                                            </select>
                                            <div className="react-icon absolute  top-[28px] right-4">
                                                <MdKeyboardArrowDown className="text-xl" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="others bg-black w-[80px] h-[2px] mt-2 "></div>
                                    <div className="ticket w-full relative  ">
                                     <div className="min w-full flex items-center gap-[18px]">
                                        <p className="mt-2 font-inter text-[18px] font-medium">Max</p>
                                        <div className="ticket w-full relative  ">
                                            <select name="" id="" className="  w-full relative focus-within:border-[#930B31] cursor-pointer outline-none mt-[10px] appearance-none border-[2px] duration-300 border-black rounded-md h-[56px] px-2 font-inter font-medium text-[22px]">
                                                <option className="" value="">$50</option>
                                                <option className="" value="small_bus">$200</option>
                                                <option className="" value="big_bus">$250</option>
                                                <option className="" value="mikrow">$100</option>
                                            </select>
                                            <div className="react-icon absolute  top-[28px] right-4">
                                                <MdKeyboardArrowDown className="text-xl" />
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                             </div>    
                            <div className="butto  w-[20%] flex items-center bg-[#930B31] justify-center h-full mt-6 rounded-md">
                                <button className="flex gap-[8px] items-center py-4 text-white">
                                    <div className="icon">
                                      <IoIosSearch className="h-[24px] w-[24px]" />
                                    </div>
                                    <div className="item text-[14px] font-inter">Search Ticket</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Header