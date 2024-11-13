import React from 'react'
import { twMerge } from 'tailwind-merge'

const Container = ({ className, children }) => {
  return (
    <div className={twMerge(" lg:max-w-[1300px] md:max-w-[1000px]", className)}>
      {children}
    </div>
  )
}

export default Container
