import React from 'react'
import { twMerge } from 'tailwind-merge'

const Container = ({ className, children }) => {
  return (
    <div className={twMerge("mx-4", className)}>
      {children}
    </div>
  )
}

export default Container
