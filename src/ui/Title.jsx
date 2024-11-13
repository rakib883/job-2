import React from 'react'
import { twMerge } from 'tailwind-merge'

const Title = ({className,title}) => {
  return (
    <div className={twMerge(" text-[#ffffff] font-inter ", className)}>{title}</div>
  )
}

export default Title