import React from 'react'
import { twMerge } from 'tailwind-merge'

const Container = ({ className, children }) => {
  return (
    <div className={twMerge("sm:mx-[16px]", className)}>
      {children}
    </div>
  )
}

export default Container
