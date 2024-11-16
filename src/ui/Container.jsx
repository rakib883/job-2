import React from 'react'
import { twMerge } from 'tailwind-merge'

const Container = ({ className, children }) => {
  return (
    <div className={twMerge("mx-4 lg:max-w-[1300px]", className)}>
      {children}
    </div>
  )
}

export default Container
