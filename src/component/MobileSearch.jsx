import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Container from '../ui/Container'

const MobileSearch = () => {
  return (
    <div>
       <div className=""> 
              <Container className="laptop:hidden">
                    <div className=" bg-[#f2f2f7] mt-[24px] rounded-lg ">
                        <div className="p-[16px] ">
                            <div className="">
                                <p className="text-black font-inter font-medium text-[14px]">Select Bus Service</p>
                                <div className="ticket  relative">
                                    <select name="" id="" className="w-full focus-within:border-[#930B31] cursor-pointer outline-none mt-[10px] appearance-none border-[2px] duration-300 border-black rounded-md h-[48px] px-4 font-inter font-medium text-[14px]">
                                        <option value="">Select Bus</option>
                                        <option value="small_bus">Small Bus</option>
                                        <option value="big_bus">Big Bus</option>
                                        <option value="mikrow">Mikrow</option>
                                    </select>
                                    <div className="react-icon absolute top-[25px] right-4">
                                       <MdKeyboardArrowDown className="text-xl" /> 
                                    </div>
                                </div>
                            </div>
                             <div className=" w-full mt-[24px] ">
                                <p className="text-black font-inter font-medium text-[14px] ">Ticket Price Range</p>
                                <div className="ticket    flex justify-between gap-4 items-center">
                                    <div className="min w-full flex items-center gap-[18px]">
                                        <p className="mt-2 font-inter text-[14px] font-medium">Min</p>
                                        <div className="ticket w-full relative  ">
                                            <select name="" id="" className="  w-full relative focus-within:border-[#930B31] cursor-pointer outline-none mt-[10px] appearance-none border-[2px] duration-300 border-black rounded-md h-[48px] px-2 font-inter font-medium text-[16px]">
                                                <option className="" value="">$50</option>
                                                <option className="" value="small_bus">$200</option>
                                                <option className="" value="big_bus">$250</option>
                                                <option className="" value="mikrow">$100</option>
                                            </select>
                                            <div className="react-icon absolute  top-[23px] right-4">
                                                <MdKeyboardArrowDown className="text-xl" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="others bg-black w-[20px] h-[2px] mt-[8px]  "></div>
                                    <div className="ticket w-full relative  ">
                                     <div className="min w-full flex items-center gap-[18px]">
                                        <p className="mt-2 font-inter text-[14px] font-medium">Max</p>
                                        <div className="ticket w-full relative  ">
                                            <select name="" id="" className="  w-full relative focus-within:border-[#930B31] cursor-pointer outline-none mt-[10px] appearance-none border-[2px] duration-300 border-black rounded-md h-[48px] px-2 font-inter font-medium text-[16px]">
                                                <option className="" value="">$50</option>
                                                <option className="" value="small_bus">$200</option>
                                                <option className="" value="big_bus">$250</option>
                                                <option className="" value="mikrow">$100</option>
                                            </select>
                                            <div className="react-icon absolute   top-[23px] right-4">
                                                <MdKeyboardArrowDown className="text-xl" />
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                             </div>    
                            <div className="butto max-w-[160px] mx-auto   flex items-center bg-[#930B31] justify-center h-[48px] mt-[24px] rounded-md">
                                <button className="flex gap-[8px] items-center py-4 text-white">
                                    <div className="icon">
                                      <IoIosSearch className="h-[24px] w-[24px]" />
                                    </div>
                                    <div className="item text-[14px] font-inter">Search Ticket</div>
                                </button>
                            </div>
                        </div>
                    </div>
              </Container>      
            </div> 
    </div>
  )
}

export default MobileSearch