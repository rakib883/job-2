import React from 'react'
import { twMerge } from 'tailwind-merge'

const Container = ({ className, children }) => {
  return (
    <div className={twMerge(" lg:max-w-[1300px]  mobile:max-w-[380px]", className)}>
      {children}
    </div>
  )
}

export default Container
